import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameForm from "./components /GameForm";
import GameList from "./components /GameList";
import Home from "./components /Home";
import Navbar from "./components /Navbar";
import { baseUrl } from "./Globals";


const App = ()=> {
  const [games, setGames] = useState([]);
  useEffect(()=> {
fetch(baseUrl +"/games")
.then(r=> r.json())
.then(data => setGames(data))
  }, [])
  const addGame = game => {
    setGames ([...games, game])}
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/games" element={
           <GameList games={games}/>}/>
        <Route path="/games/new" element={
           <GameForm 
           addGame= { addGame }/>}/>
      </Routes>
    </Router>
  );
}

export default App;
