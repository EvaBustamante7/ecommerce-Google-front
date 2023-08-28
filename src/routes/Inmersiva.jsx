import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, MapControls } from '@react-three/drei'
import { Gallery } from '../components/galery/galery'
import { Floor } from '../components/galery/floor'

import '../components/galery/style.css'
import { Object1 } from '../components/galery/object1'

function Inmersiva() {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ near: 0.1, far: 1000, fov: 60, position: [-6, 1.5, 0] }}
      >
        <group>
          <Gallery />
          
          <Floor />

        </group>
        
          <Object1 position={[0, 0, 0]} scale={[1, 1, 1]} />
       




        <ambientLight intensity={0.3} />
        <Environment
          path={process.env.PUBLIC_URL + 'textures/'}
          files="noon_grass_1k.hdr"
        />
        <OrbitControls makeDefault />
      </Canvas>
    </Suspense>
  )
}

export default Inmersiva
