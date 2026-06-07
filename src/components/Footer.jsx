import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__icons">
        <FontAwesomeIcon className="footer__icon" icon={faFacebookSquare} />
        <FontAwesomeIcon className="footer__icon" icon={faInstagram} />
        <FontAwesomeIcon className="footer__icon" icon={faTwitter} />
        <FontAwesomeIcon className="footer__icon" icon={faYoutube} />
      </div>
      <ul>
        <li className="footer__link">Contact Us</li>
        <li className="footer__link">Help Center</li>
      </ul>
    </div>
  );
};

export default Footer;

/* rgba(161, 172, 188, 1.00) */