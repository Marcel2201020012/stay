import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Chatbot.css';
import HotelData from '../data/HotelDetails';
import HotelCard from '../components/HotelCard';
import hotels from '../data/HomeSection'
import stay_circle from '../images/stay_circle.png';
import { FaSearch } from 'react-icons/fa';
import { FaCommentAlt, FaEllipsisV } from 'react-icons/fa';

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
                        <img src={stay_circle} alt="" />
                    </div>
                    <div className="dots">● ● ●</div>
                </div>
                <button className="new-chat-btn">Begin a New Chat +</button>
                <div className='chat-panel'>
                    <div className="chat-search">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Cari" />
                    </div>
                    <h2>Chat Terbaru</h2>
                    <div className="chat-history">
                        <div className="chat-history-item">
                            <FaCommentAlt className="chat-icon" />
                            <p>Rekomendasi Hotel</p>
                            <FaEllipsisV className="menu-icon" />
                        </div>

                        <div className="chat-history-item">
                            <FaCommentAlt className="chat-icon" />
                            <p>Lokasi hotel terdekat</p>
                            <FaEllipsisV className="menu-icon" />
                        </div>

                        <div className="chat-history-item">
                            <FaCommentAlt className="chat-icon" />
                            <p>Hotel termurah</p>
                            <FaEllipsisV className="menu-icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Kolom kanan / Chatbox */}
            <div className="chatbot-main">
                <div className="chat-scrollbox">
                    <div className="user-message">
                        Berikan saya rekomendasi Hotel Terbaik di Tanjungpinang
                    </div>

                    <div className="ai-response">
                        <p>Berikut adalah beberapa rekomendasi hotel terbaik di Tanjungpinang yang dapat Anda pertimbangkan:</p>
                        <h2>1. Ck Tanjungpinang Hotel & Convention Center</h2>

                        <div className="card-wrapper" onClick={() => handleHotelClick(hotels[0].id)}>
                            <HotelCard hotel={hotels[0]} />
                        </div>
                        <p>
                            Hotel bintang 4 dengan fasilitas lengkap seperti kolam renang, restoran, pusat kebugaran, dan spa. Terletak strategis di pusat kota, cocok untuk wisatawan bisnis maupun keluarga.
                        </p>

                        <br />
                        <h2>2. Aston Tanjung Pinang Hotel & Conference Center</h2>
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
