import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Planet = ({ color, size, distanceFromSun, orbitalVelocity }) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += orbitalVelocity / 50;
  });

  return (
    <group ref={mesh}>
      <mesh position={[distanceFromSun / 50, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[size / 60, 32, 32]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

export default Planet;
