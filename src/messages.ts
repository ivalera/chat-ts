import { format } from 'date-fns';
import { getUsersMessages } from './requests.js';
import { MESSAGE_ELEMENTS } from './ui_elements.js';

const MY_EMAIL = "ivalera.devel@gmail.com";
let messagesCurrent = 0;
const MESSAGE_NEXT = 20;
const MESSAGES_ALL = 300;
let isEndMessage = false;

interface User {
    email: string;
	name: string;
}

interface Messages {
	text: string;
	updatedAt: string;
	user: User;
}

let messagesAll: Messages[] = [];

async function loadMessages() {
	const messagesData = await getUsersMessages();
	if (!messagesData) {
        console.log('Сообщения не загружены!')
    }
    messagesAll = messagesData.messages;
}

async function renderMessages() {    
    if(!MESSAGE_ELEMENTS.LIST) return;
	const previousScrollHeight = MESSAGE_ELEMENTS.LIST.scrollHeight;
    console.log(previousScrollHeight);
	if(isEndMessage) { return }
	if(messagesCurrent + MESSAGE_NEXT === MESSAGES_ALL && !isEndMessage) {
		isEndMessage = true;
		const endMesseges = document.createElement("div");
		endMesseges.classList.add('messages__end');
		endMesseges.textContent = 'Вся история загружена';
		MESSAGE_ELEMENTS.LIST.prepend(endMesseges);
		return;
	}
    await loadMessages();
    const messages = messagesAll
		.slice(messagesCurrent, messagesCurrent + MESSAGE_NEXT)
		.reverse();
    messages.reverse().map(element => {
        createMessage((element), 'prepend');
    });
	MESSAGE_ELEMENTS.LIST.scrollTop = MESSAGE_ELEMENTS.LIST.scrollHeight - previousScrollHeight;
	messagesCurrent += MESSAGE_NEXT;
}

function createMessage(message: Messages, addMessageMethd = 'append') {
    let messageEmail = message.user.email;
	const templateContent = MESSAGE_ELEMENTS.TEMPLATE?.content.cloneNode(true) as HTMLTemplateElement;
    const templateMessage = templateContent.querySelector('.chat__message');
	const userMessage = templateMessage?.querySelector('.chat__message-user');
	const textMessage = templateMessage?.querySelector('.chat__message-text');
	const timeMessage = templateMessage?.querySelector('.chat__message-time');
	if(!templateMessage) return;
	if(!userMessage) return ;
	userMessage.textContent = message.user.name;
	if(!textMessage) return;
	textMessage.textContent = message.text;
	if(!timeMessage) return;
    timeMessage.textContent = format(message.updatedAt, "HH:mm");
    if(messageEmail === MY_EMAIL) {
		templateMessage.classList.add('message__right-side');
	}else{
		templateMessage.classList.add('message__left-side');
	}
	if(addMessageMethd === 'prepend') {
		MESSAGE_ELEMENTS.LIST?.prepend(templateMessage);
	}else{
		MESSAGE_ELEMENTS.LIST?.append(templateMessage);
	}
}

export { renderMessages };