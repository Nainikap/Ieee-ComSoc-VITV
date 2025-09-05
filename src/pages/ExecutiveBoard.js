import { useState } from 'react';
import '../styles/ExecutiveBoard.css';
import PageTransition from '../components/PageTransition';

function ExecutiveBoard() {
  const [activeBoard, setActiveBoard] = useState('2526'); // '2324' or '2425'

  return (
    <PageTransition>
      <div className="executive-board"><h1 className="board-title">
                  EXECUTIVE BOARD OF DIRECTORS 24-25
                </h1>
                <p className="board-description">
                  As board members, we work meticulously with unwavering passion, work ethic and dedicatedly 
                  to advance the mission of IEEE ComSoc in VIT with chapter members.
                </p>
        <div className="board-container">
          
          {/* Board selection tabs */}
          <div className="board-tabs">
            <button 
              className={`board-tab ${activeBoard === '2526' ? 'active' : ''}`}
              onClick={() => setActiveBoard('2526')}
            >
              25-26 Board
            </button>
            <button 
              className={`board-tab ${activeBoard === '2425' ? 'active' : ''}`}
              onClick={() => setActiveBoard('2425')}
            >
              2024-25
            </button>
            
          </div>

          {/* 2023-24 Board */}
          {activeBoard === '2425' && (
            <div className="board-content">
              {/* Existing board intro and content */}
              <div className="board-intro">
                <div className="team-photo-section">
                  <img 
                    src="../photos/Comsoc_group-photo.jpg" 
                    alt="Executive Board Team" 
                    className="team-photo"
                  />
                </div>

                <h1 className="board-title">
                  EXECUTIVE BOARD OF DIRECTORS 24-25
                </h1>

                <p className="board-description">
                  As board members, we work meticulously with unwavering passion, work ethic and dedicatedly 
                  to advance the mission of IEEE Communications Society in VIT with chapter members.
                </p>
              </div>

            {/* Board members section */}
            <div className="board-members">
              {/* Faculty Coordinators */}
                <div className="faculty-member">
                  <div className="faculty-row">
                    <div className="member-card">
                      <img src="/photos/DR._Thanikaiselvan_V-(Faculty_Coordinator).jpg" alt="Faculty Coordinator" />
                      <div className="member-info">
                        <h3>Dr. Thanikaiselvan V</h3>
                        <p>Faculty Coordinator</p>
                      </div>
                    </div>
                   
                  </div>
                </div>

              {/* Core Members */}
                <div className="core-members-row">
                  <div className="member-card">
                    <img src="/photos/Aditya_Mani-(Chairperson).jpg" alt="Chairperson" />
                    <div className="member-info">
                      <h3>Aditya Mani</h3>
                      <p>Chairperson</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/aditya-mani-666550198/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/adi.tya_mani/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Arish-(Secretary).jpg" alt="Secretary" />
                    <div className="member-info">
                      <h3>Arish</h3>
                      <p>Secretary</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/arish-p-82982a255" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/arish_palani" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Aditya_Menon-(Vice_Chairperson).jpg" alt="Vice Chairperson" />
                    <div className="member-info">
                      <h3>Aditya Menon</h3>
                      <p>Vice-Chairperson</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/adityahmenon" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Kavi_Rohith_M-(Co-Secretary)-1.jpg" alt="Co-Secretary" />
                    <div className="member-info">
                      <h3>Kavi Rohith M</h3>
                      <p>Co-Secretary</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/kavi-rohith-m-481761264/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/kavi_.rohith.m/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              

              {/* Domain Heads */}
                <div className="domain-heads-row">
                  <div className="member-card">
                    <img src="/photos/Srishti_Shukla-(Technical_Head).jpg" alt="Technical Head" />
                    <div className="member-info">
                      <h3>Srishti Shukla</h3>
                      <p>Technical Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/srishti-shukla28/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/https__srishti/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Gurpreet_Singh-(Design_Head).jpg" alt="Design Head" />
                    <div className="member-info">
                      <h3>Gurpreet Singh</h3>
                      <p>Design Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/gurpreet-singh-491a54247" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/callmeguri/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Akash_Manikantan-(Editorial_Head).jpg" alt="Editorial Head" />
                    <div className="member-info">
                      <h3>Akash Manikantan</h3>
                      <p>Editorial Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/akash-manikantan-n-888336328" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/..akash_._/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Jiya_Sugla-(Finance_Head).jpg" alt="Finance Head" />
                    <div className="member-info">
                      <h3>Jiya Sugla</h3>
                      <p>Finance Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/jiya-sugla-458186277" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/jiya_sugla/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* PR and Projects Heads - Row 3 */}
                <div className="pr-projects-row">
                  <div className="member-card">
                    <img src="/photos/Aniruddh_Rusiya-(Marketing_&_Publicity_Head).jpg" alt="PR & Publicity Head" />
                    <div className="member-info">
                      <h3>Aniruddh Rusiya</h3>
                      <p>Marketing & Publicity Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/aniruddh-rusiya-346a4a252" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/rusiya_aniruddh/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Shoumik_Adhikary-(Projects_Head).jpg" alt="Projects Head" />
                    <div className="member-info">
                      <h3>Shoumik Adhikary</h3>
                      <p>Projects Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/shoumik-adhikary-a28390238/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/shoumik.adhikary/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2024-25 Board */}
          {activeBoard === '2526' && (
            <div className="board-content">
              <div className="board-intro">
                <div className="team-photo-section">
                  <img 
                    src="../photos/Board_25.jpg" 
                    alt="Executive Board Team 24-25" 
                    className="team-photo"
                  />
                </div>

                <h1 className="board-title">
                  EXECUTIVE BOARD OF DIRECTORS 25-26
                </h1>

                <p className="board-description">
                  Meet our new board members for the year 2025-26, committed to taking 
                  IEEE Communications Society VIT Chapter to greater heights.
                </p>
              </div>

              <div className="board-members">

                {/* Faculty Coordinators - Top Row */}
                <div className="faculty-member">
                  <div className="faculty-row">
                    <div className="member-card">
                      <img src="/photos/DR._Thanikaiselvan_V-(Faculty_Coordinator).jpg" alt="Faculty Coordinator" />
                      <div className="member-info">
                        <h3>Dr. Thanikaiselvan V</h3>
                        <p>Faculty Coordinator</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Core Members - Row 1 */}
                <div className="core-members-row">
                  <div className="member-card">
                    <img src="/photos/Kavi.jpg" alt="Chairperson" />
                    <div className="member-info">
                      <h3>Kavi Rohith M</h3>
                      <p>Chairperson</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/kavi-rohith-m-481761264/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/kavi_.rohith.m/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Siddhant_edited.jpg" alt="Secretary" />
                    <div className="member-info">
                      <h3>Siddhanth Gupta</h3>
                      <p>Secretary</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/sid-profile/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/_siddhanth_gupta/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Keshav.jpg" alt="Vice-Chairperson" />
                    <div className="member-info">
                      <h3>Keshav S Kaushish</h3>
                      <p>Vice-Chairperson</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/keshav-s-kaushish-7038b9247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/ikeshavkaushish?igsh=bGphOWlpYzk0N2Zw" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  

                  <div className="member-card">
                    <img src="/photos/Prashant.jpg" alt="Co-Secretary" />
                    <div className="member-info">
                      <h3>Prashant Shekhar Shrivastava</h3>
                      <p>Co-Secretary</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/prashant-shekhar-shrivastava-91a34624b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/prashantshri399?igsh=MTJndnY1ZGhxeGg2bA==" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Domain Heads - Row 2 */}
                <div className="domain-heads-row">
                  <div className="member-card">
                    <img src="/photos/Anushka_edited.jpg" alt="Technical Head" />
                    <div className="member-info">
                      <h3>Anushka Deshmukh</h3>
                      <p>Technical Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/anushka-deshmukh-7a0a3a255" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/anushka_deshmukh/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Divesh_edited.jpg" alt="Events Head" />
                    <div className="member-info">
                      <h3>R.Divesh</h3>
                      <p>Events Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/r-divesh-643069295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/diveshhh.19?igsh=a2pqemVhdmFrNDg5" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Mrinal_edited.jpg" alt="Management Head" />
                    <div className="member-info">
                      <h3>Mrinal</h3>
                      <p>Management Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/mrinal-7a0a3a255" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/mrinalll.11?igsh=MXJidm5wdHd2a3kwaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Abhishek.jpg" alt="Editorial Head" />
                    <div className="member-info">
                      <h3>Abhishek Sharma</h3>
                      <p>Editorial Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/abhishek-sharma-95405828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/abhishekk__28?igsh=MTZpZmN6YzgxZTFqbw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* PR and Finance Heads - Row 3 */}
                <div className="pr-projects-row">
                  <div className="member-card">
                    <img src="/photos/Viraj.jpg" alt="Publicity Head" />
                    <div className="member-info">
                      <h3>Viraj Khairnar</h3>
                      <p>Publicity Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/viraj-khairnar-aa6909286" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/virajkhairnar23?igsh=ZGFwaDIzaW5pdmtr" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="member-card">
                    <img src="/photos/Samarth.jpg" alt="Finance Head" />
                    <div className="member-info">
                      <h3>Samarth</h3>
                      <p>Finance Head</p>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/samarth-choudhari-7a4bb4294" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/invites/contact/?igsh=p1y9uv1wa577&utm_content=32y7oc2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
)}
</div>
      </div>
    </PageTransition>
);
}              


export default ExecutiveBoard;