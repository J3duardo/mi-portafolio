import React from "react";
import githubLogo from "../../icons/github-logo.svg";
import facebookLogo from "../../icons/facebook-logo.svg";
import behanceLogo from "../../icons/behance.svg";
import instagramLogo from "../../icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info-container">
        <p className="footer__text">Desarrollado por Jesús Guzmán &copy; {new Date().getFullYear()} Todos los derechos reservados</p>
        <div className="fb-share-button" data-href="https://jguzman-portafolio.firebaseio.com" data-layout="button" data-size="large" data-mobile-iframe="true">
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjguzman-portafolio.firebaseio.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noopener noreferrer">Compartir</a>
        </div>
        <nav className="footer__icons-container">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://github.com/J3duardo" className="footer__link" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="Github logo" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a href="https://www.facebook.com/jesus.e.guzman.q/" className="footer__link" target="_blank" rel="noopener noreferrer">
                <img src={facebookLogo} alt="Facebook logo" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a href="https://www.behance.net/JEduardo_/" className="footer__link" target="_blank" rel="noopener noreferrer">
                <img src={behanceLogo} alt="behance logo" className="footer__icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
