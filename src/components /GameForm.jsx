import React from 'react'

const GameForm = () => {
  return (
    <div>
      <h3>Create Game</h3>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input 
          type="text" 
          name="name" 
          id="name"
          value={ name }
          onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='genre'>Name:</label>
          <input 
          type="text" 
          name="genre" 
          id="genre"
          value={ genre }
          onChange={e=>setGenre(e.target.value)}/>
        </div>
      </form>
    </div>
  )
}

export default GameForm