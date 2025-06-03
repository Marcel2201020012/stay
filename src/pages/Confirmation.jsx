import "../styles/Confirmation.css";
import Navbar from "../components/Booking_Navbar";
import Footer from "../components/Footer";

import ConfirmationLogo from '../images/confirmation-icons/cek.svg'
import { useLocation } from "react-router-dom";

function Confirmation() {
    const location = useLocation();
    const total = location.state || {};

    if(!total) return <div>Total harga hotel tidak ditemukan</div>;

    return (
        <div className="confirmation-page">
            <Navbar />

            <div className="confirmation-container">
                <p>Status pembayaran Anda sudah dikonfirmasi!</p>
                <p>Terima kasih karena telah menggunakan layanan <a href="">Stay</a></p>
                <img src={ConfirmationLogo} alt="Logo" className="confirmation-logo" />
                <p className="price">Rp {total.toLocaleString('id-ID')},-</p>
                <p>Silahkan periksa email Anda untuk melihat rincian pemesanan</p>
            </div>

            <Footer />
        </div>
    );
}

export default Confirmation;