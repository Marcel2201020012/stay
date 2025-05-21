import React from 'react';
import '../styles/HotelCard.css';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

function HotelCard({ hotel }) {
  const navigate = useNavigate(); // ✅ Inisialisasi navigator

  const handleClick = () => {
    navigate(`/hotel/${hotel.id}`); // ✅ Navigasi ke halaman detail berdasarkan ID
  };

  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p className="location"><FaMapMarkerAlt /> {hotel.location}</p>
        <p className="rating">
          <FaStar className="star" /> {hotel.rating}/5.0 ({hotel.reviews})
        </p>
        <div className="price-button-row">
          <p className="price">{hotel.price}</p>
          <button className="btn-check" onClick={handleClick}>
            Cek Hotel ➜
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
