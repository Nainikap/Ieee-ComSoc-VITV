import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import PageTransition from '../components/PageTransition';
import { Canvas } from '@react-three/fiber';
import { Satellite3D } from '../components/Satellite3D';
import { Link } from "react-router-dom";

function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <PageTransition>
      <div className="home">
        <div className="hero-section" ref={el => sectionsRef.current[0] = el}>
          <div className="title-container" st>
            <h1 className="title">IEEE Communications Society</h1>
            <div className="satellite-canvas">
              <Canvas
                camera={{
                  position: [0, 0, 15],
                  fov: 45,
                  near: 0.1,
                  far: 1000,
                }}
                style={{ background: 'transparent' }}
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Satellite3D />
              </Canvas>
            </div>
          </div>
          <h3 className="chapter"style={{color: "whitesmoke"}}>Technical Student Chapter, VIT Vellore</h3>
        </div>

        <div className="description" ref={el => sectionsRef.current[1] = el}>
          <p>
            IEEE Communications Society (IEEE ComSoc) is one of the finest technical chapters of VIT Vellore and 
            the team members contribute new ideas and information to our collective knowledge, developing 
            higher industry standards, and changing the way we all communicate, for the better. Society 
            promotes technological innovation and fosters creation and sharing of information among the global 
            technical community. The Society provides services to members for their technical and professional 
            advancement and forums for technical exchanges among professionals in academia, industry, and 
            public institutions. To bring the world together in harmony through communications and networking 
            technology research, application, education, and incubation of new ideas. Society members can 
            participate in the development and implementation of standards in the communications field in 
            areas such as network management and optical communications. The chapter consists of 200+ 
            active members who are extremely talented and result oriented students. We have conducted 
            multiple events in and out of our college and have achieved remarkable success in all the events.
          </p>
         <Link to="/about">
          <button className="know-more-btn">Know more</button></Link>
        </div>

        <div className="about-vit-section" ref={el => sectionsRef.current[2] = el}>
          <div className="about-vit-card">
            <h2 className="section-title">
              ABOUT VIT
            </h2>
            <div className="vit-image">
              <img src="/TT_photo/TT_FINAL_PHOTO_27-12-2007.jpg" alt="VIT Campus" />
            </div>
            <div className="vit-description" >
              <p style={{color: "whitesmoke"}}>
                VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. The campus has a cosmopolitan atmosphere with students from all corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students. The global standards set at VIT in the field of teaching and research spur us on in our relentless pursuit of excellence.
              </p>
              <p style={{color: "whitesmoke"}}>
                The University is headed by its founder and Chancellor, Dr. G. Viswanathan, a former Parliamentarian and Minister in the Tamil Nadu Government. In recognition of his service to India in offering world class education, he was conferred an honorary doctorate by the West Virginia University, USA.
              </p>
              <button className="know-more-btn" 
              onClick={ () => window.open("https://vit.ac.in", "blank")}>
              Know more</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;

