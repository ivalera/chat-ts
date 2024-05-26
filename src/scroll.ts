import { MESSAGE_ELEMENTS } from "./ui_elements.js";

function scrollMessagesToStart() {
    if(MESSAGE_ELEMENTS.LIST) {
        MESSAGE_ELEMENTS.LIST.scrollTop = MESSAGE_ELEMENTS.LIST.scrollHeight;
    }
}

export { scrollMessagesToStart }