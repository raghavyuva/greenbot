import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: "Green Bot",
    initialMessages: [
        createChatBotMessage(`Hello Green initiator!,
        Enter you Phone Number?`,
        {
            role: 'system',
            delay: 3000,
          }
        ),
    ],
};

export default config;