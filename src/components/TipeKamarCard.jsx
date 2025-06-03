import React from 'react';
import '../styles/TipeKamarCard.css';

import { Link } from 'react-router-dom';

function TipeKamarCard({ room }) {
  return (
    <div className="tipe-kamar-card">
      <img src={room.image} alt={room.name} className="room-image" />

      <div className="room-details">
        <h4>{room.name}</h4>
        <p className="room-desc">{room.description}</p>
        
        <ul className="room-icons">
          {room.details.map((item, index) => (
            <li key={index}>
              <img src={item.icon} alt="" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <p className="cancellation">{room.cancellation}</p>

        <div className="bottom-info">
          <span className="availability">{room.availability}</span>
          <div className="price-reserve">
            <span className="price">Rp{room.price.toLocaleString('id-ID')}</span>
            <Link to="/booking" state={{room}}>
              <button className="reserve-btn">Reservasi</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipeKamarCard;
