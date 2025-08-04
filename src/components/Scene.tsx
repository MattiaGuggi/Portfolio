import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, useProgress } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MartialArtistModel from './MartiaArtistModel'

gsap.registerPlugin(ScrollTrigger)

function Loader() {
  const { progress } = useProgress()
  return <Html className="absolute" center>Loading {progress.toFixed(0)}%</Html>
}

const AnimatedModel = () => {
  const groupRef = useRef<any>(null)

  useEffect(() => {
  if (!groupRef.current) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "center center",
      end: "+=1000 center",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  tl.to(groupRef.current.position, {
    x: -2,
    ease: "power2.out",
  })
  .to(groupRef.current.rotation, {
    y: Math.PI,
    ease: "power2.out",
  },"<");

  return () => {
    tl.kill();
  };
}, []);


  return (
    <group ref={groupRef} position={[2, 0, 0]} rotation={[0, 0, 0]}>
      <MartialArtistModel scale={0.35} />
    </group>
  )
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
