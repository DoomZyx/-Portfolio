/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Porsche({ path }) {
  const { scene } = useGLTF(path);

  return <primitive object={scene} scale={40} />;
}

export default function PorscheViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls
        target={[0, 0.3, 0]}
        enableZoom={false} // désactive le zoom
        enablePan={false} // désactive le drag latéral
        rotateSpeed={1} // sensibilité rotation
        maxPolarAngle={Math.PI / 1.8} // limite la rotation verticale
        minPolarAngle={Math.PI / 3} // limite la rotation verticale
      />
      <Porsche path="/models/2018_porsche_911_carrera_gts.glb" />
    </Canvas>
  );
}
