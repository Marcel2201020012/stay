import '../styles/BlogCard.css';

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-text">
        <h3>{blog.title}</h3>
        <p>{blog.subtitle}</p>
      </div>
    </div>
  );
}

export default BlogCard;
