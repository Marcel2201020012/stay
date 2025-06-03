import '../styles/BlogCard.css';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-text">
        <Link to='/blog'>
          <h3>{blog.title}</h3>
        </Link>
        <p>{blog.subtitle}</p>
      </div>
    </div>
  );
}

export default BlogCard;
