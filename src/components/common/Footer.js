import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ hide }) => {
    return(
        <div>
            <footer className={hide ? 'hidden' : ''}>
                <div className="footer-bar">
                    <div className="footer-logo">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/img/logo-loading.svg`} alt="nav-logo" />
                        </Link>
                    </div>
                    <ul>
                        <li><Link to="#">最新消息</Link></li>
                        <li><Link to="#">工商案例</Link></li>
                        <li><Link to="#">服務項目</Link></li>
                        <li><Link to="#">聯絡我們</Link></li>
                    </ul>   
                </div>
                <div className="footer-text">
            <p>#青藍色的天空 散發出一種放鬆的氣息
            就是我們想表達的設計理念</p>
            <div className="footer-icon">
                <ul>
                    <li><Link to="https://www.instagram.com/blue_sky_design_/"><img src={`${process.env.PUBLIC_URL}/img/instagram.webp`} alt="instagram-icon"></img></Link></li>
                    <li><a href="mailto:blueskystudio.rui@gmail.com"><img src={`${process.env.PUBLIC_URL}/img/email.webp`} alt="email-icon"></img></a></li>
                    <li><Link to="https://www.facebook.com/"><img src={`${process.env.PUBLIC_URL}/img/facebook.webp`} alt="facebook-icon"></img></Link></li>
                    <li><Link to="https://www.whatsapp.com/"><img src={`${process.env.PUBLIC_URL}/img/whatapp.webp`} alt="whatapp-icons"></img></Link></li>
                </ul>
            </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-name">
            <h6>© BLUE SKY STUDIO CO., LTD. All Rights Reserved Designed</h6>
                </div>
            </footer>
        </div>
    );
}

export default Footer