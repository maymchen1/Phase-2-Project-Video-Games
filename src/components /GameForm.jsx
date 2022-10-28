import React, { useState } from 'react'
import { baseUrl } from '../Globals'

const GameForm = ({ addGame }) => {
  const [name, setName] = useState ('')
  const [publisher, setPublisher] = useState ('')
  const [genre, setGenre] = useState ('')
  const [year, setYear] = useState ('')
  const [progress, setProgress] = useState ('')

  const handleSubmit = e => {
    e.preventDefault();
    fetch(baseUrl + "/games",{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, publisher, genre, year, progress})
    })
    .then(r=>r.json())
    .then(data => addGame(data))
  }

  return (
    <div>
      <h3>Add Game</h3>
      <form onSubmit= {handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
          type="text" 
          name="name" 
          id="name"
          value={ name }
          onChange={e=>setName(e.target.value)}/>
        </div><br></br>
        <div>
        <label htmlFor="publisher">Publisher:</label>
          <input 
          type="text" 
          name="publisher" 
          id="publisher"
          value={ publisher }
          onChange={e=>setPublisher(e.target.value)}/>
        </div><br></br>
        <div>
        <label htmlFor="genre">Genre:</label>
          <input 
          type="text" 
          name="genre" 
          id="genre"
          value={ genre }
          onChange={e=>setGenre(e.target.value)}/>
        </div><br></br>
        <div>
        <label htmlFor="year">Release Year:</label>
          <input 
          type="text" 
          name="year" 
          id="year"
          value={ year }
          onChange={e=>setYear(e.target.value)}/>
        </div><br></br>
        <div>
        <label htmlFor="progress">Progress</label>
        <select 
        name="status" 
        value= { progress }
        id="status"
        onChange={ e => setProgress(e.target.value)}
        >
          <option value="In-Progress">In-Progress</option>
          <option value="Completed">Completed</option>
          <option value="Want to Play">Want to Play</option>
          <option value="Paused">Paused</option>
        </select>
        </div><br></br>
        <input type="submit" value="Add Game"/>
      </form>
    </div>
  )
}

export default GameForm