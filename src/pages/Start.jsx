import React from 'react'
import logo from '../assets/img/logoAccueil.svg'
import fleche from '../assets/img/flecheButton.svg'
const Start = () => {
  return (
    <div className="startPage">
        <h1>Iut Explorer</h1>
        <img src={fleche} alt="Logo" />
        <div className='startSection'>
            <p>Je suis ici pour t’accompagner dans ta visite afin que tu récoltes les informations qui t’intéressent. En route !</p>
            <div className="buttonStart">
                <a href="">Commencer</a>
                <img src={logo} alt="flèche" />
            </div>
        </div>
    </div>
  )
}

export default Start


