import React from "react";
import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallelaxBackground from "../components/ParallelaxBackground";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import Loader from "../components/Loader";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallelaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0.3, 1, 8] }}>
          <ambientLight intensity={1.3} />
          <directionalLight position={[0.2, 5.8, 5]} intensity={1.2} />
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? [0.87, 1, 1] : [0.77, 0.88 ,0.88]}
                position={isMobile ? [-0.1, -0.7, 0.1] : [1, -0.2, 0.5]}
              />
              <Rig />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
export default Hero;
