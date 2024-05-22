interface MessagesUI {
    msgSendForm: HTMLFormElement | null;
    msgInput: HTMLInputElement | null;
    msgTemplate: HTMLTemplateElement | null;
    msgList: HTMLUListElement | null;
}

interface AutorizationUI {
    authDialog: HTMLDialogElement | null,
    authEmail: HTMLInputElement | null,
    authForm: HTMLFormElement | null,
    authConfirmCodeBtn: HTMLButtonElement | null 
}

interface ConfirmationUI {
    confirmDialog: HTMLDialogElement | null,
    confirmForm: HTMLFormElement | null,
    confirmInputCode: HTMLInputElement | null
}

interface SettingsUI {
    buttonOpen: HTMLButtonElement | null,
    dialog : HTMLDialogElement | null,
    form : HTMLFormElement | null
    nameInput: HTMLInputElement | null,
    alert: HTMLParagraphElement | null
}

interface AdditionalUI {
    codeAlert: HTMLParagraphElement | null,
    btnExitChat: HTMLButtonElement | null
}

const MESSAGE_ELEMENTS: MessagesUI = {
    msgSendForm: document.querySelector('.chat__form-msg-send'),
    msgInput: document.querySelector('.chat__send-text'),
    msgTemplate: document.querySelector('#message'),
    msgList: document.querySelector('.chat__messages-list')
};

const AUTHORIZATION_ELEMENTS: AutorizationUI = {
    authDialog: document.querySelector('.auth__frame'),
    authEmail: document.querySelector('.auth__email'),
    authForm: document.querySelector('.auth__form'),
    authConfirmCodeBtn: document.querySelector('.auth__confirm-code-btn')
}

const CONFIRM_DIALOG: ConfirmationUI = {
    confirmDialog:  document.querySelector('.confirm__frame'),
    confirmForm: document.querySelector('.confirm__form'),
    confirmInputCode: document.querySelector('.confirm__code')
}

const SETTINGS_DIALOG: SettingsUI = {
    buttonOpen: document.querySelector('.chat__setting-btn'),
    dialog: document.querySelector('.setting__frame'),
    form: document.querySelector('.setting__form'),
    nameInput: document.querySelector('.setting__change-user'),
    alert: document.querySelector('.setting__alert')
}

const ADDITIONAL_ELEMENTS: AdditionalUI = {
    codeAlert: document.querySelector('.codeAlert'),
    btnExitChat: document.querySelector('.chat__exit-btn')
};

export { MESSAGE_ELEMENTS, AUTHORIZATION_ELEMENTS, CONFIRM_DIALOG, SETTINGS_DIALOG, ADDITIONAL_ELEMENTS };