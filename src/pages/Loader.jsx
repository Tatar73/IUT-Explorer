import React from 'react'
import Circle from'../assets/img/circle.svg'

const Loader = () => {
  return (
    <div className="container-loader">
        <h1>bienvenue</h1>
        <h2>Aux journées portes ouvertes de l’IUT de Chambéry</h2>
        <div className="circle"><img src={Circle} alt="" /></div>
    </div>
  )
}

export default Loader