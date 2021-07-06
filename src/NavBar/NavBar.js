import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import './NavBar.scss'

const NavBar = () => {
    const [scrolled, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', handleScroll);
    return(
    <div className={scrolled ? 'NavBar scroll' : 'NavBar'}>
        <div className='NavBar--brand'>
            <a href='#'>Kabilesh</a>
        </div>
        <div>
            <a className='NavBar--nav' href='#'>Home</a>
            <a className='NavBar--nav' href='#footer'>Contact</a>
        </div>
    </div>)
};
export default NavBar;