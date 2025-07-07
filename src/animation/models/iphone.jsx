import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function IphoneModel() {
  const { scene } = useGLTF("/models/Iphone14.glb"); // ton fichier glb dans public/
  return <primitive object={scene} scale={9} />;
}

export default function IphoneViewer() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      style={{ width: "100%", height: "auto" }}
    >
      {/* Lumières */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      {/* Modele */}
      <IphoneModel />
      {/* Controles */}
      <OrbitControls
        target={[0, 0.7, 0]}
        enableZoom={false} // désactive le zoom
        enablePan={false} // désactive le drag latéral
        rotateSpeed={1} // sensibilité rotation
        maxPolarAngle={Math.PI / 1.8} // limite la rotation verticale
        minPolarAngle={Math.PI / 3} // limite la rotation verticale
      />
    </Canvas>
  );
}
