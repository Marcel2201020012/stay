import "../styles/Booking.css";
import Navbar from "../components/Booking_Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import megaphoneIcon from '../images/booking-icons/megaphone_icon.svg';

function Booking() {

  const location = useLocation();
  const { room } = location.state || {};

    const location = useLocation();
    const { room, jumlahKamar = 1, totalHarga = room.price * jumlahKamar } = location.state 

  if (!room) return <div>Data Hotel Tidak Ditemukan</div>;


  const pajak = room.price * 0.1;
  const total = room.price + pajak;

    const pajak = totalHarga * 0.1;
    const total = totalHarga + pajak;

  const [formData, setFormData] = useState({
    userName: "",
    noHp: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    noHp: false,
  });

  const [options, setOptions] = useState({
    jenisKasur: false,
    lantai: false,
    checkIn: false,
    checkOut: false,
    lainnya: false,
  });

  const [extraDetails, setExtraDetails] = useState({
    jenisKasur: "",
    lantai: "",
    checkIn: "",
    checkOut: "",
    lainnya: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validasi Email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors(prev => ({ ...prev, email: !emailRegex.test(value) }));
    }

    const handleChangeDetails = (e) => {
        setExtraDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const toggleOption = (key) => {
        setOptions(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // Validasi Nomor HP (11 digit angka)
    if (name === "noHp") {
      const onlyDigits = /^\d{11}$/;
      setErrors(prev => ({ ...prev, noHp: !onlyDigits.test(value) }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeDetails = (e) => {
    setExtraDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleOption = (key) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  const isFormValid = !errors.email && !errors.noHp && formData.userName !== "";

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>

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
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
            <div className="request-container">
                <h3>Permintaan Tambahan</h3>
                <p>
                    Beritahu hotel untuk menyediakan fasilitas tambahan untuk menyesuaikan
                    pengalaman menginap Anda. Pilihan ini mungkin akan menambah biaya menginap!
                </p>

                <div className="checkbox-row">
                    {["jenisKasur", "lantai", "checkIn", "checkOut", "lainnya"].map((item) => (
                        <label key={item}>
                            <input
                                type="checkbox"
                                onChange={() => toggleOption(item)}
                                checked={options[item]}
                            />
                            {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                        </label>
                    ))}
                </div>

                <div className="conditional-options">
                    {options.jenisKasur && (
                        <div className="option-box">
                            <label><input type="radio" name="jenisKasur" value="Deluxe" checked={extraDetails.jenisKasur === "Deluxe"} onChange={handleChangeDetails}/> Deluxe</label>
                            <label><input type="radio" name="jenisKasur" value="Twin" checked={extraDetails.jenisKasur === "Twin"} onChange={handleChangeDetails}/> Twin</label>
                        </div>
                    )}

                    {options.lantai && (
                        <div className="option-box">
                            <label><input type="radio" name="lantai" value="Atas" checked={extraDetails.lantai === "Atas"} onChange={handleChangeDetails}/> Atas</label>
                            <label><input type="radio" name="lantai" value="Bawah" checked={extraDetails.lantai === "Bawah"} onChange={handleChangeDetails}/> Bawah</label>
                        </div>
                    )}

                    {options.checkIn && (
                        <div className="option-box-horizontal">
                            <label><input type="time" name="checkIn" value={extraDetails.checkIn} onChange={handleChangeDetails}/></label>
                        </div>
                    )}

                    {options.checkOut && (
                        <div className="option-box-horizontal">
                            <label><input type="time" name="checkOut" value={extraDetails.checkOut} onChange={handleChangeDetails}/></label>
                        </div>
                    )}

                    {options.lainnya && (
                        <div className="option-box-horizontal">
                            <input type="text" name="lainnya" placeholder="Keterangan lainnya..." value={extraDetails.lainnya} onChange={handleChangeDetails}/>
                        </div>
                    )}
                </div>
            </div>

            <div className="price-detail-container">
                <div className="price-detail">
                    <h3>Detail Harga</h3>

                    <p className="room-amount-info">
                        Anda memesan <strong>{jumlahKamar}</strong> kamar
                    </p>

                    <div className="price-row">
                        <span>Harga Kamar</span>
                        <span>
                            {jumlahKamar} x Rp {room.price.toLocaleString('id-ID')} = Rp {totalHarga.toLocaleString('id-ID')}
                        </span>
                    </div>

                    <div className="price-row">
                        <span>Pajak</span>
                        <span>Rp {pajak.toLocaleString('id-ID')}</span>
                    </div>

                    <hr />

                    <div className="price-row total">
                        <strong>Total</strong>
                        <strong>Rp {total.toLocaleString('id-ID')}</strong>
                    </div>

                    <div className="pay-button-container">
                        <Link
                            to="/payment"
                            state={{
                                total,
                                jumlahKamar,
                                contact: formData,
                                extraDetails,
                                room,
                            }}
                        >
                            <button className="pay-button">Lanjutkan Pembayaran ➜</button>
                        </Link>
                    </div>

                    <p className="terms">
                        Dengan lanjut ke pembayaran, Anda telah menyetujui{" "}
                        <a href="#">Syarat dan Ketentuan</a>, serta{" "}
                        <a href="#">Kebijakan Privasi</a> Stay
                    </p>
                </div>
            </div>

            <br />
            <Footer />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-text">Format email tidak valid</p>}
          </div>

          <div className="form-group">
            <label htmlFor="noHp">Nomor HP</label>
            <input
              type="tel"
              id="noHp"
              name="noHp"
                value={formData.noHp}
                onChange={handleChange}
                onKeyPress={(e) => {
                if (!/^\d$/.test(e.key)) e.preventDefault();
                    }}
                className={errors.noHp ? 'input-error' : ''}
            />
            {errors.noHp && <p className="error-text">Nomor HP harus minimal 11 Karakter dan Hanya Berupa Angka</p>}
          </div>
        </div>

        <div className="request-container">
          <h3>Permintaan Tambahan</h3>
          <p>
            Beritahu hotel untuk menyediakan fasilitas tambahan untuk menyesuaikan
            pengalaman menginap Anda. Pilihan ini mungkin akan menambah biaya menginap!
          </p>

          <div className="checkbox-row">
            {["jenisKasur", "lantai", "checkIn", "checkOut", "lainnya"].map((opt) => (
              <label key={opt}>
                <input
                  type="checkbox"
                  onChange={() => toggleOption(opt)}
                  checked={options[opt]}
                />
                {opt.charAt(0).toUpperCase() + opt.slice(1).replace("Out", " Out").replace("In", " In")}
              </label>
            ))}
          </div>

          <div className="conditional-options">
            {options.jenisKasur && (
              <div className="option-box">
                <label><input type="radio" name="jenisKasur" value="Deluxe" checked={extraDetails.jenisKasur === "Deluxe"} onChange={handleChangeDetails}/>Deluxe</label>
                <label><input type="radio" name="jenisKasur" value="Twin" checked={extraDetails.jenisKasur === "Twin"} onChange={handleChangeDetails}/>Twin</label>
              </div>
            )}

            {options.lantai && (
              <div className="option-box">
                <label><input type="radio" name="lantai" value="Atas" checked={extraDetails.lantai === "Atas"} onChange={handleChangeDetails}/> Atas</label>
                <label><input type="radio" name="lantai" value="Bawah" checked={extraDetails.lantai === "Bawah"} onChange={handleChangeDetails}/> Bawah</label>
              </div>
            )}

            {options.checkIn && (
              <div className="option-box-horizontal">
                <label><input type="time" name="checkIn" value={extraDetails.checkIn} onChange={handleChangeDetails}/></label>
              </div>
            )}

            {options.checkOut && (
              <div className="option-box-horizontal">
                <label><input type="time" name="checkOut" value={extraDetails.checkOut} onChange={handleChangeDetails}/></label>
              </div>
            )}

            {options.lainnya && (
              <div className="option-box-horizontal">
                <input type="text" name="lainnya" placeholder="Keterangan lainnya..." value={extraDetails.lainnya} onChange={handleChangeDetails}/>
              </div>
            )}
          </div>
        </div>

        <div className="price-detail-container">
          <div className="price-detail">
            <h3>Detail Harga</h3>

            <div className="price-row">
              <span>Harga Kamar</span>
              <span>Rp {room.price.toLocaleString('id-ID')},-</span>
            </div>

            <div className="price-row">
              <span>Pajak</span>
              <span>Rp {pajak.toLocaleString('id-ID')},-</span>
            </div>

            <hr />

            <div className="price-row total">
              <strong>Total</strong>
              <strong>Rp {total.toLocaleString('id-ID')},-</strong>
            </div>

            <div className="pay-button-container">
              {isFormValid ? (
                <Link to="/payment" state={{ total, contact: formData, extraDetails }}>
                  <button className="pay-button">Lanjutkan Pembayaran ➜</button>
                </Link>
              ) : (
                <button className="pay-button" disabled>Periksa Input Anda</button>
              )}
            </div>

            <p className="terms">
              Dengan lanjut ke pembayaran, Anda telah menyetujui{" "}
              <a href="#">Syarat dan Ketentuan</a>, serta{" "}
              <a href="#">Kebijakan Privasi</a> Stay
            </p>
          </div>
        </div>

        <br />
        <Footer />
      </div>
    </div>
  );