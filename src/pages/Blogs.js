import '../styles/Blogs.css';
import { blogsData } from '../data/blogsData';

function Blogs() {
  const renderBlogCard = (blog) => (
    <div key={blog.id} className="blog-card">
      <div className="blog-top-section">
        <div className="blog-image">
          <img src={blog.image} alt={blog.imageAlt} />
        </div>
        <div className="blog-content">
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-author">{blog.author}</p>
        </div>
      </div>
      <div className="blog-body">
        <p className="blog-excerpt">
          {blog.excerpt}
        </p>
        <a href={blog.readMoreUrl} 
           target="_blank" 
           rel="noopener noreferrer">
          <button className="read-more">Read more</button>
        </a>
      </div>
    </div>
  );

  return (
    <div className="blogs-page">
      <h1 className="page-title">BLOGS</h1>
      
      <div className="blogs-container">
        {blogsData.map(renderBlogCard)}
      </div>
    </div>
  );
}

export default Blogs;