import "../styles/Booking.css";
import Navbar from "../components/Booking_Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import megaphoneIcon from '../images/booking-icons/megaphone_icon.svg';

function Booking() {
  const location = useLocation();
  const { room, jumlahKamar = 1 } = location.state || {};

  if (!room) return <div>Data Hotel Tidak Ditemukan</div>;

  const roomTypes = [
    { type: "Standard", price: room.price },
    { type: "Deluxe", price: room.price + 200000 },
    { type: "Suite", price: room.price + 500000 },
  ];

  // State terpisah untuk jenis kamar 1 dan 2
  const [selectedRoomType1, setSelectedRoomType1] = useState(roomTypes[0]);
  const [selectedRoomType2, setSelectedRoomType2] = useState(roomTypes[0]);

  // Total harga dan pajak masing-masing kamar
  // Misal: total kamar = 2, masing-masing kamar dihitung terpisah
  // Kalau jumlahKamar lebih dari 2, bisa dikembangkan lagi
  const totalHarga1 = selectedRoomType1.price;
  const totalHarga2 = selectedRoomType2.price;

  // Jika mau total semua kamar ditambahkan (jumlah kamar 2 berarti total kamar 2)
  // Ini contoh kalau kamu ingin jumlah kamar berlaku untuk total kedua kamar:
  const totalHarga = totalHarga1 + totalHarga2 * (jumlahKamar > 1 ? (jumlahKamar - 1) : 0);
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

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({ ...prev, email: !emailRegex.test(value) }));
    }

  if (name === "noHp") {
  const onlyDigits = /^\d+$/; // hanya angka, minimal 1 digit
  const isValid = onlyDigits.test(value) && value.length >= 11;
  setErrors((prev) => ({ ...prev, noHp: !isValid }));
}


    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeDetails = (e) => {
    setExtraDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleOption = (key) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handler untuk kamar 1
  const handleRoomTypeChange1 = (e) => {
    const selected = roomTypes.find((rt) => rt.type === e.target.value);
    if (selected) setSelectedRoomType1(selected);
  };

  // Handler untuk kamar 2
  const handleRoomTypeChange2 = (e) => {
    const selected = roomTypes.find((rt) => rt.type === e.target.value);
    if (selected) setSelectedRoomType2(selected);
  };

  const isFormValid = !errors.email && !errors.noHp && formData.userName.trim() !== "";

  return (
    <div className="booking-page">
      <Navbar />

      <div className="headline">
        <span className="icon">
          <img src={megaphoneIcon} alt="megaphone icon" />
        </span>
        <p>
          Pastikan Anda mengisi semua informasi di halaman ini dengan benar sebelum melanjutkan ke
          pembayaran!
        </p>
      </div>

      <div className="form-container">
        <h2 className="form-title">Detail Kontak</h2>

        <div className="form-group">
          <label htmlFor="userName">Nama Lengkap</label>
          <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} />
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
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-text">Format email tidak valid</p>}
          </div>

          <div className="form-group">
            <label htmlFor="noHp">Nomor HP</label>
            <input
              type="tel"
              id="noHp"
              name="noHp"
              minLength={11}
              maxLength={15}
              value={formData.noHp}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (!/^\d$/.test(e.key)) e.preventDefault();
              }}
              className={errors.noHp ? "input-error" : ""}
            />
            {errors.noHp && <p className="error-text">Nomor HP Minimal 11 digit</p>}
          </div>
        </div>

        {/* Pilihan Jenis Kamar 1 */}
        <div className="form-group">
          <label htmlFor="roomType1">Pilih Jenis Kamar 1</label>
          <select id="roomType1" name="roomType1" value={selectedRoomType1.type} onChange={handleRoomTypeChange1}>
            {roomTypes.map(({ type, price }) => (
              <option key={type} value={type}>
                {type} - Rp {price.toLocaleString("id-ID")}
              </option>
            ))}
          </select>
        </div>

        {/* Pilihan Jenis Kamar 2 */}
        <div className="form-group">
          <label htmlFor="roomType2">Pilih Jenis Kamar 2</label>
          <select id="roomType2" name="roomType2" value={selectedRoomType2.type} onChange={handleRoomTypeChange2}>
            {roomTypes.map(({ type, price }) => (
              <option key={type} value={type}>
                {type} - Rp {price.toLocaleString("id-ID")}
              </option>
            ))}
          </select>
        </div>

        <div className="request-container">
          <h3>Permintaan Tambahan</h3>
          <p>
            Beritahu hotel untuk menyediakan fasilitas tambahan untuk menyesuaikan pengalaman
            menginap Anda. Pilihan ini mungkin akan menambah biaya menginap!
          </p>

          <div className="checkbox-row">
            {["jenisKasur", "lantai", "checkIn", "checkOut", "lainnya"].map((item) => (
              <label key={item}>
                <input type="checkbox" onChange={() => toggleOption(item)} checked={options[item]} />
                {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
            ))}
          </div>

          <div className="conditional-options">
            {options.jenisKasur && (
              <div className="option-box">
                <label>
                  <input
                    type="radio"
                    name="jenisKasur"
                    value="Deluxe"
                    checked={extraDetails.jenisKasur === "Deluxe"}
                    onChange={handleChangeDetails}
                  />{" "}
                  Deluxe
                </label>
                <label>
                  <input
                    type="radio"
                    name="jenisKasur"
                    value="Twin"
                    checked={extraDetails.jenisKasur === "Twin"}
                    onChange={handleChangeDetails}
                  />{" "}
                  Twin
                </label>
              </div>
            )}

            {options.lantai && (
              <div className="option-box">
                <label>
                  <input
                    type="radio"
                    name="lantai"
                    value="Atas"
                    checked={extraDetails.lantai === "Atas"}
                    onChange={handleChangeDetails}
                  />{" "}
                  Atas
                </label>
                <label>
                  <input
                    type="radio"
                    name="lantai"
                    value="Bawah"
                    checked={extraDetails.lantai === "Bawah"}
                    onChange={handleChangeDetails}
                  />{" "}
                  Bawah
                </label>
              </div>
            )}

            {options.checkIn && (
              <div className="option-box-horizontal">
                <label>
                  <input
                    type="time"
                    name="checkIn"
                    value={extraDetails.checkIn}
                    onChange={handleChangeDetails}
                  />
                </label>
              </div>
            )}

            {options.checkOut && (
              <div className="option-box-horizontal">
                <label>
                  <input
                    type="time"
                    name="checkOut"
                    value={extraDetails.checkOut}
                    onChange={handleChangeDetails}
                  />
                </label>
              </div>
            )}

            {options.lainnya && (
              <div className="option-box-horizontal">
                <input
                  type="text"
                  name="lainnya"
                  placeholder="Keterangan lainnya..."
                  value={extraDetails.lainnya}
                  onChange={handleChangeDetails}
                />
              </div>
            )}
          </div>
        </div>

        <div className="price-detail-container">
          <div className="price-detail">
            <h3>Detail Harga</h3>

            <p className="room-amount-info">
              Anda memesan <strong>{jumlahKamar}</strong> kamar jenis{" "}
              <strong>
                {selectedRoomType1.type}
                {jumlahKamar > 1 ? ` & ${selectedRoomType2.type}` : ""}
              </strong>
            </p>

            <div className="price-row">
              <span>Harga Kamar 1</span>
              <span>Rp {totalHarga1.toLocaleString("id-ID")}</span>
            </div>

            {jumlahKamar > 1 && (
              <div className="price-row">
                <span>Harga Kamar 2</span>
                <span>Rp {totalHarga2.toLocaleString("id-ID")}</span>
              </div>
            )}

            <div className="price-row">
              <span>Pajak (10%)</span>
              <span>Rp {pajak.toLocaleString("id-ID")}</span>
            </div>

            <div className="price-row total">
              <span>Total Harga</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>

        <div className="booking-footer">
          {isFormValid ? (
            <Link
              to="/payment"
              state={{
                userData: formData,
                roomType1: selectedRoomType1,
                roomType2: selectedRoomType2,
                extraDetails,
                jumlahKamar,

                totalHarga,
                pajak,
                total,
              }}
              className="pay-button"
            >
              Lanjut ke Pembayaran
            </Link>
          ) : (
            <button className="pay-button" disabled>
              Isi Data Terlebih Dahulu
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Booking;
