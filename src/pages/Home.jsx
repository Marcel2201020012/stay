import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import KuponList from "../components/Kupon_List";

import React, { useRef, useState, useEffect } from 'react';

import kupon_logo from "../images/kupon_logo.svg";

import Search from "../components/Search"
import HotelCard from '../components/HotelCard'
import hotels from '../data/HomeSection'
import PromoCard from '../components/PromoCard'
import promotions from '../data/PromoSection'
import BlogCard from '../components/BlogCard'
import blogs from '../data/BlogSection'
import '../styles/Home.css'

function Home() {
  const promos = [
    { title: 'Diskon hotel s.d 10%', minTrans: 'Rp500K', code: 'APRILASIK7' },
    { title: 'Diskon hotel s.d 10%', minTrans: 'Rp500K', code: 'APRILASIK7' },
    { title: 'Diskon hotel s.d 10%', minTrans: 'Rp500K', code: 'APRILASIK7' },
    { title: 'Diskon hotel s.d 10%', minTrans: 'Rp500K', code: 'APRILASIK7' },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <>
      <Navbar />
      <Search />
      <br></br>
      <div className="home-container">

        <div className="promo-text-home">
          <img src={kupon_logo} alt="Logo kupon" className="logo-kupon" />
          <p>Temukan Diskon Menarik!!</p>
        </div>

        <div className="promo-list-home" ref={scrollRef}>
          {promos.map((promo, index) => (
            <KuponList key={index} {...promo} />
          ))}
        </div>
        
        <div className="dot-indicators-home">
          {promos.map((_, idx) => (
            <span
              key={idx}
              className={`dot-home ${idx === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <h2 className="promo-title">Temukan Promo Terbaik</h2>
        
        <div className="promo-grid">
          {promotions.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>

        <h2 className="hotel-title">Temukan Hotel-Hotel Terdekat</h2>
        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

        <h2 className="blog-title">Bingung Mau Nginap Dimana?</h2>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
