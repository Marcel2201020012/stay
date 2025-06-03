import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Search from "../components/Search"
import '../styles/Home.css'
import BlogCard from '../components/BlogCard'
import blogs from '../data/BlogSection'

function Pencarian() {

  return (
    <>
      <Navbar />
      <Search />
      <br></br>
      <div className="pencarian-container">

        <h2 className="blog-title">Bingung Mau Nginap Dimana?</h2>
        <div className="blog-grid">
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
