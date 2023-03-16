import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    const githubClick = () => {
        window.open("https://github.com/Shaikh1595", "_blank");
    };
    const linkedinClick = () => {
        window.open("https://www.linkedin.com/in/mohmed-shaikh/", "_blank");
    };

    return (
        <div className="footer-container">
            <p>2023 Shaikh's Shop All Rights Reserved</p>
            <p className="icons">
                <button className="btn" onClick={githubClick}><AiOutlineGithub /></button>
                <button className="btn" onClick={linkedinClick}><AiOutlineLinkedin /></button>      
            </p>
        </div>
    )
}

export default Footer
