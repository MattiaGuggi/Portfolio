import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three'

interface MartialArtistModelProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

const MartialArtistModel = ({ position, scale, rotation }: MartialArtistModelProps) => {
  const group = useRef<Group>(null)
  const { scene } = useGLTF('/model/Karate_Focus.glb')

  return (
    <group ref={group} position={position} rotation={rotation} dispose={null}>
      <primitive object={scene} scale={scale} />
    </group>
  )
}

export default MartialArtistModel
