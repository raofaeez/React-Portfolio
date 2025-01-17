import React from 'react'
import './Card.css'

function Card({title,image}) {
  return (
    <div>
      <div className="card">
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Card
