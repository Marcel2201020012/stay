import React, { useRef, useState, useEffect } from 'react';
import "../styles/Promotion.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KuponList from "../components/Kupon_List";
import promoBanner1 from "../images/promo-images/banner_1.png";

function Promotion() {
    const promos = [
        { title: 'Diskon hotel s.d 10%', minTrans: 'Rp500K', code: 'APRILASIK7' },
        { title: 'Diskon hotel s.d 20%', minTrans: 'Rp800K', code: 'HOTDEALS20' },
        { title: 'Diskon hotel s.d 30%', minTrans: 'Rp1JT', code: 'TRAVEL30' },
        { title: 'Diskon hotel s.d 50%', minTrans: 'Rp2JT', code: 'FLASHSALE50' },
    ];

    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [copiedStatus, setCopiedStatus] = useState(promos.map(() => false));

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container || container.children.length === 0) return;

        const card = container.children[0];
        const cardWidth = card.offsetWidth;
        const cardMargin = parseInt(window.getComputedStyle(card).marginRight, 10);
        const fullCardWidth = cardWidth + cardMargin;

        const scrollLeft = container.scrollLeft;
        const index = Math.round(scrollLeft / fullCardWidth);
        setActiveIndex(index);
    };

    useEffect(() => {
        const el = scrollRef.current;
        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCopy = (index, code) => {
        if (copiedStatus[index]) return; // prevent re-copy

        navigator.clipboard.writeText(code);
        const updated = [...copiedStatus];
        updated[index] = true;
        setCopiedStatus(updated);
    };

    return (
        <div className="promotion-page">
            <Navbar />
            <div className="promo-section">
                <div className="promo-banner">
                    <img src={promoBanner1} alt="Banner" className="banner-img" />
                </div>
                <div className="promo-text">
                    <p>Selalu ada yang spesial bagi yang ingin berhemat,</p>
                    <p>Menginap di hotel dalam negeri jadi lebih murah!</p>
                </div>
                <div className="promo-button">⬇ AMBIL PROMONYA DI BAWAH ⬇</div>
                <div className="promo-list" ref={scrollRef}>
                    {promos.map((promo, index) => (
                        <KuponList
                            key={index}
                            {...promo}
                            copied={copiedStatus[index]}
                            onCopy={() => handleCopy(index, promo.code)}
                        />
                    ))}
                </div>
                <div className="dot-indicators">
                    {promos.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === activeIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Promotion;