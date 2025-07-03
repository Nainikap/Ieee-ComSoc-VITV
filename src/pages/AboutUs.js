import '../styles/AboutUs.css';
import PageTransition from '../components/PageTransition';

function AboutUs() {
  return (
    <PageTransition>
      <div className="about-us">
        {/* About Us Title */}
        <div className="about-us-title">
          <h1>About Us</h1>
        </div>

        {/* Mission and Vision Sections */}
        <div className="mission-vision-container">
          <div className="mission-section">
            <div className="mission-content">
              <div className="target-icon">
                <img src="../Aboutuspng/Mission.png" alt="Mission" />
              </div>
              <div className="text-content">
                <h2 className="mission-title">
                  OUR MISSION
                </h2>
                <p>
                  The IEEE Communications Society at VIT promotes technological innovation and fosters creation and sharing of information among 
                  the global technical community. The Society provides services to members for their technical and professional advancement 
                  and forums for technical exchanges among professionals in academia, industry, and public institutions.
                </p>
              </div>
            </div>
          </div>

          <div className="vision-section">
            <div className="vision-content">
              <div className="eye-icon">
                <img src="../Aboutuspng/Vision.png" alt="Vision" />
              </div>
              <div className="text-content">
                <h2 className="vision-title">
                  OUR VISION
                </h2>
                <p>
                  To bring the world together in harmony through communications and 
                  networking technology research, application, education, and incubation of new ideas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Domains Section */}
        <div className="domains-section">
          <div className="title-container">
            <center>
              <h2 className="section-title">
                DOMAINS
              </h2>
            </center>
          </div>
          <div className="domains-grid">
            <div className="domain-card">
              <img src="/domains/technical.png" alt="Technical" className="domain-icon" />
              <h3>TECHNICAL</h3>
            </div>
            <div className="domain-card">
              <img src="/domains/design.png" alt="Design" className="domain-icon" />
              <h3>DESIGN</h3>
            </div>
            <div className="domain-card">
              <img src="/domains/editorial.png" alt="Editorial" className="domain-icon" />
              <h3>EDITORIAL</h3>
            </div>
            <div className="domain-card">
              <img src="/domains/finance.png" alt="Finance" className="domain-icon" />
              <h3>FINANCE</h3>
            </div>
            <div className="domain-card">
              <img src="/domains/management.png" alt="Management" className="domain-icon" />
              <h3>MANAGEMENT</h3>
            </div>
            <div className="domain-card">
              <img src="/domains/marketing.png" alt="Marketing" className="domain-icon" />
              <h3>MARKETING</h3>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default AboutUs;
