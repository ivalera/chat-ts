interface Elements {
    msgSendForm: HTMLFormElement | null;
    msgInput: HTMLInputElement | null;
    msgTemplate: HTMLTemplateElement | null;
    msgList: HTMLUListElement | null;
}

const UI_ELEMENTS: Elements = {
    msgSendForm: document.querySelector('.chat__form-msg-send'),
    msgInput: document.querySelector('.chat__send-text'),
    msgTemplate: document.querySelector('#message'),
    msgList: document.querySelector('.chat__messages-list')
};

export { UI_ELEMENTS };