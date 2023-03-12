import { ContactShadows, OrbitControls } from "@react-three/drei";

import { Carousel } from "./Carousel";

import * as THREE from "three"

const Background = () => {
  return (
    <mesh scale={100}>
      <sphereGeometry args={[1,64,64]} />
      <meshBasicMaterial color={"red"} side={THREE.BackSide} />
    </mesh>
  )
}

export const Experience = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 20, 20]} intensity={1} />

      <Carousel />
      <ContactShadows scale={30} opacity={0.32} />
    
      <Background />
    </>
  );
};
