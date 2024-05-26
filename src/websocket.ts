import { createMessage } from "./messages.js";
import { Messages } from "./messages.js";
import { scrollMessagesToStart } from "./scroll.js";

const WEB_SOKET_URL = 'wss://edu.strada.one/websockets?';

let webSocket: WebSocket | null = null;

function connectWebSocket(userToken: string) {
    webSocket = new WebSocket(WEB_SOKET_URL + `${userToken}`);

    webSocket.onmessage = function (event: MessageEvent<string>) {
		const eventData = event.data;
		const messages: Messages = JSON.parse(eventData);
        createMessage(messages);
        scrollMessagesToStart();
    }

    webSocket.onclose = function() {
		setTimeout(() => {
            connectWebSocket(userToken);
        }, 1000);
	};

	webSocket.onerror = function(error) {
        console.log(error);
		webSocket?.close();
	};
}

function closeWebSocket(){
	webSocket?.close();
}

export { connectWebSocket, closeWebSocket,  WEB_SOKET_URL };