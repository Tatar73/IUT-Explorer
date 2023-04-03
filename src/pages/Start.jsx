import React from 'react'
import logo from '../assets/img/logoAccueil.svg'
import fleche from '../assets/img/flecheButton.svg'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Start = () => {
  return (
    <div className="startPage">
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>Iut Explorer</motion.h1>
        <img src={logo} alt="Logo" />
        <div className='startSection'>
            <motion.p initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>Je suis ici pour t’accompagner dans ta visite afin que tu récoltes les informations qui t’intéressent. En route !</motion.p>
            <Link to="/chat" style={{textDecoration: 'none'}}>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} className="buttonStart">
                  <a href="">Commencer</a>
                  <img src={fleche} alt="flèche" />
              </motion.div>
            </Link>
        </div>
    </div>
  )
}

export default Start


