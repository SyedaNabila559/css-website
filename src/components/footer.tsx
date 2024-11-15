// components/Footer.js
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 ChocoNuts | All Rights Reserved</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}



  