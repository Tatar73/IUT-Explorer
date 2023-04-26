import { createChatBotMessage } from 'react-chatbot-kit';
import Options from "./Widget/FirstResponse";
import GacoWidget from './Widget/GacoWidget';
import MMIWidget from './Widget/MMIWidget';
import GCCDWidget from './Widget/GCCDWidget';
import SGMWidget from './Widget/SGMWidget';
import NSPWidget from './Widget/NSPWidget';
import PECWidget from './Widget/PECWidget';
import Response7Widget from './Widget/Response7Widget';
import ResponseEight from './Widget/ResponseEight';


const botName = 'Evan';

const config = {
    botName: botName,
  initialMessages: [createChatBotMessage("Vers quelle formation souhaitez-vous vous diriger ?",{
    widget: "options",
  })
],
widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "GacoWidget",
      widgetFunc: (props) => <GacoWidget {...props} />,
    },
    {
      widgetName: "GCCDWidget",
      widgetFunc: (props) => <GCCDWidget {...props} />,
    },
    {
      widgetName: "MMIWidget",
      widgetFunc: (props) => <MMIWidget {...props} />,
    },
    {
      widgetName: "PECWidget",
      widgetFunc: (props) => <PECWidget {...props} />,
    },
    {
      widgetName: "SGMWidget",
      widgetFunc: (props) => <SGMWidget {...props} />,
    },
    {
      widgetName: "NSPWidget",
      widgetFunc: (props) => <NSPWidget {...props} />,
    },
    {
      widgetName: "Response7Widget",
      widgetFunc: (props) => <Response7Widget {...props} />,
    },
    {
      widgetName: "Responseheight",
      widgetFunc: (props) => <ResponseEight {...props} />,
    },
  ],
};

export default config;
