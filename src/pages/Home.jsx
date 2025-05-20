import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Search from "../components/Search"
import HotelCard from '../components/HotelCard'
import hotels from '../data/HomeSection'
import PromoCard from '../components/PromoCard'
import promotions from '../data/PromoSection'
import BlogCard from '../components/BlogCard'
import blogs from '../data/BlogSection'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <Navbar />
      <Search />
      <main className="home-container">
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
      </main>
      <Footer />
    </>
  )
}

export default Home
