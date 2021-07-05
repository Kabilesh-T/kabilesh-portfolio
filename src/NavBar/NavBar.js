import React from "react";
import { NavLink, Link } from "react-router-dom";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import './NavBar.scss'

const NavBar = () => (
    <div className='NavBar'>
        <div className='NavBar--brand'>
            <Link to='/'>Trade Assist</Link>
        </div>
        <div>
            <NavLink className='NavBar--nav' to='/home'>Home</NavLink>
        </div>
    </div>
);
export default NavBar;