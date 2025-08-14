'use client'
import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { AnimationMixer, Group, AnimationAction } from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimatedModelHandle = {
  setAnimationTime: (time: number) => void
  getAnimationDuration: () => number
}

const AnimatedModel = forwardRef<AnimatedModelHandle>((_, ref) => {
  const groupRef = useRef<Group>(null)
  const { scene, animations } = useGLTF('/model/Meshy_Merged_Animations.glb')
  const mixer = useRef<AnimationMixer | null>(null)
  const action = useRef<AnimationAction | null>(null)

  // Setup mixer + action
  useEffect(() => {
    if (!groupRef.current || !animations || animations.length === 0) return

    mixer.current = new AnimationMixer(groupRef.current)
    action.current = mixer.current.clipAction(animations[0])
    action.current.play()
    action.current.paused = true // Stop auto playback
  }, [animations])

  // Expose API to parent
  useImperativeHandle(ref, () => ({
    setAnimationTime: (time: number) => {
      if (action.current) {
        action.current.time = time
        mixer.current?.update(0) // Force update at this exact frame
      }
    },
    getAnimationDuration: () => animations[0]?.duration || 0,
  }))

  // Keep mixer alive (but don’t advance)
  useFrame(() => {
    if (mixer.current) mixer.current.update(0)
  })

  useEffect(() => {
    if (!groupRef.current || !animations.length) return
    const duration = animations[0].duration

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'center-=200 center',
        end: 'bottom-=200 center',
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          if (action.current) {
            action.current.time = duration * self.progress
            mixer.current?.update(0)
          }
        },
      },
    })

    groupRef.current.rotation.set(0, Math.PI/3, 0)

    // Move and rotate while animating
    tl.fromTo(groupRef.current.position,
      { x: 1.3, y: 0 },
      { x: -1.25, y: -1 }
    ).to(groupRef.current.rotation, { y: Math.PI * 2 }, "<")

    return () => {
      tl.kill()
    }
  }, [animations])

  return (
    <group ref={groupRef} position={[2, 0, 0]} rotation={[0, 0, 0]} dispose={null}>
      <primitive object={scene} scale={0.5} position={[-0.25, -0.3, 0]} />
    </group>
  )
})

export default AnimatedModel
