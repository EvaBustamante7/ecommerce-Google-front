import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useLayoutEffect } from 'react';

export function object2({ position, scale }) {
  const { scene: object2Scene } = useGLTF(process.env.PUBLIC_URL + 'models/object2.glb');

  useLayoutEffect(() => {
    object2Scene.traverse((object) => {
      if (object.isMesh && object.name === 'object2') {
        object.position.set(1, 1, 1); // Asigna la posición (1, 1, 1)
        object.scale.set(3, 3, 3);
      }
    });
  }, [object2Scene, position, scale]);

  return (
    <>
      {/* Render the loaded scenes */}
      <primitive object={object2Scene} />
    
    </>)
}
