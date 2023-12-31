import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../logo/G3DA.svg';
import './css/Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com/" className="icon" data-testid="facebook-icon"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com/?lang=es" className="icon" data-testid="twitter-icon"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com/" className="icon" data-testid="instagram-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/" className="icon" data-testid="linkedin-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>

      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo G3da" />
        </div>


        <div className="footer-content">
          <h3>Nosotros</h3>
          <Link to='/about'>Nosotros</Link>
          <a href="/jobs">Trabajos</a>
          <a href="/press">Noticias</a>
          <a href="/contact">Contacto</a>
        </div>

        <div className="footer-content">
          <h3>Recursos</h3>
          <a href="/Open Source">Open Source</a>
          <a href="/blog">Blog</a>
          <a href="/The Art Genome Project">"The Art Genome Project"</a>
        </div>

        <div className="footer-content">
          <h3>Colaboraciones</h3>
          <a href="/#">Arte para Galerías</a>
          <a href="/#">Arte para Museos</a>
          <a href="/#">Arte para Subastas</a>
          <a href="/#">Arte para Ferias</a>
        </div>

        <div className="footer-content">
          <h3>Soporte Técnico</h3>
          <a href="/#">Habla con un especialista</a>
          <a href="/#">Visita nuestro Help Center</a>
          <a href="/#">Compras</a>
        </div>
      </div>

      <div className="bottom-bar">
      <p>&copy; 2023 Google3da. Proyecto pedagógico. <a href="/Platform terms">Platform terms.</a> <Link to="/privacy-policy">Política de privacidad.</Link> <Link to="/cookies">Política de cookies</Link></p>
      </div>
    </footer>

  );
}

export default Footer;
