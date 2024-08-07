import React from 'react';
import { Container } from 'react-bootstrap';
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">
          <div className="footer-section">
            <h3>Contact Fakad Infotech Centre</h3>
            <ul>
              <li><a href='#'>Call or Text: +234 (0) 806 576 3465, +234 (0) 810 175 6091</a></li>
              <li><a href="mailto:info@fakadinfotechcentre.com">Email: fakadinfo@gmail.com</a></li>
              <li><a href="http://www.fakadinfotechcentre.com">Website: www.fakadinfotechcentre.com</a></li>
              <li><a href='#'>Suite Pb19, Virginia Pavilion Plaza, Behind Eco-Bank, Federal Housing Junction, Kubwa, FCT-Abuja</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">A-Z Index</a></li>
              <li><a href="#">Fakad Mobile App (Android)</a></li>
              <li><a href="#">Fakad Mobile App (iOS)</a></li>
              <li><a href="#">Student Development Services</a></li>
              <li><a href="#">Employment At Fakad</a></li>
              <li><a href="#">Office Of Belonging</a></li>
              <li><a href="#">Helping Distressed Students</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Office Of IT</a></li>
              <li><a href="#">Title IX (Sexual Misconduct)</a></li>
              <li><a href="#">School Police & Parking</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Other Fakad Centres</h3>
            <ul>
              <li><a href="#">Fakad Abuja</a></li>
              <li><a href="#">Fakad Lagos</a></li>
              <li><a href="#">Fakad Logos</a></li>
              <li><a href="#">Fakad  Edo</a></li>
            </ul>
          </div>
          

          <div className="footer-section">
            <div className="social-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="https://www.facebook.com/" target='blank'><img src="/fb.png" alt="facebook" className="social" /></a></li>
                <li><a href="https://instagram.com/" target='blank'><img src="/instagram.png" alt="instagram" className="social" /></a></li>
                <li><a href="https://www.linkedin.com/" target='blank'><img src="/linkIn.png" alt="linkedin" className="social" /></a></li>
                <li><a href="https://x.com/" target='blank'><img src="/x.png" alt="x" className="social" /></a></li>
              </ul>
            </div>
            <ul className="connect-list">
              <li><a href="#">Fakad Alumni</a></li>
              <li><a href="#">Fakad Athletics</a></li>
              <li><a href="#">Fakad News</a></li>
              <li><a href="#">Fakad Store</a></li>
              <li><a href="#">Fakad TV</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <article className="copyright">
            <p className="copy-date">_____-:- &copy; {new Date().getFullYear()} All rights reserved. Fakad Infotech Centre.</p>
          </article>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
