import Cookies from "js-cookie";
import { ADDITIONAL_ELEMENTS } from "./ui_elements.js";
const URL_BASE = 'https://edu.strada.one/api/';
const URL_USER = `${URL_BASE}user`;
const URL_USER_ME = `${URL_BASE}user/me`;
const URL_USERS_MESSAGES = `${URL_BASE}messages/`;
const DEFAULT_HEADER = { 'Content-Type': 'application/json;charset=utf-8' };
async function makeRequest(url, options) {
    try {
        const response = await fetch(url, options);
        if (!ADDITIONAL_ELEMENTS.INFO_ALERT)
            return;
        if (!response.ok) {
            ADDITIONAL_ELEMENTS.INFO_ALERT.textContent = "Код не отправлен! ";
            if (response.status === 401) {
                throw new Error('Ошибка авторизации');
            }
            else {
                throw new Error('Ошибка на сервере');
            }
        }
        else {
            ADDITIONAL_ELEMENTS.INFO_ALERT.textContent = "Код отправлен";
        }
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
}
async function senTokenToEmail(userEmail) {
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
async function getUsersMessages() {
    return makeRequest(URL_USERS_MESSAGES, {
        method: 'GET',
        headers: {
            ...DEFAULT_HEADER,
            Authorization: `Bearer ${Cookies.get('userToken')}`,
        }
    });
}
export { senTokenToEmail, getUserRequest, changeUserNameRequest, getUsersMessages };
