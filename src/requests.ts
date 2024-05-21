import { ALERT_ELEMENTS } from "./ui_elements.js";

export { sendCodeRequest };

const postUrl = "https://edu.strada.one/api/user";


async function makeRequest(url: string, options?: RequestInit) {
    try{
        const response = await fetch(url, options);
        if(!ALERT_ELEMENTS.codeAlert) {
            return;
        }
        if(response.ok) {
            console.log('Код отправлен');
            ALERT_ELEMENTS.codeAlert.textContent = "Код отправлен";
        }else {
            ALERT_ELEMENTS.codeAlert.textContent = "Код не отправлен";
            console.log('Код не отправлен');
        }
    }catch(error) {
        console.log(error);
    }
}

async function sendCodeRequest(userEmail: string) {
    if(!userEmail) {
        return; 
    }
    makeRequest(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ email : userEmail })   
    });

}
