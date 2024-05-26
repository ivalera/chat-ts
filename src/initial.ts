import Cookies from "js-cookie";
import { ADDITIONAL_ELEMENTS, AUTHORIZATION_ELEMENTS, MESSAGE_ELEMENTS } from "./ui_elements.js";
import { renderMessages } from "./messages.js";
import { connectWebSocket } from "./websocket.js";

const INITIAL_HEIGHT_CHAT_PLACE = 258;

function initialChat() {
    const userToken = Cookies.get('userToken');
    if(userToken === undefined) {
        console.log('yes');
        AUTHORIZATION_ELEMENTS.DIALOG?.showModal();
        return;
    }
    AUTHORIZATION_ELEMENTS.DIALOG?.close();
    connectWebSocket(userToken as string);
    renderMessages();
    setDynamicOutputMessagesHeight();
}

function setDynamicOutputMessagesHeight() {
    if(!MESSAGE_ELEMENTS.OUTPUT_PLACE || !ADDITIONAL_ELEMENTS.MAIN_SECTION) return;
    const mainSectionHeight = ADDITIONAL_ELEMENTS.MAIN_SECTION.clientHeight;
    const updateHeight = mainSectionHeight - INITIAL_HEIGHT_CHAT_PLACE;
    MESSAGE_ELEMENTS.OUTPUT_PLACE.style.height = `${updateHeight}px`;
}

export { initialChat, setDynamicOutputMessagesHeight };