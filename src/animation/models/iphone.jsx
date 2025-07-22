import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const IphoneModel = () => {
  const gltf = useLoader(GLTFLoader, "/models/Iphone14.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/"); 
    dracoLoader.setDecoderConfig({ type: "wasm" });
    loader.setDRACOLoader(dracoLoader);
  });

  return <primitive object={gltf.scene} scale={10} />;
};

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
