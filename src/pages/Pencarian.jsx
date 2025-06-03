import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Search from "../components/Search"
import '../styles/Pencarian.css'
import BlogCard from '../components/BlogCard'
import blogs from '../data/BlogSection'
import hotels from '../data/HotelPencarian';
import HotelPencarian from '../components/HotelPencarian';
import { FaStar } from 'react-icons/fa';

function Pencarian() {

  return (
    <>
      <Navbar />
      <Search />
      <br></br>
      <div className="pencarian-container">


        {hotels.map(hotel => (
          <HotelPencarian key={hotel.id} hotel={hotel} />
        ))}

        <h2 className="blog-title">Bingung Mau Nginap Dimana?</h2>
        <div className="blog-grid-pencarian">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}


        </div>
      </div>
      <br></br>
      <Footer />
    </>
  )
}

export default Pencarian
