import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useLayoutEffect } from 'react';

export function Object1({ position, scale }) {
  const { scene: objectScene } = useGLTF(process.env.PUBLIC_URL + 'models/object1.glb');

  useLayoutEffect(() => {
    objectScene.traverse((object) => {
      if (object.isMesh && object.name === 'object1') {
        object.position.set(1, 1, 1); // Asigna la posición (1, 1, 1)
        object.scale.set(0.5, 0.5, 0.5);
      }
    });
  }, [objectScene, position, scale]);

  return (
    <>
      {/* Render the loaded scenes */}
      <primitive object={objectScene} />
    
    </>)
}
