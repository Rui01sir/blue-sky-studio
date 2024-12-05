import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ hide }) => {
    return(
        <div>
            <footer className={hide ? 'hidden' : ''}>
                <div className="footer-bar">
                    <h6>
                      <span lang="en">© </span>青空設計
                      <span lang="en"> BLUE SKY STUDIO CO., LTD. All Rights Reserved Designed</span>
                    </h6>
                </div>
            </footer>
        </div>
    );
}

export default Footer