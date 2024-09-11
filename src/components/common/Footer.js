import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ hide }) => {
    return(
        <div>
            <footer className={hide ? 'hidden' : ''}>
                <div className="footer-bar">
                    <h6>© 青空設計 BLUE SKY STUDIO CO., LTD. All Rights Reserved Designed</h6>
                </div>
            </footer>
        </div>
    );
}

export default Footer