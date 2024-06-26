interface MessagesUI {
    SEND_FORM: HTMLFormElement | null,
    TEXT_INPUT: HTMLInputElement | null,
    TEMPLATE: HTMLTemplateElement | null,
    LIST: HTMLUListElement | null,
    OUTPUT_PLACE: HTMLDivElement | null
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
    FORM : HTMLFormElement | null,
    NAME_INPUT: HTMLInputElement | null,
    INFO_ALERT: HTMLParagraphElement | null
}

interface SearchUI {
    FORM: HTMLFormElement | null,
    INPUT_MESSAGES: HTMLInputElement | null,
    LIST: HTMLUListElement | null,
    BUTTON_CLEAR : HTMLButtonElement | null
}

interface AdditionalUI {
    INFO_ALERT: HTMLParagraphElement | null,
    BUTTON_EXIT: HTMLButtonElement | null,
    MAIN_SECTION: HTMLElement | null
}

const MESSAGE_ELEMENTS: MessagesUI = {
    SEND_FORM: document.querySelector('.chat__form-msg-send'),
    TEXT_INPUT: document.querySelector('.chat__send-text'),
    TEMPLATE: document.querySelector('#message'),
    LIST: document.querySelector('.chat__messages-list'),
    OUTPUT_PLACE: document.querySelector('.chat__messages-place')

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

const SEARCH_ELEMENTS : SearchUI = {
    FORM: document.querySelector('.form__search'),
    INPUT_MESSAGES: document.querySelector('.form__search-input'),
    LIST: document.querySelector('.chat__search-list'),
    BUTTON_CLEAR: document.querySelector('.btn__clear_search')
}

const ADDITIONAL_ELEMENTS: AdditionalUI = {
    INFO_ALERT: document.querySelector('.info_alert'),
    BUTTON_EXIT: document.querySelector('.chat__exit-btn'),
    MAIN_SECTION: document.querySelector('.main')
};

export { 
    MESSAGE_ELEMENTS, 
    AUTHORIZATION_ELEMENTS, 
    CONFIRM_DIALOG, 
    SETTINGS_DIALOG, 
    ADDITIONAL_ELEMENTS, 
    SEARCH_ELEMENTS 
};