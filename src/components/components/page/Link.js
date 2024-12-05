import React from "react";
// import UserProfile from "../animations/UserProfile";
// import LinkButton from "../animations/LinkButton";

function Link() {
    return (
    <div className="user-page">
        <div className="user">
            <div className="user-contact">
                <h2>前田 井澤</h2>
                <p>您好，我是保險業務員前田井澤，擁有多年保險規劃經驗，專精於客製化的保障方案，致力於為客戶提供最完整的風險管理與保障服務。</p>
            </div>
            <div className="user-img">
                <img src={`${process.env.PUBLIC_URL}/img/Ellipse.png`} alt="user-img"/>
            </div>
        </div>
        <div className="user-link">
            <ul>
                <li><Link to="https://instagram.com/">Instagram</Link></li>
                <li><Link to="https://facebook.com">Facebook</Link></li>
                <li><Link to="https://facebook.com">LINE</Link></li>
            </ul>
        </div>
    </div>
    );
}

export default Link;
