import '../styles/Footer.css'
import staylogo from '../images/logo-stay.png'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import bcaLogo from '../images/bca.png';
import danaLogo from '../images/dana.png';
import mastercardLogo from '../images/mastercard.png';
import paypalLogo from '../images/paypal.png';

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
            <img src={bcaLogo} alt="BCA" />
            <img src={danaLogo} alt="DANA" />
            <img src={mastercardLogo} alt="MasterCard" />
            <img src={paypalLogo} alt="PayPal" />
          </div>
        </div>

        <div className="footer-section">
          <h4>Ikuti Kami</h4>
          <ul>
            <li><FaFacebookF /> facebook</li>
            <li><FaXTwitter /> x</li>
            <li><FaInstagram /> instagram</li>
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
