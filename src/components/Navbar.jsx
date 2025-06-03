import '../styles/Navbar.css'
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import staylogo from '../images/logo-stay.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home">
          <img src={staylogo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-menu">
          <Link to="/home">
            <li><a>Beranda</a></li>
          </Link>
          <Link to="/pencarian">
            <li><a>Booking</a></li>
          </Link>
          <li><a href="#dukungan">Dukungan</a></li>
          <li className="dropdown">
            <a href="#lainnya">Lainnya ▾</a>
            {/* Optional: submenu bisa ditambahkan di sini */}
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaBars className="navbar-icon" />
        <FaUserCircle className="navbar-icon" />
      </div>
    </nav>
  );
}

export default Navbar;

