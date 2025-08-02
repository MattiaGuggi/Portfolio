// App.tsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Html, useProgress } from '@react-three/drei'
import MartialArtistModel from './MartiaArtistModel'

function Loader() {
  const { progress } = useProgress()
  return <Html center>Loading {progress.toFixed(0)}%</Html>
}

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 35 }}>
      <React.Suspense fallback={<Loader />}>
        <Environment preset="sunset" />
        <MartialArtistModel position={[0, 0, 0]} scale={1.5} rotation={[0, 0, 0]} />
      </React.Suspense>
    </Canvas>
  )
}

export default Scene
