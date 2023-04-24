import React from 'react'
import {useState, useEffect} from 'react'
import robot from '../assets/img/chatImg.svg'
import wave from '../assets/img/vague.svg'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../components/config';
import MessageParser from '../components/MessageParser';
import ActionProvider from '../components/ActionProvider';

const Chat = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const options = {method: 'GET'};

    fetch('http://127.0.0.1:3001/api/questions', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
      
  }, [])
  
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