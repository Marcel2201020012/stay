import '../styles/Booking_Navbar.css'
import staylogo from '../images/logo-stay.svg'

function Navbar() {
    return(
    <div className="navbar">
        <div className="navbar-left">
            <img src={staylogo} alt="Logo" className="navbar-logo" />
        </div>
        <nav>
            <div className="navbar-right">
            <Step number={1} label="Pesan" active />
            <div className="h-px w-8 bg-gray-300" />
            <Step number={2} label="Bayar" />
            <div className="h-px w-8 bg-gray-300" />
            <Step number={3} label="Selesai" />
        </div>
        </nav>
    </div>
    )
}


function Step({ number, label, active }) {
  return (
    <div className="flex flex-col items-center text-sm">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center 
        ${active ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}
      >
        {number}
      </div>
      <span className={`mt-1 ${active ? 'text-black font-semibold' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
}

export default Navbar;