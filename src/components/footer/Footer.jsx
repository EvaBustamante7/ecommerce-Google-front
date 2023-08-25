import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../logo/G3DA.svg';
import './css/Footer.css'; // Importa tu archivo CSS

const Footer = () => {
  return (
    <footer>

      <div className="social-icons">
        <a href="https://www.facebook.com/" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com/?lang=es" className="icon"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com/" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>

      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo G3da" />
        </div>

        <div className="footer-content">
          <h3>About Us</h3>
          <a href="/about">About</a>
          <a href="/jobs">Jobs</a>
          <a href="/press">Press</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-content">
          <h3>Resources</h3>
          <a href="/Open Source">Open Source</a>
          <a href="/blog">Blog</a>
          <a href="/The Art Genome Project">The Art Genome Project</a>
        </div>

        <div className="footer-content">
          <h3>Partnerships</h3>
          <a href="/#">Artsy for Galleries</a>
          <a href="/#">Artsy for Museums</a>
          <a href="/#">Artsy for Auctions</a>
          <a href="/#">Artsy for Fairs</a>
        </div>

        <div className="footer-content">
          <h3>Support</h3>
          <a href="/#">Talk to a Specialist</a>
          <a href="/#">Visit our Help Center</a>
          <a href="/#">Buying on Artsy</a>


        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 your company. All rights reserved. <a href="/Platform terms">Platform terms.</a><a href="/ Privacy policy">Privacy policy.</a><a href="/ Cookie Policy"> Cookie Policy</a></p>
      </div>
    </footer>

  );
}

export default Footer;
