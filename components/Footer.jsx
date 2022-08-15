import React from 'react';
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 CodingWay All rights reserved</p>
      <p className="icons">
        <AiFillGithub />
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}

export default Footer;