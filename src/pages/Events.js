import React from 'react';
import '../styles/Events.css';

function Events() {
  return (
    <div className="events-page">
      <div className="events-content">
        <h1 className="events-title">OUR EVENTS</h1>

        {/* Flagship Events Section */}
        <div className="events-section">
          <h2 className="section-title">Flagship Events</h2>
          <div className="flagship-events-grid">
            <div className="event-card">
              <div className="event-top-section">
                <div className="event-logo">
                  <img src="/Events/ViTECoN.png" alt="VITECoN" />
                </div>
                <div className="event-info">
                  <p>International Conference on Vision Towards Emerging Trends in Communication and Networking (VITECoN)</p>
                </div>
              </div>
              <div className="event-info">
                <button className="view-more-btn">Read more</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-top-section">
                <div className="event-logo">
                  <img src="/Events/ViTECoN.png" alt="VITECoN CTF" />
                </div>
                <div className="event-info">
                  <p>Capture The Flag (CTF), a competition conducted every year during VIT's largest technical fest "graVITas"</p>
                </div>
              </div>
              <div className="event-info">
                <button className="view-more-btn">Read more</button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Events Section */}
        <div className="events-section">
          <h2 className="section-title">Other Events</h2>
          <div className="other-events-grid">
            <div className="event-card">
              <div className="event-top-section">
                <div className="event-logo">
                  <img src="/Events/DOT_DASH.png" alt="Quiz Quest" />
                </div>
                <div className="event-info">
                  <p>A quiz competition organized as part of "VIT Quality Week 2024" which was themed on "Quality - Realizing Your Competitive Potential"</p>
                </div>
              </div>
              <div className="event-info">
                <button className="view-more-btn">Read more</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-top-section">
                <div className="event-logo">
                  <img src="/Events/DOT_DASH.png" alt="Dot Dash" />
                </div>
                <div className="event-info">
                  <p>Capture The Flag (CTF), a competition conducted every year during VIT's largest technical fest "graVITas"</p>
                </div>
              </div>
              <div className="event-info">
                <button className="view-more-btn">Read more</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-top-section">
                <div className="event-logo">
                  <img src="/Events/ViTECoN.png" alt="VLSI Design" />
                </div>
                <div className="event-info">
                  <p>Capture The Flag (CTF), a competition conducted every year during VIT's largest technical fest "graVITas"</p>
                </div>
              </div>
              <div className="event-info">
                <button className="view-more-btn">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
