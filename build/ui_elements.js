const MESSAGE_ELEMENTS = {
    msgSendForm: document.querySelector('.chat__form-msg-send'),
    msgInput: document.querySelector('.chat__send-text'),
    msgTemplate: document.querySelector('#message'),
    msgList: document.querySelector('.chat__messages-list')
};
const AUTHORIZATION_ELEMENTS = {
    authDialog: document.querySelector('.auth__frame'),
    authEmail: document.querySelector('.auth__email'),
    authForm: document.querySelector('.auth__form'),
    authConfirmCodeBtn: document.querySelector('.auth__confirm-code-btn')
};
const CONFIRM_DIALOG = {
    confirmDialog: document.querySelector('.confirm__frame'),
    confirmForm: document.querySelector('.confirm__form'),
    confirmInputCode: document.querySelector('.confirm__code')
};
const SETTINGS_DIALOG = {
    buttonOpen: document.querySelector('.chat__setting-btn'),
    dialog: document.querySelector('.setting__frame'),
    form: document.querySelector('.setting__form'),
    nameInput: document.querySelector('.setting__change-user'),
    alert: document.querySelector('.setting__alert')
};
const ADDITIONAL_ELEMENTS = {
    codeAlert: document.querySelector('.codeAlert'),
    btnExitChat: document.querySelector('.chat__exit-btn')
};
export { MESSAGE_ELEMENTS, AUTHORIZATION_ELEMENTS, CONFIRM_DIALOG, SETTINGS_DIALOG, ADDITIONAL_ELEMENTS };
