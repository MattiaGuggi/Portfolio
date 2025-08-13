'use client'
import { useEffect, useRef } from "react"
import MartialArtistModel from "./MartiaArtistModel"

const AnimatedModel = () => {
  const groupRef = useRef<any>(null);
  const modelRef = useRef<any>(null);

  useEffect(() => {
    if (!groupRef.current || !modelRef.current) return;

    const duration = modelRef.current.getAnimationDuration();

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: "#about",
        start: "center-=200 center",
        end: "bottom-=200 center",
        scrub: true,
        markers: true,
        onUpdate: (self) => {
            modelRef.current.setAnimationTime(duration * self.progress);
        },
        },
    });

    tl.fromTo(
        groupRef.current.position,
        { x: 1.3, y: 0 },
        { x: -1.25, y: -1 }
    ).to(groupRef.current.rotation, { y: Math.PI }, "<");

    // ✅ Return a proper cleanup function
    return () => {
        tl.kill(); // this stops the timeline and removes ScrollTrigger
    };
    }, []);

  return (
    <group ref={groupRef} position={[2, 0, 0]} rotation={[0, 0, 0]}>
      <MartialArtistModel ref={modelRef} scale={0.35} />
    </group>
  )
}

export default AnimatedModel
