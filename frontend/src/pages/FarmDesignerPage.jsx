import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";
import { Experience } from "../components/Experience";
import { SocketManager } from "../components/SocketManager";
import { UI, shopModeAtom } from "../components/UI";

const FarmDesignerPage = () => {
  const [shopMode] = useAtom(shopModeAtom);
  return (
    <>
      <SocketManager />
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["#87CEEB"]} />
        <ScrollControls pages={shopMode ? 4 : 0}>
          <Experience />
        </ScrollControls>
      </Canvas>
      <UI />
    </>
  );
};

export default FarmDesignerPage;
