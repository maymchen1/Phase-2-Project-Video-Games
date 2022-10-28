import React from 'react'

const GameCard = ({game}) => {
  return (
    <div>
      <h4>Game Name:{game.name}</h4>
      <p>Publisher:{game.publisher}</p>
      <p>Genre: {game.genre}</p>
      <p>Release Year:{game.year}</p>
      <p>Progress:{game.progress}</p>
      </div>
  )
}

export default GameCard