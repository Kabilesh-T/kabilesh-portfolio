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
                    <SocialIcon target="__blank" url="https://github.com/Kabilesh-T" className="Footer--social" network='github'/>
                    <SocialIcon target="__blank" url="https://www.linkedin.com/in/kabilesh-t-195470153/" className="Footer--social"  network='linkedin'/>
                    <SocialIcon target="__blank" url="https://www.facebook.com/kabilesh.kb" className="Footer--social"  network='facebook'/>
                    <SocialIcon target="__blank" url="https://www.instagram.com/_kabilesh_t/" className="Footer--social"  network='instagram'/>
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