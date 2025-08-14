import { Canvas } from '@react-three/fiber'
import { Environment, Html, useProgress } from '@react-three/drei'
import AnimatedModel from './AnimatedModel'
import React from 'react'

function Loader() {
  const { progress } = useProgress()
  return <Html className="absolute" center>Loading {progress.toFixed(0)}%</Html>
}

const Scene: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 35 }}>
        <React.Suspense fallback={<Loader />}>
          <Environment preset="sunset" />
          <AnimatedModel />
        </React.Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
