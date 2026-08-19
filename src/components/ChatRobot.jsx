import { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const TEXT = "#ffffff";
const TEXT_SOFT = "#d9ecff";
const ROBOT_Y = -0.42;

const AimCamera = () => {
  const camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    camera.lookAt(0, 0.2, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

const RobotMesh = ({ active }) => {
  const group = useRef();
  const leftEye = useRef();
  const rightEye = useRef();
  const antenna = useRef();
  const chest = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const speed = active ? 1.6 : 1;
    if (!group.current) return;

    group.current.position.y = ROBOT_Y + Math.sin(t * 2 * speed) * 0.04;
    group.current.rotation.y = Math.sin(t * 0.9 * speed) * 0.4;
    group.current.rotation.z = Math.sin(t * 1.1) * 0.04;

    const blink = Math.sin(t * 3.4) > 0.94 ? 0.12 : 1;
    if (leftEye.current) leftEye.current.scale.y = blink;
    if (rightEye.current) rightEye.current.scale.y = blink;

    const pulse = 0.7 + Math.sin(t * 5) * 0.5;
    if (antenna.current?.material) antenna.current.material.emissiveIntensity = pulse;
    if (chest.current?.material) chest.current.material.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.35;
  });

  return (
    <group ref={group} scale={1.38} position={[0, ROBOT_Y, 0]}>
      <mesh position={[0, 1.42, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.26, 8]} />
        <meshStandardMaterial color={TEXT_SOFT} metalness={0.35} roughness={0.35} />
      </mesh>
      <mesh ref={antenna} position={[0, 1.58, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color={TEXT} emissive={TEXT_SOFT} emissiveIntensity={1} />
      </mesh>

      <mesh position={[0, 0.88, 0]}>
        <boxGeometry args={[0.92, 0.72, 0.72]} />
        <meshStandardMaterial color={TEXT} metalness={0.25} roughness={0.4} />
      </mesh>
      <mesh position={[-0.52, 0.88, 0]}>
        <boxGeometry args={[0.11, 0.22, 0.22]} />
        <meshStandardMaterial color={TEXT_SOFT} />
      </mesh>
      <mesh position={[0.52, 0.88, 0]}>
        <boxGeometry args={[0.11, 0.22, 0.22]} />
        <meshStandardMaterial color={TEXT_SOFT} />
      </mesh>

      <mesh ref={leftEye} position={[-0.2, 0.96, 0.38]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#0e0e10" />
      </mesh>
      <mesh ref={rightEye} position={[0.2, 0.96, 0.38]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#0e0e10" />
      </mesh>
      <mesh position={[0, 0.7, 0.38]}>
        <boxGeometry args={[0.28, 0.045, 0.04]} />
        <meshStandardMaterial color="#0e0e10" />
      </mesh>

      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[0.78, 0.55, 0.52]} />
        <meshStandardMaterial color={TEXT_SOFT} metalness={0.25} roughness={0.45} />
      </mesh>
      <mesh ref={chest} position={[0, 0.28, 0.27]}>
        <circleGeometry args={[0.08, 20]} />
        <meshStandardMaterial color={TEXT} emissive={TEXT_SOFT} emissiveIntensity={0.8} />
      </mesh>

      <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, 0.28]}>
        <capsuleGeometry args={[0.07, 0.34, 4, 8]} />
        <meshStandardMaterial color={TEXT} />
      </mesh>
      <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, -0.28]}>
        <capsuleGeometry args={[0.07, 0.34, 4, 8]} />
        <meshStandardMaterial color={TEXT} />
      </mesh>

      <mesh position={[-0.18, -0.32, 0]}>
        <capsuleGeometry args={[0.08, 0.42, 4, 8]} />
        <meshStandardMaterial color={TEXT} />
      </mesh>
      <mesh position={[0.18, -0.32, 0]}>
        <capsuleGeometry args={[0.08, 0.42, 4, 8]} />
        <meshStandardMaterial color={TEXT} />
      </mesh>
      <mesh position={[-0.18, -0.58, 0.04]}>
        <boxGeometry args={[0.2, 0.08, 0.28]} />
        <meshStandardMaterial color={TEXT_SOFT} />
      </mesh>
      <mesh position={[0.18, -0.58, 0.04]}>
        <boxGeometry args={[0.2, 0.08, 0.28]} />
        <meshStandardMaterial color={TEXT_SOFT} />
      </mesh>
    </group>
  );
};

const ChatRobot = ({ active = false }) => {
  return (
    <div className="chat-robot-canvas">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0.2, 6.4], fov: 38 }}
        style={{ pointerEvents: "auto", background: "transparent", width: "100%", height: "100%" }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor(0x000000, 0);
          camera.lookAt(0, 0.2, 0);
        }}
      >
        <AimCamera />
        <ambientLight intensity={0.9} />
        <directionalLight position={[2.5, 3, 4]} intensity={1.6} />
        <pointLight position={[-2, 1.5, 2]} color="#d9ecff" intensity={0.9} />
        <RobotMesh active={active} />
      </Canvas>
    </div>
  );
};

export default ChatRobot;
