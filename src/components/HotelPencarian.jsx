import React from 'react';
import '../styles/HotelPencarian.css';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

function HotelPencarian({ hotel }) {
    const navigate = useNavigate(); // ✅ Inisialisasi navigator

    const handleClick = () => {
        navigate(`/hotel/${hotel.id}`); // ✅ Navigasi ke halaman detail berdasarkan ID
    };
    return (
        <div className="hotel-pencarian-card">
            <img src={hotel.images} alt={hotel.name} className="hotel-pencarian-image" />

            <div className="hotel-pencarian-content">
                <h4 className="hotel-title-pencarian">{hotel.name}</h4>
                <p className="hotel-desc">{hotel.description}</p>

                <ul className="hotel-facilities">
                    {hotel.details.map((item, index) => (
                        <li key={index}>
                            <img src={item.icon} alt="" className="facility-icon" />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>

                <div className='star-review'>
                    <div className="star-row-pencarian">
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                    </div>
                    <p>4.0/5.0 (1234)</p>
                </div>
                <div className="price-action">
                    <span className="hotel-price">Rp{hotel.price.toLocaleString('id-ID')}</span>
                    <button className="hotel-btn" onClick={handleClick}>Cek Hotel →</button>
                </div>
            </div>
        </div>
    );
}

export default HotelPencarian;
