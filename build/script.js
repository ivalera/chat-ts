import Cookies from "js-cookie";
import { sendCodeRequest, getUserRequest, changeUserNameRequest } from "./requests.js";
import { AUTHORIZATION_ELEMENTS, CONFIRM_DIALOG, MESSAGE_ELEMENTS, SETTINGS_DIALOG, ADDITIONAL_ELEMENTS } from "./ui_elements.js";
AUTHORIZATION_ELEMENTS.authDialog?.showModal();
AUTHORIZATION_ELEMENTS.authForm?.addEventListener('submit', sendAuthCode);
AUTHORIZATION_ELEMENTS.authConfirmCodeBtn?.addEventListener('click', showConfirmCodeDialog);
CONFIRM_DIALOG.confirmForm?.addEventListener('submit', confirmCodeAuthorization);
MESSAGE_ELEMENTS.msgSendForm?.addEventListener('submit', sendMessage);
SETTINGS_DIALOG.buttonOpen?.addEventListener('click', showSettingDialog);
SETTINGS_DIALOG.form?.addEventListener('submit', changeUserName);
ADDITIONAL_ELEMENTS.btnExitChat?.addEventListener('click', exitChat);
function initialChat() {
    const userToken = Cookies.get('userToken');
    if (userToken) {
        AUTHORIZATION_ELEMENTS.authDialog?.close();
    }
    else {
        AUTHORIZATION_ELEMENTS.authDialog?.showModal();
    }
}
initialChat();
function exitChat() {
    Cookies.remove('userToken');
    AUTHORIZATION_ELEMENTS.authDialog?.showModal();
}
function sendMessage(event) {
    event.preventDefault();
    if (!MESSAGE_ELEMENTS.msgInput || !MESSAGE_ELEMENTS.msgTemplate || !MESSAGE_ELEMENTS.msgList) {
        return;
    }
    const msgText = MESSAGE_ELEMENTS.msgInput.value;
    if (!msgText) {
        return;
    }
    const templateContent = MESSAGE_ELEMENTS.msgTemplate.content.cloneNode(true);
    const messageText = templateContent.querySelector('.chat__message-text');
    if (!messageText) {
        return;
    }
    messageText.textContent = `Я: ${msgText}`;
    MESSAGE_ELEMENTS.msgList.append(templateContent);
    MESSAGE_ELEMENTS.msgInput.value = '';
}
function sendAuthCode(event) {
    event.preventDefault();
    if (!AUTHORIZATION_ELEMENTS.authEmail) {
        return;
    }
    const email = AUTHORIZATION_ELEMENTS.authEmail.value;
    AUTHORIZATION_ELEMENTS.authEmail.value = "";
    if (!email) {
        AUTHORIZATION_ELEMENTS.authEmail.placeholder = 'Введите почту!';
        return;
    }
    sendCodeRequest(email);
}
function showConfirmCodeDialog() {
    AUTHORIZATION_ELEMENTS.authDialog?.close();
    CONFIRM_DIALOG.confirmDialog?.showModal();
}
async function confirmCodeAuthorization(event) {
    event.preventDefault();
    // if(!CONFIRM_DIALOG.confirmInputCode || !CONFIRM_DIALOG.confirmDialog ||
    //     !AUTHORIZATION_ELEMENTS.authDialog || !SETTINGS_DIALOG.settingDialog ||
    //     !SETTINGS_DIALOG.settingNameInput || !SETTINGS_DIALOG.settingAlert) {
    //     return;
    // }
    if (!CONFIRM_DIALOG.confirmInputCode) {
        return;
    }
    const userToken = CONFIRM_DIALOG.confirmInputCode.value;
    CONFIRM_DIALOG.confirmInputCode.value = "";
    if (!userToken) {
        CONFIRM_DIALOG.confirmInputCode.placeholder = 'Ведите код!';
        return;
    }
    try {
        console.log(userToken);
        const userData = await getUserRequest(userToken);
        console.log(userData);
        if (!userData) {
            console.log("Токен не подходит!");
            return;
        }
        AUTHORIZATION_ELEMENTS.authDialog?.close();
        CONFIRM_DIALOG.confirmDialog?.close();
        Cookies.set('userToken', userToken, { expires: 3 });
    }
    catch (error) {
        console.error("Ошибка при обработке запроса пользователя:", error);
    }
}
function showSettingDialog() {
    SETTINGS_DIALOG.dialog?.showModal();
    if (!SETTINGS_DIALOG.nameInput)
        return;
    const nameCookie = Cookies.get('userName');
    if (!nameCookie)
        return;
    SETTINGS_DIALOG.nameInput.placeholder = nameCookie;
}
async function changeUserName(event) {
    event.preventDefault();
    if (!SETTINGS_DIALOG.alert)
        return;
    SETTINGS_DIALOG.alert.textContent = "";
    if (!SETTINGS_DIALOG.nameInput)
        return;
    const nameUser = SETTINGS_DIALOG.nameInput.value;
    if (!nameUser) {
        SETTINGS_DIALOG.nameInput.placeholder = "Введите имя!";
        return;
    }
    try {
        const receivedUsername = await changeUserNameRequest(nameUser);
        console.log(receivedUsername);
        if (!receivedUsername) {
            SETTINGS_DIALOG.alert.textContent = "Имя не изменено!";
        }
        Cookies.set('userName', nameUser);
        SETTINGS_DIALOG.nameInput.placeholder = nameUser;
        SETTINGS_DIALOG.alert.textContent = "Имя изменено!";
    }
    catch (error) {
        console.log(error);
    }
}
