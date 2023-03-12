import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>2023 Shaikh's Shop All Rights Reserved</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
                <AiOutlineGithub />
            </p>
        </div>
    )
}

export default Footer
