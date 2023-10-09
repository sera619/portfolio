import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";


import CanvasLoader from "../Loader";
import { FrontSide, MultiplyOperation } from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={.6} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh  scale={2.75}>
      <sphereGeometry args={[1, 64, 32]} />
        
        {/* <meshStandardMaterial
          color='#84cfe6'
          polygonOffset
          polygonOffsetFactor={-5}
          
        /> */}
        
        <meshPhysicalMaterial
          color={'#00ffff'}
          emissive={'#0000a0'}
          roughness={0.09}
          metalness={0.2}
          clearcoat={0.9}
          sheenColor={'#8000ff'}
        />
        {/* <meshPhongMaterial
          envMap={envMap}
          color={'#049ef4'}
          emissive={'#00ffff'}
          shininess={30}
          side={FrontSide}
          combine={MultiplyOperation}
          reflectivity={1}

        /> */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;