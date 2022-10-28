import React from 'react'
import GameCard from './GameCard'

const GameList = ({games}) => {
  const gameCards=games.map(game => <GameCard key= {game.id} game={game}/>)
  return (
    <div>
      <h3>Game List</h3>
      {gameCards}
        </div>
  )
}

export default GameList