import React, { useContext } from 'react'
import {useState, useEffect} from 'react'
import robot from '../assets/img/chatImg.svg'
import wave from '../assets/img/vague.svg'
import map from '../assets/img/map.svg'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../components/Chatbot/config';
import MessageParser from '../components/Chatbot/MessageParser';
import ActionProvider from '../components/Chatbot/ActionProvider';
import { Link } from "react-router-dom";
import { MapContext } from '../App'

const Chat = () => {
  const [questions, setQuestions] = useState([]);

  const { formation, setFormation } = useContext(MapContext);
  
  return (
    <div className="chatPage">
        <div className="header">
          <div className="titles">
            <h1>Chat Bot</h1>
              <div className="statut">
                  <div className="circle"></div>
                  <p>en ligne</p>
              </div>
          </div>
          <img src={robot} alt="illustration robot"/>
        </div>
        <div className="chat">
            <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            />
        </div>
        <div className="goToMap">
          <img src={map} alt="map"/>
          <p>{formation}</p>
          <Link to={`/${formation.toLowerCase()}`} style={{textDecoration: 'none'}}>
            <button>
              <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
              <span>Itinéraire</span>
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Chat