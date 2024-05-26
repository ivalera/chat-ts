interface MessagesUI {
    SEND_FORM: HTMLFormElement | null;
    TEXT_INPUT: HTMLInputElement | null;
    TEMPLATE: HTMLTemplateElement | null;
    LIST: HTMLUListElement | null;
}

interface AutorizationUI {
    DIALOG: HTMLDialogElement | null,
    EMAIL_INPUT: HTMLInputElement | null,
    FORM: HTMLFormElement | null,
    CONFIRM_TOKEN_BTN: HTMLButtonElement | null 
}

interface ConfirmationUI {
    DIALOG: HTMLDialogElement | null,
    FORM: HTMLFormElement | null,
    INPUT_TOKEN: HTMLInputElement | null
}

interface SettingsUI {
    BUTTON_OPEN: HTMLButtonElement | null,
    DIALOG : HTMLDialogElement | null,
    FORM : HTMLFormElement | null
    NAME_INPUT: HTMLInputElement | null,
    INFO_ALERT: HTMLParagraphElement | null
}

interface AdditionalUI {
    INFO_ALERT: HTMLParagraphElement | null,
    BUTTON_EXIT: HTMLButtonElement | null
}

const MESSAGE_ELEMENTS: MessagesUI = {
    SEND_FORM: document.querySelector('.chat__form-msg-send'),
    TEXT_INPUT: document.querySelector('.chat__send-text'),
    TEMPLATE: document.querySelector('#message'),
    LIST: document.querySelector('.chat__messages-list')
};

const AUTHORIZATION_ELEMENTS: AutorizationUI = {
    DIALOG: document.querySelector('.auth__frame'),
    EMAIL_INPUT: document.querySelector('.auth__email'),
    FORM: document.querySelector('.auth__form'),
    CONFIRM_TOKEN_BTN: document.querySelector('.auth__confirm-code-btn')
}

const CONFIRM_DIALOG: ConfirmationUI = {
    DIALOG:  document.querySelector('.confirm__frame'),
    FORM: document.querySelector('.confirm__form'),
    INPUT_TOKEN: document.querySelector('.confirm__code')
}

const SETTINGS_DIALOG: SettingsUI = {
    BUTTON_OPEN: document.querySelector('.chat__setting-btn'),
    DIALOG: document.querySelector('.setting__frame'),
    FORM: document.querySelector('.setting__form'),
    NAME_INPUT: document.querySelector('.setting__change-user'),
    INFO_ALERT: document.querySelector('.setting__warning')
}

const ADDITIONAL_ELEMENTS: AdditionalUI = {
    INFO_ALERT: document.querySelector('.info_alert'),
    BUTTON_EXIT: document.querySelector('.chat__exit-btn')
};

export { MESSAGE_ELEMENTS, AUTHORIZATION_ELEMENTS, CONFIRM_DIALOG, SETTINGS_DIALOG, ADDITIONAL_ELEMENTS };