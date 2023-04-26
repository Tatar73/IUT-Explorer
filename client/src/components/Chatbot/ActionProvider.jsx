import React, { useContext, useEffect, useState } from 'react';
import GacoWidget from './Widget/GacoWidget';
import GCCDWidget from './Widget/GCCDWidget';
import MMIWidget from './Widget/MMIWidget';
import PECWidget from './Widget/PECWidget';
import SGMWidget from './Widget/SGMWidget';
import NSPWidget from './Widget/NSPWidget';
import Response7Widget from './Widget/Response7Widget';
import ResponseEight from './Widget/ResponseEight'
import { MapContext } from '../../App';

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
        widgetName: "ResponseEight",
        widgetFunc: (props) => <ResponseEight {...props} />,
      },
    ],
  };


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [responses, setReponses] = useState([]);
    // const [formation, setFormation] = useState('');
    const { formation, setFormation } = useContext(MapContext);


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
    let botMessage = createChatBotMessage()
    console.log(buttonValue);
    setFormation(buttonValue)
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
    const buttonValue = e.target.value
    console.log(buttonValue);
    if(buttonValue === "Non je ne suis pas intéressé(e)"){
      botMessage = createChatBotMessage(responses[12].question, {
        widget: "Responseheight",
        withAvatar: true,
      });
    }else if(buttonValue === "Musique"){
      botMessage = createChatBotMessage(responses[8].question,{
        widget: "Responseheight",
        withAvatar: true,
      })
    }
    else if(buttonValue === "Art"){
      botMessage = createChatBotMessage(responses[9].question,{
        widget: "Responseheight",
        withAvatar: true,
      })
    }
    else if(buttonValue === "Sport"){
      botMessage = createChatBotMessage(responses[10].question,{
        widget: "Responseheight",
        withAvatar: true,
      })
    }
    else if(buttonValue === "A distance"){
      botMessage = createChatBotMessage(responses[11].question,{
        widget: "Responseheight",
        withAvatar: true,
      })
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleClickEight = (e) => {
    let botMessage = createChatBotMessage()
    const buttonValue = e.target.value
    console.log(buttonValue);
    if(buttonValue === "Années à l’étranger (Erasmus)" && formation == "GACO"){
      botMessage = createChatBotMessage(responses[14].question)
    }
    else if(buttonValue === "Années à l’étranger (Erasmus)" && formation == "MMI"){
      botMessage = createChatBotMessage(responses[13].question);
    }
    else if(buttonValue === "Années à l’étranger (Erasmus)" && formation == "SGM"){
      botMessage = createChatBotMessage(responses[16].question);
    }
    else if(buttonValue === "Années à l’étranger (Erasmus)" && formation == "GCCD"){
      botMessage = createChatBotMessage(responses[17].question);
    }
    else if(buttonValue === "Années à l’étranger (Erasmus)" && formation == "PEC"){
      botMessage = createChatBotMessage(responses[15].question);
    }
    else if(buttonValue === "Activités sportives sur le campus"){
      botMessage = createChatBotMessage(responses[18].question);
    }
    else if(buttonValue === "Associations dans le campus "){
      botMessage = createChatBotMessage(responses[19].question);
    }
    else if(buttonValue === "Aucune de ces 2 réponses"){
      botMessage = createChatBotMessage(`J'espère avoir pu vous aider, je vous laisse pour diriger vers l'aile ${formation}`);
    }

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
            handleClickEight,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;