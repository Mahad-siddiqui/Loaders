// import React from 'react';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <p>Start prompting (or editing) to see magic happen :)</p>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import {
  CircularDots,
  Infinity,
  WaveCircle,
  Orbit,
  Cascade,
  Squares,
  Helix,
  Pulse,
  Atoms,
  Firework,
  BouncingDots,
  SpiralDots,
  DNAHelix,
  MatrixRain,
  GalaxySpinner,
  QuantumSpinner,
  RippleEffect,
  HeartbeatLoader,
  StardustTrail,
  Cube3D,
  ClassicSpinner,
  RadarScan,
  ClockLoader,
  Hourglass,
  Windmill,
  CircularProgress
} from './components/LoadingAnimations';

function App() {
  const animations = [
    { name: 'Classic Spinner', component: ClassicSpinner, color: 'primary' },
    { name: 'Circular Dots', component: CircularDots, color: 'secondary' },
    { name: 'Infinity', component: Infinity, color: 'success' },
    { name: 'Wave Circle', component: WaveCircle, color: 'error' },
    { name: 'Orbit', component: Orbit, color: 'warning' },
    { name: 'Cascade', component: Cascade, color: 'primary' },
    { name: 'Squares', component: Squares, color: 'secondary' },
    { name: 'Helix', component: Helix, color: 'success' },
    { name: 'Pulse', component: Pulse, color: 'error' },
    { name: 'Atoms', component: Atoms, color: 'warning' },
    { name: 'Firework', component: Firework, color: 'primary' },
    { name: 'Bouncing Dots', component: BouncingDots, color: 'secondary' },
    { name: 'Spiral Dots', component: SpiralDots, color: 'success' },
    { name: 'DNA Helix', component: DNAHelix, color: 'error' },
    { name: 'Matrix Rain', component: MatrixRain, color: 'warning' },
    { name: 'Galaxy Spinner', component: GalaxySpinner, color: 'primary' },
    { name: 'Quantum Spinner', component: QuantumSpinner, color: 'secondary' },
    { name: 'Ripple Effect', component: RippleEffect, color: 'success' },
    { name: 'Heartbeat', component: HeartbeatLoader, color: 'error' },
    { name: 'Stardust Trail', component: StardustTrail, color: 'warning' },
    { name: '3D Cube', component: Cube3D, color: 'primary' },
    { name: 'Radar Scan', component: RadarScan, color: 'secondary' },
    { name: 'Clock', component: ClockLoader, color: 'success' },
    { name: 'Hourglass', component: Hourglass, color: 'error' },
    { name: 'Windmill', component: Windmill, color: 'warning' },
    { name: 'Circular Progress', component: CircularProgress, color: 'primary' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12 tracking-tight">
          Beautiful Loading Animations
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animations.map(({ name, component: Component, color }) => (
            <section key={name} className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">{name}</h2>
              <div className="flex flex-wrap gap-8 justify-center items-center p-4">
                <Component size="lg" color={color} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;