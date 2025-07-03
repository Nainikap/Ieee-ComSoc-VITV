import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Satellite3D } from './Satellite3D';
import '../styles/DraggableSatellite.css';

function Scene() {
  return (
    <>
      <Satellite3D />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} />
      <directionalLight position={[0, 0, 10]} intensity={1.2} />
      <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.8} />
    </>
  );
}

function DraggableSatellite() {
  return (
    <div className="satellite-wrapper">
      <div className="satellite-container">
        <Canvas
          camera={{
            position: [0, 0, 20],
            fov: 45,
            near: 0.1,
            far: 2000,
          }}
          style={{ background: 'transparent' }}
        >
          <React.Suspense fallback={null}>
            <Scene />
          </React.Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default DraggableSatellite;