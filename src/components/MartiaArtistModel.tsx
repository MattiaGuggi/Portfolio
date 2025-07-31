import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

interface MartialArtistModelProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

const MartialArtistModel = ({
  position = [0, 0, 0],
  scale = 1.5,
  rotation = [0, 0, 0],
}: MartialArtistModelProps) => {
  const group = useRef<Group>(null)
  const { scene } = useGLTF('/model/Karate_Focus.glb')

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.y += 0.003
  })

  return (
    <group ref={group} position={position} rotation={rotation} dispose={null}>
      <primitive object={scene} scale={scale} />
    </group>
  )
}

export default MartialArtistModel
