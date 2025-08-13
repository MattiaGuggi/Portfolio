import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { AnimationMixer, Group } from 'three'

interface MartialArtistModelProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

const MartialArtistModel = forwardRef<any, MartialArtistModelProps>(
  ({ position, scale, rotation }, ref) => {
    const group = useRef<Group>(null)
    const { scene, animations } = useGLTF('/model/Meshy_Merged_Animations.glb')
    const mixer = useRef<AnimationMixer>(null)

    useImperativeHandle(ref, () => ({
      setAnimationTime: (time: number) => {
        if (mixer.current && animations[0]) {
          mixer.current.setTime(time)
        }
      },
      getAnimationDuration: () => animations[0]?.duration || 0
    }))

    useEffect(() => {
      if (!group.current || !animations || animations.length === 0) return
      mixer.current = new AnimationMixer(group.current)
      const action = mixer.current.clipAction(animations[0])
      action.play()
      action.paused = true // pause automatic playback
    }, [animations])

    useFrame((state, delta) => {
      if (mixer.current) mixer.current.update(0) // only update manually via setTime
    })

    return (
      <group ref={group} position={position} rotation={rotation} dispose={null}>
        <primitive object={scene} scale={scale} />
      </group>
    )
  }
)

export default MartialArtistModel
