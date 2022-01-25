import React from 'react';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import '../App.css';
import Chatbot from 'react-chatbot-kit';

function chatbotui() {
	return (
		<div className="botui">
			<div style={{ maxWidth: '300px' }}>
				<Chatbot
					config={config}
					actionProvider={ActionProvider}
					messageParser={MessageParser}
				/>
			</div>
		</div>
	);
}

export default chatbotui;
