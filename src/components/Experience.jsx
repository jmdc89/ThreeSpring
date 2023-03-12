import { ContactShadows, OrbitControls } from "@react-three/drei";

import { Carousel } from "./Carousel";

import * as THREE from "three"
import {Noise, Depth, LayerMaterial} from "lamina";

const Background = () => {
  return (
    <mesh scale={100}>
      <sphereGeometry args={[1,64,64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorA="#f21a62"
          colorB="#0081fc"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={100}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.42}
        />
      </LayerMaterial>
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
