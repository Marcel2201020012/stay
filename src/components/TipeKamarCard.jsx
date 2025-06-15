import React, { useState } from 'react';
import '../styles/TipeKamarCard.css';
import { Link, useNavigate } from 'react-router-dom';

function TipeKamarCard({ room }) {
  const [jumlahKamar, setJumlahKamar] = useState(1);
  const navigate = useNavigate();

  const handleReservasi = () => {
    navigate('/booking', {
      state: {
        room,
        jumlahKamar,
        totalHarga: jumlahKamar * room.price,
      },
    });
  };

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
            <span className="price">
              Rp{(room.price * jumlahKamar).toLocaleString('id-ID')}
            </span>

            <div className="jumlah-kamar-select">
              <label htmlFor="jumlahKamar">Jumlah: </label>
              <select
                id="jumlahKamar"
                value={jumlahKamar}
                onChange={(e) => setJumlahKamar(Number(e.target.value))}
              >
                {[...Array(5)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <button className="reserve-btn" onClick={handleReservasi}>
              Reservasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipeKamarCard;
