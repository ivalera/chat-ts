const MESSAGE_ELEMENTS = {
    SEND_FORM: document.querySelector('.chat__form-msg-send'),
    TEXT_INPUT: document.querySelector('.chat__send-text'),
    TEMPLATE: document.querySelector('#message'),
    LIST: document.querySelector('.chat__messages-list')
};
const AUTHORIZATION_ELEMENTS = {
    DIALOG: document.querySelector('.auth__frame'),
    EMAIL_INPUT: document.querySelector('.auth__email'),
    FORM: document.querySelector('.auth__form'),
    CONFIRM_TOKEN_BTN: document.querySelector('.auth__confirm-code-btn')
};
const CONFIRM_DIALOG = {
    DIALOG: document.querySelector('.confirm__frame'),
    FORM: document.querySelector('.confirm__form'),
    INPUT_TOKEN: document.querySelector('.confirm__code')
};
const SETTINGS_DIALOG = {
    BUTTON_OPEN: document.querySelector('.chat__setting-btn'),
    DIALOG: document.querySelector('.setting__frame'),
    FORM: document.querySelector('.setting__form'),
    NAME_INPUT: document.querySelector('.setting__change-user'),
    INFO_ALERT: document.querySelector('.setting__warning')
};
const ADDITIONAL_ELEMENTS = {
    INFO_ALERT: document.querySelector('.info_alert'),
    BUTTON_EXIT: document.querySelector('.chat__exit-btn')
};
export { MESSAGE_ELEMENTS, AUTHORIZATION_ELEMENTS, CONFIRM_DIALOG, SETTINGS_DIALOG, ADDITIONAL_ELEMENTS };
