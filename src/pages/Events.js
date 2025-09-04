import React from 'react';
import '../styles/Events.css';
import  { useRef, useEffect } from 'react';

function Events() {

  const cardRef = useRef(null);
  useEffect(() => {
    const card = cardRef.current;

    // only attach click toggle if screen is mobile
    if (window.innerWidth < 768) {
      const handleToggle = () => {
        card.classList.toggle("is-flipped");
      };
      card.addEventListener("click", handleToggle);

      return () => card.removeEventListener("click", handleToggle);
    }
  }, []);
const slidesRef = useRef(null);

  useEffect(() => {
    const container = slidesRef.current;
    if (!container) return;

    // Clone first & last slide for infinite effect
    const firstClone = container.firstElementChild.cloneNode(true);
    const lastClone = container.lastElementChild.cloneNode(true);

    container.appendChild(firstClone);
    container.insertBefore(lastClone, container.firstChild);

    const slides = container.querySelectorAll(".slide");
    let index = 1; // Start on first real slide
    const size = 100;

    // Initial position
    container.style.transform = `translateX(${-index * size}%)`;

    const move = () => {
      index++;
      container.style.transition = "transform 0.9s ease";
      container.style.transform = `translateX(${-index * size}%)`;
    };

    const interval = setInterval(move, 3000);

    const handleTransitionEnd = () => {
      if (index === slides.length - 1) {
        container.style.transition = "none";
        index = 1;
        container.style.transform = `translateX(${-index * size}%)`;
      }
      if (index === 0) {
        container.style.transition = "none";
        index = slides.length - 2;
        container.style.transform = `translateX(${-index * size}%)`;
      }
    };

    container.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      clearInterval(interval);
      container.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);


  return (
    <div className="events-page">
      <div className="events-content">
        <h1 className="events-title">OUR EVENTS</h1>


        <div className = "slider">
            <div className="slides" ref={slidesRef}>

                {/* <div className='slide'>
                <img src="carousel.jpg" alt="Slide 2"/>
                </div> */}
                
                <div className='slide'>
                <img src="carousel1.jpg" alt="Slide 1"/>
                <div className='caption'>
                <p>Quality Week'24 - Quiz Quest</p></div>
                </div>

                <div className='slide'>
                <img src="carousel2.jpg" alt="Slide 3"/>
                <div className='caption'>
                <p>Mind meets machine</p></div>
                </div>

                <div className='slide'>
                <img src="carousel3.jpg" alt="Slide 4"/>
                <div className='caption'>
                <p>VLSI</p></div>
                </div>

                <div className='slide'>
                <img src="carousel4.jpg" alt="Slide 5"/>
                <div className='caption'>
                <p>Outreach</p></div>
                </div>

                <div className='slide'>
                <img src="carousel5.jpg" alt="Slide 6"/>
                <div className='caption'>
                <p>Radiant rally</p></div>
                </div>

                <div className='slide'>
                <img src="carousel6.jpg" alt="Slide 7"/>
                <div className='caption'>
                <p>Connectron</p></div>
                </div>

                <div className='slide'>
                <img src="carousel7.jpg" alt="Slide 8"/>
                <div className='caption'>
                <p>Hack-aTron</p></div>
                </div>

                <div className='slide'>
                <img src="carousel8.jpg" alt="Slide 9"/>
                <div className='caption'>
                <p>VITeCON 2023</p></div>
                </div>

                <div className='slide'>
                <img src="carousel9.jpg" alt="Slide 9"/>
                <div className='caption'>
                <p>Capture the flag</p></div>
                </div>

            </div>
       </div>

        {/* Flagship Events Section */}
        <div className="events-section">
          <h2 className="section-title" >Flagship Events</h2>
          <div className="flagship-events-grid">

            <div className="event-card" ref={cardRef} >
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/ViTECoN.png" alt="VITECoN" />
                </div>
                <div className="event-back">
                  <p>International Conference on Vision Towards Emerging Trends in Communication and Networking (VITECoN)</p>
                </div>
              </div>
              
              
            </div>

            <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/ctf.png" alt="VITECoN CTF" style={{padding:"5rem"}}/>
                </div>
                <div className="event-back">
                  <p>Capture The Flag (CTF), a competition conducted every year during VIT's largest technical fest "graVITas"</p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Other Events Section */}
        <div className="events-section">
          <h2 className="section-title">Other Events</h2>
          <div className="other-events-grid">

            <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/vsli.png" alt="Quiz Quest" />
                </div>
                <div className="event-back">
                  <p>Demo session on VLSI design using Xilinx Vivado and Zynq hardware by an industrial expert from Craftronics India Pvt Ltd, Hyderabad</p>
                </div>
              </div>
              
              
            </div>

            <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/hackatron.png" alt="Dot Dash" />
                </div>
                <div className="event-back">
                  <p>A 36-hour hackathon conducted as part of Yantra’24 along three tracks: FPGA, IoT Solutions and Embedded Systems</p>
                </div>
              </div>
              
              
            </div>

            <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/cybersec.png" alt="VLSI Design" />
                </div>
                <div className="event-back">
                  <p>An insightful session on the introduction to the fundamentals of Machine Learning (ML) and its types with various algorithms</p>
                </div>
              </div>
              </div>
              
              <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/quiz_quest.png" alt="VLSI Design" />
                </div>
                <div className="event-back">
                  <p>A quiz competition organized as part of “VIT Quality Week 2024” which was themed on “Quality - Realizing Your Competitive Potential</p>
                </div>
              </div>
              </div>
              
              <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/DOT_DASH.png" alt="VLSI Design" />
                </div>
                <div className="event-back">
                  <p>A series of online quizzes held during summer to keep the students updated with their knowledge on latest trends in communication technologies</p>
                </div>
              </div>
              </div>

               <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/mind_machine.png" alt="VLSI Design" />
                </div>
                <div className="event-back">
                  <p>Session on the Brain Computer Interface (BCI) and it’s applications with
hands-on experience to the participants</p>
                </div>
              </div>
              </div>

               <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/visionary_forces.png" alt="VLSI Design" />
                </div>
                <div className="event-back">
                  <p>Debate session focusing on the roles of innovators and leaders in the field of technology and management and their impact</p>
                </div>
              </div>
              </div>

               <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/outoftank.png" alt="VLSI Design" />
                </div>
                <div className="event-back">
                  <p>An idea pitching event inclusive of a panel of members with fake investments and concepts being tested</p>
                </div>
              </div>
              </div>

               <div className="event-card"ref={cardRef}>
              <div className="event-section">
                <div className="event-front">
                  <img src="/Events/connectron.png" alt="VLSI Design" />
                </div>
                <div className="event-back">
                  <p>A 36-hour hackathon conducted as part of Yantra’25 along four tracks: Web development, AI/ML, IoT  and Embedded Systems</p>
                </div>
              </div>
              </div>
              </div>
              
              <div className='sponsors'>
                  <h1 className='events-title'>Our Previous Sponsors</h1>
                  {/* <hr></hr> */}
                  <div className='flagship-events-grid'>

                    <div className='sponsor-card'>
                      <img src='atticafe.png' alt='sp1'/>
                      <p>ATTI CAFE</p>
                    </div>

                    <div className='sponsor-card'>
                      <img src='Dview.png' alt='sp2'/>
                      <p>DVIEW</p>
                    </div>

                  </div>
              </div>

        </div>
      </div>
    </div>
  );
}


export default Events;

