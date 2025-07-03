import '../styles/Globe3D.css';

function Globe3D() {
  return (
    <div className="globe-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background_globe/globe.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Globe3D;
