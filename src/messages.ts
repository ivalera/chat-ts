import { format } from 'date-fns';
import { getUsersMessages } from './requests.js';
import { MESSAGE_ELEMENTS } from './ui_elements.js';

const MY_EMAIL = "ivalera.devel@gmail.com";

interface User {
    email: string;
	name: string;
}

export interface Messages {
	text: string;
	updatedAt: string;
	user: User;
}

let messagesAll: Messages[] = [];

async function loadMessages() {
    try{
        const messagesData = await getUsersMessages();
        if (!messagesData) {
            console.log('Сообщения не загружены!')
        }
        messagesAll = messagesData.messages;
    } catch (error){
        console.log(error);
    }
}

async function renderMessages() {  
    if(!MESSAGE_ELEMENTS.LIST) { return }
	const previousScrollHeight = MESSAGE_ELEMENTS.LIST.scrollHeight;  
    await loadMessages();
    const messages = messagesAll;
    messages.map(element => {
        createMessage((element), 'prepend');
    });
    MESSAGE_ELEMENTS.LIST.scrollTop = MESSAGE_ELEMENTS.LIST.scrollHeight - previousScrollHeight;
}

function createMessage(message: Messages, addMessageMethd = 'append') {
    try{
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
    } catch (error) {
        console.log(error);
    }
}

export { renderMessages, createMessage };