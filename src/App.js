import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";
import Planet from "./planet.js";
import { Planets } from "./planets";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <directionalLight position={[0, 1, 0]} />
        <OrbitControls />
        {Planets.map((planet, i) => {
          return (
            <Planet
              color={planet.color}
              size={planet.size}
              distanceFromSun={planet.distanceFromSun}
              orbitalVelocity={planet.orbitalVelocity}
              key={i}
            />
          );
        })}
        <mesh scale={[0.1, 0.1, 0.1]} position={[0, 0, 0]}>
          <sphereBufferGeometry attach="geometry" args={[10, 60, 60]} />
          <meshStandardMaterial attach="material" color="yellow" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
