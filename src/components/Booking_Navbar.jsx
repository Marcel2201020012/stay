import '../styles/Booking_Navbar.css'
import staylogo from '../images/logo-stay.svg'
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const stepMap = {
    '/booking': 1,
    '/payment': 2,
    '/confirmation': 3,
  };

  const currentStep = stepMap[location.pathname] || 1;

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/home">
          <img src={staylogo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <nav>
        <div className="navbar-right">
          <Step number={1} label="Pesan" active={currentStep === 1} />
          <div className="step-divider" />
          <Step number={2} label="Bayar" active={currentStep === 2} />
          <div className="step-divider" />
          <Step number={3} label="Selesai" active={currentStep === 3} />
        </div>
      </nav>
    </div>
  );

  function Step({ number, label, active }) {
    return (
      <div className="step">
        <div className={`step-circle ${active ? 'active' : ''}`}>{number}</div>
        <span className={`step-label ${active ? 'active' : ''}`}>{label}</span>
      </div>
    );
  }
}

export default Navbar;