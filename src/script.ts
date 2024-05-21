import { UI_ELEMENTS } from "./ui_elements.js";

UI_ELEMENTS.msgSendForm?.addEventListener('submit', sendMessage);


function sendMessage(event: Event) {
    event.preventDefault();
    
    if (!UI_ELEMENTS.msgInput || !UI_ELEMENTS.msgTemplate || !UI_ELEMENTS.msgList) {
        return;
    }

    const msgText: string = UI_ELEMENTS.msgInput.value;
    
    if (!msgText) {
        return;
    }

    const templateContent: DocumentFragment = UI_ELEMENTS.msgTemplate.content.cloneNode(true) as DocumentFragment;
    const messageText: HTMLElement | null = templateContent.querySelector('.chat__message-text');
    
    if (!messageText) {
        return;
    }
    
    messageText.textContent = `Я: ${msgText}`;
    UI_ELEMENTS.msgList.append(templateContent);
    UI_ELEMENTS.msgInput.value = '';
}