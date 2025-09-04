import '../styles/Blogs.css';
// import { blogsData } from '../data/blogsData';

function Blogs() {
  // const renderBlogCard = (blog) => (
  //   <div key={blog.id} className="blog-card">
  //     <div className="blog-top-section">
  //       <div className="blog-image">
  //         <img src={blog.image} alt={blog.imageAlt} />
  //       </div>
  //       <div className="blog-content">
  //         <h2 className="blog-title">{blog.title}</h2>
  //         <p className="blog-author">{blog.author}</p>
  //       </div>
  //     </div>
  //     <div className="blog-body">
  //       <p className="blog-excerpt">
  //         {blog.excerpt}
  //       </p>
  //       <a href={blog.readMoreUrl} 
  //          target="_blank" 
  //          rel="noopener noreferrer">
  //         <button className="read-more">Read more</button>
  //       </a>
  //     </div>
  //   </div>
  // );

  return (
    <div className="blogs-page">
      <h1 className="page-title">BLOGS</h1>
      
      <div className="blogs-container">

        {/* Spectrum Auctions Blog Card */}
        <div className="blog-card">
          <div className="blog-top-section">
            <div className="blog-image">
              <img src="/blog-images/spectrum-tower.jpg" alt="Spectrum Auctions" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">Spectrum Auctions</h2>
              <p className="blog-author">Keshav S Kaushish & Samarth Pramodrao Choudhari</p>
            </div>
          </div>
          <div className="blog-body">
            <p className="blog-excerpt">
              Almost everyone reading this article would have listened to their grandparents talking 
              about their time when they didn't have devices to communicate with each other. So, 
              how did they communicate earlier? Before the introduction of communication signals 
              and networks, people hardly communicated frequently to their closer ones staying far away...
            </p>
            <a href="https://medium.com/@ieeecomsoc/spectrum-auctions-6afb666ed1f0" 
               target="_blank" 
               rel="noopener noreferrer">
              <button className="read-more">Read more</button>
            </a>
          </div>
        </div>

        {/* MTNL Blog Card */}
        <div className="blog-card">
          <div className="blog-top-section">
            <div className="blog-image">
              <img src="/blog-images/mtnl-logo.jpg" alt="MTNL Budget" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">Budget Allocation to Telecom Industry (MTNL)</h2>
              <p className="blog-author">R. Divesh</p>
            </div>
          </div>
          <div className="blog-body">
            <p className="blog-excerpt">
              The Union Budget 2024-25 has allocated ₹1.28 lakh crore to the telecom sector, 
              including ₹1.11,915 crore for various telecom projects and ₹17,000 crore from the 
              Universal Service Obligation Fund (USOF). The USOF aims to make telecommunication 
              services accessible and affordable across all regions...
            </p>
            <a href="https://medium.com/@ieeecomsoc/budget-allocation-to-telecom-industry-mtnl-5e706408b612" 
               target="_blank" 
               rel="noopener noreferrer">
              <button className="read-more">Read more</button>
            </a>
          </div>
        </div>

        {/* eSIM Blog Card */}
        <div className="blog-card">
          <div className="blog-top-section">
            <div className="blog-image">
              <img src="/blog-images/esim.jpg" alt="eSIM Technology" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">eSIM Penetration in Emerging Markets: Overcoming Challenges</h2>
              <p className="blog-author">Viraj Jitendra Khairnar</p>
            </div>
          </div>
          <div className="blog-body">
            <p className="blog-excerpt">
              Recently, technology is advancing at a breakneck speed, in which eSIM (Embedded 
              SIM) is a prominent revolutionary invention to rethink the way we connect. Contrasting 
              the traditional SIM cards, eSIM is directly embedded into the device's circuit design....
            </p>
            <a href="https://medium.com/@ieeecomsoc/esim-penetration-in-emerging-markets-overcoming-challenges-ab4fd712d7f7" 
               target="_blank" 
               rel="noopener noreferrer">
              <button className="read-more">Read more</button>
            </a>
          </div>
        </div>

        {/* PLI Scheme Blog Card */}
        <div className="blog-card">
          <div className="blog-top-section">
            <div className="blog-image">
              <img src="/blog-images/make-in-india.jpg" alt="Make in India" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">PLI Scheme-Fueling India's Manufacturing Dreams</h2>
              <p className="blog-author">Keshav S Kaushish & Abhishek Sharma</p>
            </div>
          </div>
          <div className="blog-body">
            <p className="blog-excerpt">
              Before the launch of "Make in India" in 2014, India's manufacturing sector was 
              fraught with multiple challenges. It contributed only around 15-16% to GDP, 
              highlighting its underperformance compared to other nations. The sector suffered from 
              poor infrastructure...
            </p>
            <a href="https://medium.com/@ieeecomsoc/pli-scheme-fueling-indias-manufacturing-dreams-19f09cf97957" 
               target="_blank" 
               rel="noopener noreferrer">
              <button className="read-more">Read more</button>
            </a>
          </div>
        </div>
      </div>
      <div className='know-more'>
        <br></br><p>To read more articles, please visit our medium page.</p>
        <a href='https://medium.com/@ieeecomsoc'> Click here</a>
      </div>
    </div>
  );
}

export default Blogs;
