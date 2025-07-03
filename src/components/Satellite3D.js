import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Satellite3D() {
  const modelRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const gltf = useLoader(GLTFLoader, '/satellite_model/simple_satellite/scene.gltf');

  const scene = React.useMemo(() => {
    const clonedScene = gltf.scene.clone();
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.needsUpdate = true;
        if (child.material) {
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
          child.material.envMapIntensity = 1.5;
        }
        if (child.geometry) {
          child.geometry.center();
        }
      }
    });
    return clonedScene;
  }, [gltf]);

  React.useEffect(() => {
    if (scene) {
      scene.scale.set(0.6, 0.6, 0.6);
      scene.rotation.set(0, 0, 0);
      scene.position.set(0, 0, 0);
    }
  }, [scene]);

  // Auto-rotation only when not being dragged
  useFrame((state, delta) => {
    if (modelRef.current && !isDragging) {
      modelRef.current.rotation.y += delta * 0.3;
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    setIsDragging(false);
    e.target.releasePointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    if (isDragging && modelRef.current) {
      const movementX = e.movementX || 0;
      const movementY = e.movementY || 0;
      modelRef.current.rotation.y += movementX * 0.01;
      modelRef.current.rotation.x += movementY * 0.01;
    }
  };

  return (
    <primitive 
      ref={modelRef}
      object={scene}
      dispose={null}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    />
  );
}