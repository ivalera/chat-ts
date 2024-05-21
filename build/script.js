import { sendCodeRequest } from "./requests.js";
import { AUTHORIZATION_ELEMENTS, CONFIRMATION_DIALOG, MESSAGE_ELEMENTS } from "./ui_elements.js";
AUTHORIZATION_ELEMENTS.authDialog?.showModal();
AUTHORIZATION_ELEMENTS.authForm?.addEventListener('submit', sendAuthCode);
AUTHORIZATION_ELEMENTS.authConfirmCodeBtn?.addEventListener('click', showConfirmDialog);
CONFIRMATION_DIALOG.confirmForm?.addEventListener('submit', sendConfirm);
MESSAGE_ELEMENTS.msgSendForm?.addEventListener('submit', sendMessage);
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
function showConfirmDialog() {
    AUTHORIZATION_ELEMENTS.authDialog?.close();
    CONFIRMATION_DIALOG.confirmDialog?.showModal();
}
function sendConfirm(event) {
    event.preventDefault();
    if (!CONFIRMATION_DIALOG.confirmInputCode) {
        return;
    }
    const confirmCode = CONFIRMATION_DIALOG.confirmInputCode.value;
    CONFIRMATION_DIALOG.confirmInputCode.value = "";
    if (!confirmCode) {
        CONFIRMATION_DIALOG.confirmInputCode.placeholder = 'Ведите код!';
    }
}
