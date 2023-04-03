import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Evan';

const config = {
    botName: botName,
  initialMessages: [createChatBotMessage(`Salut ! Moi c'est ${botName}. Comment puis-je vous aidez ?`,{
  })
],
};

export default config;