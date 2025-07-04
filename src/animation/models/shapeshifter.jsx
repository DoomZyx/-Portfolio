/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function Shapeshifter({ path }) {
  const { scene } = useGLTF(path);
  const pivot = useRef();

  // Centrage automatique du modèle dans le groupe pivot
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center); // Décale le modèle pour que son centre soit à l'origine
  }, [scene]);

  useFrame(() => {
    if (pivot.current) {
      pivot.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={pivot}>
      <primitive object={scene} scale={1} />
    </group>
  );
}

export default function ShapeshifterViewer() {
  return (
    <Canvas
      style={{ height: "500px", width: "900px" }}
      camera={{ position: [0, 0, 3], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Shapeshifter path="/models/holo_shapeshifter.glb" />
    </Canvas>
  );
}
