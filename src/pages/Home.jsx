import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HotelCard from '../components/HotelCard'
import hotels from '../data/HomeSection'
import '../styles/Home.css'

function Home() {
  return (
    <>
    <Navbar/>
    <main className="home-container">
        <h2 className="section-title">Temukan Hotel-Hotel Terdekat</h2>
        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    <Footer/>
    </>
  )
}

export default Home
