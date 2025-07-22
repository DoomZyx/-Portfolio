/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useRef, useEffect } from "react";
import * as THREE from "three";

useGLTF.preload("/models/holo_shapeshifter.glb");

function Shapeshifter({ path }) {
  const { scene } = useGLTF(path, true, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/"); // chemin du dossier draco dans public
    loader.setDRACOLoader(dracoLoader);
  });
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
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 2]} />
      <Shapeshifter path="/models/holo_shapeshifter.glb" />
    </Canvas>
  );
}
