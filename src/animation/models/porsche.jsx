/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useState, useEffect, useRef } from "react";

function Porsche({ path }) {
  const { scene } = useGLTF(path, true, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    dracoLoader.setDecoderConfig({ type: "wasm" });
    loader.setDRACOLoader(dracoLoader);
  });
  return <primitive object={scene} scale={25} />;
}

export default function PorscheViewer() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ Height: "300px" }}>
      {isVisible && (
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
      )}
    </div>
  );
}
