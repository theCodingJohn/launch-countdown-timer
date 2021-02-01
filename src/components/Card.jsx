import React from 'react'

const Card = ({card}) => {
  return (
    <div className="card">
      <span className="card__bg"></span>
      <span className="flipping-half"></span>
      <h2>{card.time.toString().length === 1 ? `0${card.time}` : `${card.time}`}</h2>
      <p className="card__name">{card.name}</p>
    </div>
  )
}

export default Card
