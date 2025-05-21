import React from 'react';
import { useParams } from 'react-router-dom';
import hotelDetails from '../data/HotelDetails';
import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6'; // lokasi terdekat
import '../styles/HotelDetail.css';


function HotelDetail() {
    const { id } = useParams();
    const hotel = hotelDetails.find(h => h.id === parseInt(id));

    if (!hotel) return <div>Hotel not found</div>;

    return (
        <div className="hotel-detail-container">
            <div className="image-gallery">
                <div className="main-image">
                    <img src={hotel.gallery[0]} alt="main" />
                </div>
                <div className="side-gallery">
                    {hotel.gallery.slice(1, 7).map((img, index) => (
                        <img key={index} src={img} alt={`gallery-${index + 1}`} />
                    ))}
                </div>
            </div>

            <div className='main-content'>
                <div className='left-column'>
                    <div className="hotel-summary">
                        <h2>{hotel.name}</h2>
                        <div className="star-row">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                        </div>
                        <p className="address">{hotel.address}</p>
                        <p className="description">{hotel.description}</p>
                    </div>

                    <div className="facility-card">
                        <h3>Fasilitas Utama</h3>
                        <div className="facility-list">
                            {hotel.facilityIcons.map((item, index) => (
                                <div key={index} className="facility-item">
                                    <img src={item.icon} alt={item.label} />
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='right-column'>
                    <div className="map-nearby-container">
                        <iframe
                            className="map-frame"
                            src={hotel.mapEmbedUrl}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                        ></iframe>

                        <div className="nearby">
                            <h4>Lokasi Terdekat</h4>
                            <ul>
                                {hotel.nearby.map((place, index) => (
                                    <li key={index}>
                                        <FaLocationDot className="dot-icon" />
                                        <span className="place-name">{place.name}</span>
                                        <span className="place-distance">{place.distance}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default HotelDetail;
