import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './NavBar.scss'

const MobileNavBar = () => {
    const [expanded, setExpanded] = useState(false);
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
    return (
        <Navbar expanded={expanded} collapseOnSelect className={ scrolled ? 'MobileNavBar scroll' : 'MobileNavBar'} expand="lg" sticky="top">
            <Navbar.Brand href="/">
                <div className='MobileNavBar--brand'>
                    Kabilesh here !
                </div>
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav">
                <div className='MobileNavBar--hamburger'>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </Navbar.Toggle>
            <Navbar.Collapse className="MobileNavBar--menu" id="responsive-navbar-nav">
                <Nav style={{ textAlign: 'center' }} className="mr-auto">
                    <a className="MobileNavBar--menu_item" href="#">Home</a>
                    <a className="MobileNavBar--menu_item" href="#footer">Contact</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default MobileNavBar;
