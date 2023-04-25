import React from 'react'
import {useState, useEffect} from 'react'
import robot from '../assets/img/chatImg.svg'
import wave from '../assets/img/vague.svg'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../components/Chatbot/config';
import MessageParser from '../components/Chatbot/MessageParser';
import ActionProvider from '../components/Chatbot/ActionProvider';

const Chat = () => {
  const [questions, setQuestions] = useState([]);
  
  return (
    <div className="chatPage">
        <div className="header">
            <h1>Chat Bot</h1>
            <div className="statut">
                <div className="circle"></div>
                <p>en ligne</p>
            </div>
            <img className='robot' src={robot} alt="illustration robot"/>
            <img className='wave' src={wave} alt="wave"/>
        </div>
        <div className="chat">
            <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            />
        </div>
    </div>
  )
}

export default Chat