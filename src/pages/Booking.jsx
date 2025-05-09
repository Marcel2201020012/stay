import "../styles/Booking.css";
import Navbar from "../components/Booking_Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";

import megaphoneIcon from '../images/booking-icons/megaphone_icon.svg'

function Booking() {
    const [options, setOptions] = useState({
        jenisKasur: false,
        lantai: false,
        checkIn: false,
        checkOut: false,
        lainnya: false,
    });

    const toggleOption = (key) => {
        setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="booking-page">
            <Navbar />

            <div className="headline">
                <span className="icon">
                    <img src={megaphoneIcon} alt="megaphone icon" />
                </span>
                <p>Pastikan Anda mengisi semua informasi di halaman ini dengan benar sebelum melanjutkan ke pembayaran!</p>
            </div>

            <div className="form-container">
                <h2 className="form-title">Detail Kontak</h2>

                <div className="form-group">
                    <label htmlFor="fullName">Nama Lengkap</label>
                    <input type="text" id="fullName" name="fullName" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" name="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Nomor Hp</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                </div>
            </div>

            <div className="request-container">
                <h3>Permintaan Tambahan</h3>
                <p>
                    Beritahu hotel untuk menyediakan fasilitas tambahan untuk menyesuaikan
                    pengalaman menginap Anda.
                    Pilihan ini mungkin akan menambah biaya
                    menginap!
                </p>

                <div className="checkbox-row">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => toggleOption("jenisKasur")}
                            checked={options.jenisKasur}
                        />
                        Jenis Kasur
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            onChange={() => toggleOption("lantai")}
                            checked={options.lantai}
                        />
                        Lantai Kamar
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            onChange={() => toggleOption("checkIn")}
                            checked={options.checkIn}
                        />
                        Waktu Check-In
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            onChange={() => toggleOption("checkOut")}
                            checked={options.checkOut}
                        />
                        Waktu Check-Out
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            onChange={() => toggleOption("lainnya")}
                            checked={options.lainnya}
                        />
                        Lainnya
                    </label>
                </div>

                <div className="conditional-options">
                    {options.jenisKasur && (
                        <div className="option-box">
                            <label><input type="radio" name="bed" /> Deluxe</label>
                            <label><input type="radio" name="bed" /> Twin</label>
                        </div>
                    )}

                    {options.lantai && (
                        <div className="option-box">
                            <label><input type="radio" name="floor" /> Atas</label>
                            <label><input type="radio" name="floor" /> Bawah</label>
                        </div>
                    )}

                    {options.checkIn && (
                        <div className="option-box-horizontal">
                            <label><input type="time" /></label>
                        </div>
                    )}

                    {options.checkOut && (
                        <div className="option-box-horizontal">
                            <label><input type="time" /></label>
                        </div>
                    )}

                    {options.lainnya && (
                        <div className="option-box-horizontal">
                            <input type="text" placeholder="Keterangan lainnya..." />
                        </div>
                    )}
                </div>
            </div>

            <div className="price-detail-container">
                <div className="price-detail">
                    <h3>Detail Harga</h3>

                    <div className="price-row">
                        <span>Harga Kamar</span>
                        <span>Rp 900.000,-</span>
                    </div>

                    <div className="price-row">
                        <span>Pajak</span>
                        <span>Rp 90.000,-</span>
                    </div>

                    <hr />

                    <div className="price-row total">
                        <strong>Total</strong>
                        <strong>Rp 990.000,-</strong>
                    </div>

                    <div className="pay-button-container">
                        <button className="pay-button">Lanjutkan Pembayaran ➜</button>
                    </div>

                    <p className="terms">
                        Dengan lanjut ke pembayaran, Anda telah menyetujui menyetujui{" "}
                        <a href="#">Syarat dan Ketentuan</a>, serta{" "}
                        <a href="#">Kebijakan Privasi</a> Stay
                    </p>
                </div>
            </div>

            <br></br>
            <Footer/>
        </div>
    );
}

export default Booking;