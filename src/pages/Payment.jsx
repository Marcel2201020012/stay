import "../styles/Payment.css";
import Navbar from "../components/Booking_Navbar";
import Footer from "../components/Footer";

import SarapanLogo from '../images/payment-icons/Sarapan.svg'
import KasurLogo from '../images/payment-icons/Kasur.svg'
import TamuLogo from '../images/payment-icons/Slippers.svg'
import WifiLogo from '../images/payment-icons/Wifi.svg'
import ProfilLogo from '../images/payment-icons/Profile.svg'
import BriLogo from '../images/payment-icons/BRI.svg'
import BcaLogo from '../images/payment-icons/BCA.svg'
import BniLogo from '../images/payment-icons/BNI.svg'
import MasterLogo from '../images/payment-icons/Master.svg'
import VisaLogo from '../images/payment-icons/Visa.svg'

import { Link, useLocation } from 'react-router-dom';

function Payment() {
    const location = useLocation();
    const { total, contact, extraDetails } = location.state || {};

    if (!total) return <div>Total harga hotel tidak ditemukan</div>;

    return (
        <div className="payment-page">
            <Navbar />

            <div className="rincian-hotel-container">
                <h2 className="title">Rincian Hotel</h2>
                <p className="hotel-name">Ck Tanjungpinang Hotel & Convention Center</p>

                <div className="date-box">
                    <div className="check-info">
                        <div className="label">check-in</div>
                        <div className="date">25 April 2025</div>
                        <div className="time">14:00</div>
                    </div>

                    <div className="day">2 Hari</div>

                    <div className="check-info">
                        <div className="label">check-out</div>
                        <div className="date">27 April 2025</div>
                        <div className="time">07:00</div>
                    </div>
                </div>

                <div className="info-row">
                    <span> <img src={TamuLogo} alt="Logo" className="tamur-logo" /> (2x) Tamu</span>
                    <span> <img src={SarapanLogo} alt="Logo" className="sarapan-logo" /> (2x) Sarapan</span>
                    <span> <img src={KasurLogo} alt="Logo" className="kasur-logo" /> (2x) Twin Bed</span>
                    <span> <img src={WifiLogo} alt="Logo" className="wifi-logo" /> Free Wi-Fi</span>

                </div>

                <div className="section">
                    <strong>Permintaan Tambahan:</strong>
                    {extraDetails &&
                        (extraDetails.jenisKasur ||
                            extraDetails.lantai ||
                            extraDetails.checkIn ||
                            extraDetails.checkOut ||
                            extraDetails.lainnya) ? (
                        <ul>
                            {extraDetails.jenisKasur && <li>Jenis Kasur: {extraDetails.jenisKasur}</li>}
                            {extraDetails.lantai && <li>Lantai: {extraDetails.lantai}</li>}
                            {extraDetails.checkIn && <li>Check-In: {extraDetails.checkIn}</li>}
                            {extraDetails.checkOut && <li>Check-Out: {extraDetails.checkOut}</li>}
                            {extraDetails.lainnya && <li>Catatan: {extraDetails.lainnya}</li>}
                        </ul>
                    ) : (
                        <p>Tidak ada permintaan tambahan</p>
                    )}
                </div>

                <hr style={{ borderColor: 'black' }} />

                <div className="section">
                    <strong>Data Diri Tamu:</strong>
                    <div className="guest-info">
                        <div className="icon"><img src={ProfilLogo} alt="Logo" className="profile-logo" /></div>
                        <div>
                            <div>{contact?.userName}</div>
                            <div>{contact?.noHp}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="payment-container">
                <h2 className="title">Mau Bayar Pakai Apa?</h2>

                <div className="payment-option">
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>Transfer Bank</span>
                    </label>
                    <div className="payment-logos">
                        <img src={BniLogo} alt="Logo" className="bni-logo" />
                        <img src={BcaLogo} alt="Logo" className="bca-logo" />
                        <img src={BriLogo} alt="Logo" className="bri-logo" />
                    </div>
                </div>

                <hr style={{ borderColor: 'black' }} />

                <div className="payment-option">
                    <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>Kartu Kredit</span>
                    </label>
                    <div className="payment-logos">
                        <img src={MasterLogo} alt="Logo" className="master-card-logo" />
                        <img src={VisaLogo} alt="Logo" className="visa-logo" />

                    </div>
                </div>
            </div>

            <div className="voucher-container">
                <input
                    type="text"
                    className="coupon-input"
                    placeholder="Masukkan kode kupon yang Anda miliki disini"
                />
                <button className="coupon-button">Gunakan Kupon</button>
            </div>

            <div className="total-container">
                <div className="total-info">
                    <span className="total-label"><h2>Total Harga</h2></span>
                    <span className="total-price">Rp {total.toLocaleString('id-ID')},-</span>
                </div>
                <Link to="/confirmation" state={total}>
                    <button className="pay-button">Bayar Sekarang</button>
                </Link>
                <p className="terms">
                    Dengan lanjut ke pembayaran, Anda telah menyetujui{' '}
                    <a href="#">Syarat dan Ketentuan</a>, serta{' '}
                    <a href="#">Kebijakan Privasi</a> Stay.
                </p>
            </div>

            <br></br>

            <Footer />
        </div>
    );
}

export default Payment;