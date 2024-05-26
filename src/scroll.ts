import { renderMessages } from "./messages.js";
import { MESSAGE_ELEMENTS } from "./ui_elements.js";

function scrollMessagesToStart() {
    if(MESSAGE_ELEMENTS.LIST) {
        MESSAGE_ELEMENTS.LIST.scrollTop = MESSAGE_ELEMENTS.LIST.scrollHeight;
    }
}

function scrollHandler() {
    let elemScrollTop = MESSAGE_ELEMENTS.LIST?.scrollTop;
    if(elemScrollTop === 0) {
        renderMessages();
    }
}

export { scrollMessagesToStart, scrollHandler };