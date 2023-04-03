import React from 'react'
import robot from '../assets/img/chatImg.svg'
const Chat = () => {
  return (
    <div className="chatPage">
        <div className="header">
            <div className="left">
                <h1>Chat Bot</h1>
                <div className="statut">
                    <div className="circle"></div>
                    <p>en ligne</p>
                </div>
                <img src={robot} alt="illustration robot" />
            </div>
        </div>
    </div>
  )
}

export default Chat