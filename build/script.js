const sendForm = document.querySelector('.chat__form-msg-send');
const msgInput = document.querySelector('.chat__send-text');
const msgTemplate = document.querySelector('#message');
const msgList = document.querySelector('.chat__messages-list');
if (sendForm) {
    sendForm.addEventListener('submit', sendMessage);
}
function sendMessage(event) {
    event.preventDefault();
    if (!msgInput || !msgTemplate || !msgList) {
        return;
    }
    const msgText = msgInput.value;
    if (!msgText) {
        return;
    }
    const templateContent = msgTemplate.content.cloneNode(true);
    const messageText = templateContent.querySelector('.chat__message-text');
    if (!messageText) {
        return;
    }
    messageText.textContent = `Я: ${msgText}`;
    msgList.append(templateContent);
    msgInput.value = '';
}
export {};
