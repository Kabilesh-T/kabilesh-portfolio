import React from "react";
import { SocialIcon } from 'react-social-icons';
import {Container} from 'react-bootstrap';
import "./Footer.scss"

const Footer = () => {
    return (
        <div id="footer" className="Footer">
            <div className="Footer--content">
                <p className="p1">Get in touch</p>
                <Container>
                    <SocialIcon className="Footer--social" network='github'/>
                    <SocialIcon className="Footer--social"  network='twitter'/>
                    <SocialIcon className="Footer--social"  network='facebook'/>
                    <SocialIcon className="Footer--social"  network='instagram'/>
                </Container>
                <div className="Footer--contact">
                    <p>Phone: <a href="tel:+919884966468">+91-9884966468</a></p>
                    <p>Email: <a href="mailto:iamkabi@gmail.com">iamkabi@gmail.com</a></p>
                </div>
            </div>
        </div>

    );
};
export default Footer;