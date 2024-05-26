import { Messages } from "./messages.js";

function saveMessages(messagesList: Messages[]) {
    localStorage.setItem('messagesList', JSON.stringify([...messagesList]));
}

function getSaveMessages(): Messages[] {
    return JSON.parse(localStorage.getItem('messagesList') as string);
}

export {  saveMessages, getSaveMessages };