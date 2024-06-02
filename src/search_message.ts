import { format } from "date-fns";
import { getSaveMessages } from "./local_storage.js";
import { SEARCH_ELEMENTS } from "./ui_elements.js";

const START_SEARCH_POSITION = 0;
const REG_SPACES = /^\s+$/;

function searchMessages(event: Event){
	try{
        event.preventDefault();

		if(!SEARCH_ELEMENTS.LIST || !SEARCH_ELEMENTS.INPUT_MESSAGES || !SEARCH_ELEMENTS.BUTTON_CLEAR) return;

		clearSearchMessages(SEARCH_ELEMENTS.LIST)
		SEARCH_ELEMENTS.LIST.scrollTop = START_SEARCH_POSITION;
        
        const messageSearch = SEARCH_ELEMENTS.INPUT_MESSAGES.value.trim();
        if(messageSearch === '' || REG_SPACES.test(messageSearch)){
            SEARCH_ELEMENTS.INPUT_MESSAGES.value = "";
            SEARCH_ELEMENTS.INPUT_MESSAGES.placeholder = "Введите текст для поиска";
            return;
        }
		
		let messagesStorage = getSaveMessages();
		let foundMessages = messagesStorage.filter(element => 
			element.text.toLocaleLowerCase().includes(messageSearch.toLocaleLowerCase()));
        if(foundMessages.length !== 0) {
            SEARCH_ELEMENTS.BUTTON_CLEAR.hidden = false;
        }
		foundMessages.forEach(element => {
			const messageSearch = document.createElement('li');
			const userMessage = document.createElement('span');
			const textMessage = document.createElement('p');
			const timeMessage = document.createElement('p');
			if(!userMessage) { return };
			userMessage.textContent = element.user.name;
			if(!textMessage) { return };
			textMessage.textContent = element.text;
			if(!timeMessage) { return };
			timeMessage.textContent = format(element.updatedAt, "dd.MM.yy-HH:mm");
			messageSearch.classList.add('chat__message');
			userMessage.classList.add('chat__message-user');
			textMessage.classList.add('chat__message-text');
			timeMessage.classList.add('chat__message-time');
			messageSearch.append(userMessage);
			messageSearch.append(textMessage);
			messageSearch.append(timeMessage);
			SEARCH_ELEMENTS.LIST?.append(messageSearch);
		});
			
	} catch(error){
		console.log(error);
	}
}

function clearSearchMessages(messagesList: Element){
	while(messagesList?.firstChild ){
		messagesList?.removeChild(messagesList?.firstChild );
	}
}

function clearSearched(){
    if(!SEARCH_ELEMENTS.LIST || !SEARCH_ELEMENTS.INPUT_MESSAGES || !SEARCH_ELEMENTS.BUTTON_CLEAR) return;
    clearSearchMessages(SEARCH_ELEMENTS.LIST);

    SEARCH_ELEMENTS.INPUT_MESSAGES.value = "";
    SEARCH_ELEMENTS.INPUT_MESSAGES.placeholder = "Введите текст для поиска";
    SEARCH_ELEMENTS.BUTTON_CLEAR.hidden = true;
}

export { searchMessages, clearSearched };