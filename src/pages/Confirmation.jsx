import "../styles/Confirmation.css";
import Navbar from "../components/Booking_Navbar";
import Footer from "../components/Footer";

import ConfirmationLogo from '../images/confirmation-icons/cek.svg'

function Confirmation() {
    return (
        <div className="confirmation-page">
            <Navbar />

            <div className="confirmation-container">
                <p>Status pembayaran Anda sudah dikonfirmasi!</p>
                <p>Terima kasih karena telah menggunakan layanan <a href="">Stay</a></p>
                <img src={ConfirmationLogo} alt="Logo" className="confirmation-logo" />
                <p className="price">Rp 990.000 ,-</p>
                <p>Silahkan periksa email Anda untuk melihat rincian pemesanan</p>
            </div>

            <Footer />
        </div>
    );
}

export default Confirmation;