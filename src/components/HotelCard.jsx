import React from 'react';
import '../styles/HotelCard.css';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p className="location"><FaMapMarkerAlt /> {hotel.location}</p>
        <p className="rating">
          <FaStar className="star" /> {hotel.rating}/5.0 ({hotel.reviews})
        </p>
        <p className="price">{hotel.price}</p>
        <button className="btn-check">Cek Hotel ➜</button>
      </div>
    </div>
  );
}

export default HotelCard;
