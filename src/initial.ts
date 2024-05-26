import Cookies from "js-cookie";
import { AUTHORIZATION_ELEMENTS } from "./ui_elements.js";
import { renderMessages } from "./messages.js";
import { WEB_SOKET_URL, connectWebSocket } from "./websocket.js";

function initialChat() {
    const userToken = Cookies.get('userToken');
    if(!userToken) AUTHORIZATION_ELEMENTS.DIALOG?.showModal();

    AUTHORIZATION_ELEMENTS.DIALOG?.close();
    connectWebSocket(userToken as string);
    renderMessages();
}

export { initialChat };