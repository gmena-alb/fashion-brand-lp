import React from 'react';
import {
  FaCopyright,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
} from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div class="footer-section">
        <div class="social">
          <h4>Follow us</h4>
          <div className="icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="newsletter-container">
          <h4>
            Get latest outfits from our dressmakers <br />
            every week
          </h4>
          <form className="newsletter">
            <input
              type="email"
              placeholder="Your email address here"
              required
            ></input>
            <button>Register</button>
          </form>
        </div>

        <div className="contact">
          <h4>Contact</h4>
          <div className="contact-elements">
            <div className="contact-element">
              555-555555
              <FaMobileAlt />
            </div>
            <div className="contact-element">
              Fake Street, 123 - Springfield
              <FaMapMarkerAlt />
            </div>
            <div className="contact-element">
              rina.turnner@turnner.com
              <FaEnvelope />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <FaCopyright />
        {year} | Rina Turnner
      </div>
    </footer>
  );
};

export default Footer;
