import React, {useState} from "react";
import './NavBar.scss'
import MobileNavBar from "./MobileNavBar";

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
        <>
            <div className={scrolled ? 'NavBar scroll' : 'NavBar'}>
                <div className='NavBar--brand'>
                    <a href='#'>Kabilesh</a>
                </div>
                <div>
                    <a className='NavBar--nav' href='#'>Home</a>
                    <a className='NavBar--nav' href='#footer'>Contact</a>
                </div>
            </div>
            <MobileNavBar/>
        </>
    )
};
export default NavBar;