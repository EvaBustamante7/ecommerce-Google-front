import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function ThreeBoxScene() {
  return (
    <div
      className='Container'
      style={{ width: '100%', height: '100vh' }}
    >
      <Canvas>
        <OrbitControls />
        <mesh position={[3, 0, 0]}>
          <boxGeometry  args={[1, 1, 1]} />
          <meshBasicMaterial color={'#ff00ff'} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry  args={[1, 1, 1]} />
          <meshBasicMaterial color={'#ff0000'} />
        </mesh> 
        <mesh position={[-3, 0, 0]}>
          <boxGeometry  args={[1, 1, 1]} />
          <meshBasicMaterial color={'#ffff00'} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default ThreeBoxScene
