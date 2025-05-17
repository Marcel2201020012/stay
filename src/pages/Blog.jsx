import "../styles/Blog.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";

import staylogo from '../images/logo-stay.svg'
import likeButton from '../images/blog-images/like.svg'
import shareButton from '../images/blog-images/share.svg'
import hotelImage from "../images/blog-images/hotel_1.png";

function Blog() {
    return (
        <div className="blog-page">
            <Navbar />

            <div className="hotel-container">
                <header className="hotel-header">
                    <h1>5 Hotel Murah di Tanjungpinang, Cocok Untuk Liburan Sambil Jelajah Sejarah Riau</h1>
                    <div className="hotel-subinfo">
                        <span className="author">
                            <img src={staylogo} alt="Logo" className="blog-info-icons" />5 Januari 2025
                        </span>
                        <div className="icons">
                            <button>
                                <img src={likeButton} alt="Like"/>
                            </button>
                            <button>
                                <img src={shareButton} alt="share"/>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="hotel-image-section">
                    <img src={hotelImage} alt="Hotel room" />
                    <p className="description">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Dui natoque viverra convallis laoreet tempus? Volutpat luctus habitant sociosqu tempor vitae semper risus vehicula. Mus dui purus rutrum leo; proin donec aenean. Duis justo fringilla ligula odio magna inceptos penatibus aliquam. Ut nibh fusce cubilia at lacinia. Dolor dis facilisi nunc cras vitae et et velit nullam. Velit fringilla proin mattis iaculis facilisis potenti ullamcorper. Imperdiet mi venenatis habitant nulla consequat.
                    </p>
                </div>

                <div className="hotel-text">
                    <p>
                        Lectus ante lobortis nisi aenean est curabitur, et conubia vulputate. Faucibus arcu vel rhoncus pulvinar ligula sed class. Ex porta dignissim ullamcorper tempor non erat aptent platea aliquet. Magnis vel purus porta tempor placerat. Pretium est rhoncus scelerisque ornare class lectus etiam eros fringilla. Urna suscipit suscipit aenean quis sed rutrum enim lobortis scelerisque. Sollicitudin leo gravida justo efficitur ligula hendrerit. Bibendum luctus fermentum fames suscipit enim ligula. Iaculis vivamus semper posuere varius orci facilisi consectetur nostra?
                    </p>
                    <p>
                        
Est torquent duis consectetur feugiat montes rutrum metus dolor. Senectus leo bibendum maximus consectetur vestibulum ante lobortis aliquam. Eros orci enim nullam lectus finibus inceptos. Ullamcorper blandit praesent aptent felis egestas lectus euismod? Sollicitudin lacinia massa nulla quisque eu taciti lacus. Sed ad at hac pulvinar torquent duis blandit accumsan cras. Quam montes dignissim porttitor mattis conubia scelerisque porttitor.
                    </p>
                </div>
            </div>

            <Search />
            <Footer />
        </div>
    );
}

export default Blog;