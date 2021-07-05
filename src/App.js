import React from 'react';
import Intro from "./Intro/Intro";

import './App.scss';
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Footer from "./Footer/Footer"
import Image from "./Image/Image";

function App() {
  return (
    <div className="App">
        <div className="App--intro">
            <NavBar/>
            <Intro/>
        </div>
        <Content/>
        <Image number={2}/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
