const MESSAGE_ELEMENTS = {
    msgSendForm: document.querySelector('.chat__form-msg-send'),
    msgInput: document.querySelector('.chat__send-text'),
    msgTemplate: document.querySelector('#message'),
    msgList: document.querySelector('.chat__messages-list')
};
const ALERT_ELEMENTS = {
    codeAlert: document.querySelector('.codeAlert')
};
const AUTHORIZATION_ELEMENTS = {
    authDialog: document.querySelector('.auth__frame'),
    authEmail: document.querySelector('.auth__email'),
    authForm: document.querySelector('.auth__form'),
    authConfirmCodeBtn: document.querySelector('.auth__send-code-btn')
};
const CONFIRMATION_DIALOG = {
    confirmDialog: document.querySelector('.confirm__frame'),
    confirmForm: document.querySelector('.confirm__form'),
    confirmInputCode: document.querySelector('.confirm__code')
};
export { MESSAGE_ELEMENTS, AUTHORIZATION_ELEMENTS, CONFIRMATION_DIALOG, ALERT_ELEMENTS };
