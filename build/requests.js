import Cookies from "js-cookie";
import { ADDITIONAL_ELEMENTS } from "./ui_elements.js";
const DEFAULT_HEADER = { 'Content-Type': 'application/json;charset=utf-8' };
const URL_USER = "https://edu.strada.one/api/user";
const URL_USER_ME = "https://edu.strada.one/api/user/me";
async function makeRequest(url, options) {
    try {
        const response = await fetch(url, options);
        if (!ADDITIONAL_ELEMENTS.codeAlert) {
            return;
        }
        if (!response.ok) {
            ADDITIONAL_ELEMENTS.codeAlert.textContent = "Код не отправлен! ";
            if (response.status === 401) {
                throw new Error('Ошибка авторизации');
            }
            else {
                throw new Error('Ошибка на сервере');
            }
        }
        else {
            ADDITIONAL_ELEMENTS.codeAlert.textContent = "Код отправлен";
        }
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}
async function sendCodeRequest(userEmail) {
    if (!userEmail) {
        return;
    }
    makeRequest(URL_USER, {
        method: 'POST',
        headers: DEFAULT_HEADER,
        body: JSON.stringify({ email: userEmail })
    });
}
async function getUserRequest(userToken) {
    return makeRequest(URL_USER_ME, {
        method: 'GET',
        headers: {
            ...DEFAULT_HEADER,
            Authorization: `Bearer ${userToken}`,
        },
    });
}
async function changeUserNameRequest(userName) {
    return makeRequest(URL_USER, {
        method: 'PATCH',
        headers: {
            ...DEFAULT_HEADER,
            Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
        body: JSON.stringify({ name: userName })
    });
}
export { sendCodeRequest, getUserRequest, changeUserNameRequest };
