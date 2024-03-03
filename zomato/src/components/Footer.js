import React from 'react';
import './Footer.css'
const Footer = () => {
    return(
        <footer>
            <p className="footText">&copy; Developer Funnel 2023</p>
            <div className="cont">
                <div className="footDiv">
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className="footDiv">
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className="footDiv abc">
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="foot-social">
                <img src="./images/facebook.png" alt=""/>
                <img src="./images/insta.png" alt=""/>
                <img src="./images/youtube1.png" alt=""/>
            </div>
        </footer>
    )
}
export default Footer;