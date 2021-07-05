import React from 'react';
import Intro from "./Intro/Intro";
import { Route } from "react-router-dom";

import './App.scss';
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
    </div>
  );
}

export default App;
