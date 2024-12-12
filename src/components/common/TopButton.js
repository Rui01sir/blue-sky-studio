import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <div className="scroll-buttons">
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <img src={`${process.env.PUBLIC_URL}/img/topbutton-icon.svg`} alt="Top-button" />
                </button>
                <div className="scroll-to-message-container">
                    <button className="scroll-to-message">
                        <Link to="https://lin.ee/xpGuTy3">
                            <img src={`${process.env.PUBLIC_URL}/img/line-logo.svg`} alt="messenger_icon-button" />
                        </Link>
                    </button>
                    <div className="tooltip">立即加入LINE好友諮詢</div>
                </div>
            </div>
        )
    );
}

export default TopButton;
