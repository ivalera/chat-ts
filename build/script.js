import Cookies from "js-cookie";
import { senTokenToEmail, getUserRequest, changeUserNameRequest } from "./requests.js";
import { AUTHORIZATION_ELEMENTS, CONFIRM_DIALOG, MESSAGE_ELEMENTS, SETTINGS_DIALOG, ADDITIONAL_ELEMENTS } from "./ui_elements.js";
import { renderMessages } from "./messages.js";
AUTHORIZATION_ELEMENTS.DIALOG?.showModal();
AUTHORIZATION_ELEMENTS.FORM?.addEventListener('submit', sendAuthCode);
AUTHORIZATION_ELEMENTS.CONFIRM_TOKEN_BTN?.addEventListener('click', showConfirmTokenDialog);
CONFIRM_DIALOG.FORM?.addEventListener('submit', confirmTokenAuthorization);
MESSAGE_ELEMENTS.SEND_FORM?.addEventListener('submit', sendMessage);
SETTINGS_DIALOG.BUTTON_OPEN?.addEventListener('click', showSettingDialog);
SETTINGS_DIALOG.FORM?.addEventListener('submit', changeUserName);
ADDITIONAL_ELEMENTS.BUTTON_EXIT?.addEventListener('click', exitChat);
function initialChat() {
    const userToken = Cookies.get('userToken');
    if (!userToken) {
        AUTHORIZATION_ELEMENTS.DIALOG?.showModal();
    }
    else {
        AUTHORIZATION_ELEMENTS.DIALOG?.close();
        renderMessages();
    }
}
initialChat();
function exitChat() {
    Cookies.remove('userToken');
    AUTHORIZATION_ELEMENTS.DIALOG?.showModal();
}
function sendMessage(event) {
    event.preventDefault();
    if (!MESSAGE_ELEMENTS.TEXT_INPUT || !MESSAGE_ELEMENTS.TEMPLATE || !MESSAGE_ELEMENTS.LIST) {
        return;
    }
    const msgTextInput = MESSAGE_ELEMENTS.TEXT_INPUT.value;
    const templateContent = MESSAGE_ELEMENTS.TEMPLATE.content.cloneNode(true);
    const messageTextTemplate = templateContent.querySelector('.chat__message-text');
    if (!msgTextInput || !messageTextTemplate)
        return;
    messageTextTemplate.textContent = `Я: ${msgTextInput}`;
    MESSAGE_ELEMENTS.LIST.append(templateContent);
    MESSAGE_ELEMENTS.TEXT_INPUT.value = '';
}
function sendAuthCode(event) {
    event.preventDefault();
    if (!AUTHORIZATION_ELEMENTS.EMAIL_INPUT)
        return;
    const email = AUTHORIZATION_ELEMENTS.EMAIL_INPUT.value;
    AUTHORIZATION_ELEMENTS.EMAIL_INPUT.value = "";
    if (!email) {
        AUTHORIZATION_ELEMENTS.EMAIL_INPUT.placeholder = 'Введите почту!';
        return;
    }
    senTokenToEmail(email);
}
function showConfirmTokenDialog() {
    AUTHORIZATION_ELEMENTS.DIALOG?.close();
    CONFIRM_DIALOG.DIALOG?.showModal();
}
async function confirmTokenAuthorization(event) {
    event.preventDefault();
    if (!CONFIRM_DIALOG.INPUT_TOKEN || !CONFIRM_DIALOG.DIALOG ||
        !AUTHORIZATION_ELEMENTS.DIALOG || !SETTINGS_DIALOG.NAME_INPUT) {
        return;
    }
    const userToken = CONFIRM_DIALOG.INPUT_TOKEN.value;
    CONFIRM_DIALOG.INPUT_TOKEN.value = "";
    if (!userToken) {
        CONFIRM_DIALOG.INPUT_TOKEN.placeholder = 'Ведите код!';
        return;
    }
    try {
        const userData = await getUserRequest(userToken);
        if (!ADDITIONAL_ELEMENTS.INFO_ALERT)
            return;
        if (!userData) {
            ADDITIONAL_ELEMENTS.INFO_ALERT.textContent = "Токен не подходит!";
            console.log("Токен не подходит!");
            return;
        }
        AUTHORIZATION_ELEMENTS.DIALOG.close();
        CONFIRM_DIALOG.DIALOG.close();
        Cookies.set('userToken', userToken, { expires: 3 });
    }
    catch (error) {
        console.error("Ошибка при обработке запроса пользователя:", error);
    }
}
function showSettingDialog() {
    if (!SETTINGS_DIALOG.DIALOG || !SETTINGS_DIALOG.NAME_INPUT)
        return;
    SETTINGS_DIALOG.DIALOG.showModal();
    const nameCookie = Cookies.get('userName');
    if (!nameCookie)
        return;
    SETTINGS_DIALOG.NAME_INPUT.placeholder = nameCookie;
}
async function changeUserName(event) {
    event.preventDefault();
    if (!SETTINGS_DIALOG.INFO_ALERT || !SETTINGS_DIALOG.NAME_INPUT)
        return;
    SETTINGS_DIALOG.INFO_ALERT.textContent = "";
    const nameUser = SETTINGS_DIALOG.NAME_INPUT.value;
    if (!nameUser) {
        SETTINGS_DIALOG.NAME_INPUT.placeholder = "Введите имя!";
        return;
    }
    try {
        const receivedUsername = await changeUserNameRequest(nameUser);
        console.log(receivedUsername);
        if (!receivedUsername) {
            SETTINGS_DIALOG.INFO_ALERT.textContent = "Имя не изменено!";
        }
        Cookies.set('userName', nameUser);
        SETTINGS_DIALOG.NAME_INPUT.placeholder = nameUser;
        SETTINGS_DIALOG.INFO_ALERT.textContent = "Имя изменено!";
    }
    catch (error) {
        console.log(error);
    }
}
