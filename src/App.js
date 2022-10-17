import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameForm from "./components /GameForm";
import GameList from "./components /GameList";
import Home from "./components /Home";
import Navbar from "./components /Navbar";


const App = ()=> {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/games" element={ <GameList />}/>
        <Route path="/games/new" element={ <GameForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
