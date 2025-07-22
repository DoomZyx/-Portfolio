/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// Ajout du décodeur Draco
useGLTF.preload("/models/2018_porsche_911_carrera_gts.glb");

function Porsche({ path }) {
  const { scene } = useGLTF(path, true, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/"); // chemin du dossier draco dans public
    loader.setDRACOLoader(dracoLoader);
  });

  return <primitive object={scene} scale={40} />; // Scale ajusté
}

export default function PorscheViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls
        target={[0, 0.3, 0]}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={1}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
      <Porsche path="/models/2018_porsche_911_carrera_gts.glb" />
    </Canvas>
  );
}

