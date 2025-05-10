import '../styles/Footer.css'
import staylogo from '../images/logo-stay.svg'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

import BcaLogo from '../images/footer-icons/bca.svg';
import DanaLogo from '../images/footer-icons/dana.svg';
import PaypalLogo from '../images/footer-icons/paypal.svg';
import MasterLogo from '../images/footer-icons/mastercard.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={staylogo} alt="Stay Logo" className="footer-logo" />
        </div>

        <div className="footer-section">
          <h4>About Stay</h4>
          <ul>
            <li><a href="#">cara booking</a></li>
            <li><a href="#">kontak</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Layanan Pengguna</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Partners</h4>
          <div className="partners-grid">
            <a href="https://www.bca.co.id" target="_blank" rel="noopener noreferrer">
              <img src={BcaLogo} alt="BCA" />
            </a>
            <a href="https://www.dana.id" target="_blank" rel="noopener noreferrer">
              <img src={DanaLogo} alt="DANA" />
            </a>
            <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
              <img src={MasterLogo} alt="MasterCard" />
            </a>
            <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
              <img src={PaypalLogo} alt="PayPal" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Ikuti Kami</h4>
          <ul>
            <li><a href="#"><FaFacebookF /> facebook</a></li>
            <li><a href="#"><FaXTwitter /> x</a></li>
            <li><a href="#"><FaInstagram /> instagram</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Lainnya</h4>
          <ul>
            <li><a href="#">blog</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Stay. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
