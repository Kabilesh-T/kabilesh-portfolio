import React from 'react';
import Intro from "./Intro/Intro";

import './App.scss';
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Footer from "./Footer/Footer"

function App() {
  return (
    <div className="App">
        <div className="App--intro">
            <NavBar/>
            <Intro/>
        </div>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
