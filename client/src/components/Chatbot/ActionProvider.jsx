import React, { useEffect, useState } from 'react';
import GacoWidget from './Widget/GacoWidget';
import GCCDWidget from './Widget/GCCDWidget';
import MMIWidget from './Widget/MMIWidget';
import PECWidget from './Widget/PECWidget';
import SGMWidget from './Widget/SGMWidget';
import NSPWidget from './Widget/NSPWidget';
import Response7Widget from './Widget/Response7Widget';
import ResponseHeight from './Widget/Responseheight'

const config = {
    widgets: [
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
        widgetFunc: (props) => <ResponseHeight {...props} />,
      },
    ],
  };


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [responses, setReponses] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const options = {method: 'GET'};
        
        fetch('http://127.0.0.1:3001/api/questions', options)
        .then(response => response.json())
        .then(response => {
            setReponses(response);
            console.log(responses);
        })
        .catch(err => console.error(err));
    }, []);

  const handleClickNSP = (e) => {
    let botMessage = createChatBotMessage()
    const buttonValueNSP = e.target.value
    console.log(buttonValueNSP);
    if(buttonValueNSP === "Ingénierie matériaux"){
        botMessage = createChatBotMessage(responses[2].question, {
            widget: "SGMWidget",
            withAvatar: true,
          });
    }
    if(buttonValueNSP === "Packaging innovation"){
        botMessage = createChatBotMessage(responses[3].question, {
            widget: "PECWidget",
            withAvatar: true,
          });
    }
    if(buttonValueNSP === "Multimédia internet"){
        botMessage = createChatBotMessage(responses[4].question, {
            widget: "MMIWidget",
            withAvatar: true,
          });
    }
    if(buttonValueNSP === "Génie civil"){
        botMessage = createChatBotMessage(responses[5].question, {
            widget: "GCCDWidget",
            withAvatar: true,
          });
    }
    if(buttonValueNSP === "Gestion commerce"){
        botMessage = createChatBotMessage(responses[6].question, {
            widget: "GacoWidget",
            withAvatar: true,
          });
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleClickNSPBis = (e) => {
    let botMessage = createChatBotMessage()
    botMessage = createChatBotMessage(responses[7].question, {
        widget: "Response7Widget",
        withAvatar: true,
      });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleClick = (e) => {
    const buttonValue = e.target.value
    console.log(buttonValue);
    let botMessage = createChatBotMessage()
    if(buttonValue === "Ne sait pas"){
        botMessage = createChatBotMessage(responses[1].question, {
            widget: "NSPWidget",
            withAvatar: true,
          });
    }else{
        botMessage = createChatBotMessage(responses[7].question, {
            widget: "Response7Widget",
            withAvatar: true,
          });
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleClickLast = (e) => {
    let botMessage = createChatBotMessage()
    botMessage = createChatBotMessage(responses[8].question, {
        widget: "Responseheight",
        withAvatar: true,
      });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleClick,
            handleClickNSP,
            handleClickNSPBis,
            handleClickLast,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;