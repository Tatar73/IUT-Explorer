import React from 'react'
import robot from '../assets/img/chatImg.svg'
import wave from '../assets/img/vague.svg'
const Chat = () => {
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
    </div>
  )
}

export default Chat