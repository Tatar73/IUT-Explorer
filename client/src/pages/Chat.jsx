import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
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
    async function fetchQuestions() {
      try {
        const response = await axios.get('http://localhost:27017/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des questions:', error);
      }
    }

    fetchQuestions();
  }, []);
  
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