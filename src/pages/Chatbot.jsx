import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Chatbot.css';
import HotelData from '../data/HotelDetails';
import HotelCard from '../components/HotelCard';
import hotels from '../data/HomeSection'
import stay_circle from '../images/stay_circle.png';

function Chatbot() {
    const navigate = useNavigate();

    // const handleHotelClick = (id) => {
    //     navigate(`/hotel/${id}`);
    // };

    return (
        <div className="chatbot-container">
            {/* Sidebar kiri */}
            <div className="chatbot-sidebar">
                <div className="sidebar-header">
                    <div className="logo-icon">
                        <img src= {stay_circle} alt="" />
                    </div>
                    <div className="dots">● ● ●</div>
                </div>
                <button className="new-chat-btn">Begin a New Chat</button>
                <div className="chat-search">
                    <input type="text" placeholder="Cari" />
                </div>
                <div className="chat-history">
                    <p>Rekomendasi Hotel</p>
                    <p>Lokasi hotel terdekat</p>
                    <p>Hotel termurah</p>
                </div>
            </div>

            {/* Kolom kanan / Chatbox */}
            <div className="chatbot-main">
                <div className="chat-scrollbox">
                    <div className="user-message">
                        Berikan saya rekomendasi Hotel Terbaik di Tanjungpinang
                    </div>

                    <div className="ai-response">
                        <p>Berikut adalah beberapa rekomendasi hotel terbaik di Tanjungpinang:</p>
                              
                        <div className="card-wrapper" onClick={() => handleHotelClick(hotels[0].id)}>
                            <HotelCard hotel={hotels[0]} />
                        </div>
                        <p>
                            Hotel ini menawarkan kenyamanan luar biasa dengan lokasi strategis di pusat kota.
                        </p>

                   
                        <div className="card-wrapper" onClick={() => handleHotelClick(hotels[1].id)}>
                            <HotelCard hotel={hotels[1]} />
                        </div>
                        <p>
                            Cocok untuk perjalanan bisnis maupun liburan, dilengkapi dengan fasilitas modern.
                        </p>
                    </div>
                </div>

                {/* Chat input */}
                <div className="chat-input">
                    <input type="text" placeholder="tuliskan pertanyaan anda disini" />
                    <button className="send-btn">➤</button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
