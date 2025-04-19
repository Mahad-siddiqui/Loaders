type Size = 'sm' | 'md' | 'lg';
type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning';

interface LoadingProps {
  size?: Size;
  color?: Color;
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
};

const colorClasses = {
  primary: 'from-blue-400 to-blue-600 border-blue-500 text-blue-500',
  secondary: 'from-purple-400 to-purple-600 border-purple-500 text-purple-500',
  success: 'from-emerald-400 to-emerald-600 border-emerald-500 text-emerald-500',
  error: 'from-rose-400 to-rose-600 border-rose-500 text-rose-500',
  warning: 'from-amber-400 to-amber-600 border-amber-500 text-amber-500',
};

const keyframes = `
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes circularDotsRotate {
    0% { opacity: 0.3; transform: rotate(0deg) translateY(-150%); }
    50% { opacity: 1; }
    100% { opacity: 0.3; transform: rotate(360deg) translateY(-150%); }
  }

  @keyframes infinityRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes waveCircle {
    0% { transform: scale(0.5); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  @keyframes orbit {
    0% { transform: rotate(0deg) translateX(150%) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(150%) rotate(-360deg); }
  }

  @keyframes cascade {
    0%, 100% { transform: scaleY(0.5); opacity: 0.2; }
    50% { transform: scaleY(1); opacity: 1; }
  }

  @keyframes squares {
    0%, 100% { transform: scale(0.5); opacity: 0.2; }
    50% { transform: scale(1); opacity: 1; }
  }

  @keyframes helix {
    0% { opacity: 0.3; transform: rotate(0deg) translateY(-150%) scale(0.5); }
    50% { opacity: 1; transform: rotate(180deg) translateY(-150%) scale(1); }
    100% { opacity: 0.3; transform: rotate(360deg) translateY(-150%) scale(0.5); }
  }

  @keyframes pulse {
    0% { transform: scale(0.5); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  @keyframes atomX {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
  }

  @keyframes atomY {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }

  @keyframes firework {
    0% { transform-origin: 50% 100%; transform: scale(0) rotate(0deg); opacity: 0; }
    50% { transform-origin: 50% 100%; transform: scale(1) rotate(45deg); opacity: 1; }
    100% { transform-origin: 50% 100%; transform: scale(0) rotate(90deg); opacity: 0; }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-100%); }
  }

  @keyframes spiral {
    0% { transform: rotate(0deg) translateX(0) scale(1); }
    100% { transform: rotate(360deg) translateX(100%) scale(0); }
  }

  @keyframes dna {
    0%, 100% { transform: translateY(-50%) scaleX(0.5); }
    50% { transform: translateY(50%) scaleX(1); }
  }

  @keyframes matrix {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(100%); opacity: 0; }
  }

  @keyframes galaxy {
    0% { transform: rotate(0deg) translateX(0) scale(1); }
    50% { transform: rotate(180deg) translateX(50%) scale(0.5); }
    100% { transform: rotate(360deg) translateX(0) scale(1); }
  }

  @keyframes quantum {
    0% { transform: rotate(0deg) scale(1); filter: hue-rotate(0deg); }
    100% { transform: rotate(360deg) scale(1); filter: hue-rotate(360deg); }
  }

  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  @keyframes stardust {
    0% { transform: rotate(0deg) translateX(0) scale(1); opacity: 1; }
    100% { transform: rotate(360deg) translateX(100%) scale(0); opacity: 0; }
  }

  @keyframes cube3d {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }

  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes radar {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes clock {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes hourglass {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
  }

  @keyframes windmill {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
      @keyframes progress {
    0% { stroke-dashoffset: 283; }
    100% { stroke-dashoffset: 0; }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = keyframes;
document.head.appendChild(styleSheet);

export const ClassicSpinner = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div
      className={`rounded-full border-4 border-t-transparent ${colorClasses[color].split(' ')[2]} ${sizeClasses[size]}`}
      style={{ animation: 'spinner 1s linear infinite' }}
    />
  </div>
);

export const CircularDots = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
          style={{
            animation: 'circularDotsRotate 1.5s linear infinite',
            animationDelay: `${-i * 0.17}s`,
            transform: `rotate(${i * 45}deg) translateY(-150%)`,
          }}
        />
      ))}
    </div>
  </div>
);

// export const Infinity = ({ size = 'md', color = 'primary' }: LoadingProps) => (
//   <div className="flex justify-center items-center">
//     <div
//       className={`relative ${sizeClasses[size]}`}
//       style={{ animation: 'infinityRotate 3s linear infinite' }}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} rounded-full`}
//         style={{ clipPath: 'path("M12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13")' }}>
//       </div>
//       <div className={`absolute inset-0 bg-gradient-to-l ${colorClasses[color]} rounded-full`}
//         style={{ clipPath: 'path("M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13")' }}>
//       </div>
//     </div>
//   </div>
// );
export const Infinity = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div
      className={`relative ${sizeClasses[size]} border-4 ${colorClasses[color].split(' ')[2]}`}
      style={{
        animation: 'infinityRotate 2s linear infinite',
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
      }}
    />
  </div>
);
export const WaveCircle = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 rounded-full
            border-2 ${colorClasses[color].split(' ')[2]}
            opacity-0
          `}
          style={{
            animation: 'waveCircle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} rounded-full opacity-50`} />
    </div>
  </div>
);


export const Orbit = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
          style={{
            animation: 'orbit 2s linear infinite',
            animationDelay: `${-i * 0.5}s`,
          }}
        />
      ))}
    </div>
  </div>
);
export const Cascade = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center gap-1">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className={`w-2 h-8 bg-gradient-to-b ${colorClasses[color]} rounded-full`}
        style={{
          animation: 'cascade 1s ease-in-out infinite',
          animationDelay: `${i * 0.1}s`,
        }}
      />
    ))}
  </div>
);


export const Squares = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`grid grid-cols-3 gap-1 ${sizeClasses[size]}`}>
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`aspect-square bg-gradient-to-br ${colorClasses[color]} rounded-sm`}
          style={{
            animation: 'squares 1.5s ease-in-out infinite',
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  </div>
);


export const Helix = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
          style={{
            animation: 'helix 2s ease-in-out infinite',
            animationDelay: `${i * 0.3}s`,
            transform: `rotate(${i * 60}deg) translateY(-150%)`,
          }}
        />
      ))}
    </div>
  </div>
);


export const Pulse = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
        style={{ animation: 'pulse 1.5s ease-in-out infinite' }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
        style={{ animation: 'pulse 1.5s ease-in-out infinite', animationDelay: '0.75s' }}
      />
    </div>
  </div>
);


export const Atoms = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      <div
        className={`absolute inset-0 border-2 ${colorClasses[color].split(' ')[2]} rounded-full`}
        style={{ animation: 'atomX 3s linear infinite' }}
      />
      <div
        className={`absolute inset-0 border-2 ${colorClasses[color].split(' ')[2]} rounded-full`}
        style={{ animation: 'atomY 3s linear infinite' }}
      />
      <div className={`absolute inset-[25%] bg-gradient-to-br ${colorClasses[color]} rounded-full`} />
    </div>
  </div>
);

export const Firework = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-4 bg-gradient-to-br ${colorClasses[color]}`}
          style={{
            animation: 'firework 1.5s ease-in-out infinite',
            transform: `rotate(${i * 30}deg)`,
            transformOrigin: '50% 100%',
          }}
        />
      ))}
    </div>
  </div>
);

export const BouncingDots = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center gap-2">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className={`w-3 h-3 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
        style={{
          animation: 'bounce 0.6s ease-in-out infinite',
          animationDelay: `${i * 0.15}s`,
        }}
      />
    ))}
  </div>
);


export const SpiralDots = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-5 h-5 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
          style={{
            animation: 'spiral 2s linear infinite',
            animationDelay: `${-i * 0.15}s`,
            transform: `rotate(${i * 30}deg)`,
          }}
        />
      ))}
    </div>
  </div>
);

export const DNAHelix = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center gap-1">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className={`w-1.5 h-6 bg-gradient-to-b ${colorClasses[color]} rounded-full`}
        style={{
          animation: 'dna 1s ease-in-out infinite',
          animationDelay: `${i * 0.1}s`,
        }}
      />
    ))}
  </div>
);

export const MatrixRain = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center gap-1">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className={`w-1 h-8 bg-gradient-to-b ${colorClasses[color]}`}
        style={{
          animation: 'matrix 1.5s linear infinite',
          animationDelay: `${i * 0.2}s`,
        }}
      />
    ))}
  </div>
);

export const GalaxySpinner = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
          style={{
            animation: 'galaxy 3s linear infinite',
            animationDelay: `${-i * 0.2}s`,
            transform: `rotate(${i * 22.5}deg) translateX(100%)`,
          }}
        />
      ))}
    </div>
  </div>
);


export const QuantumSpinner = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`absolute inset-0 border-4 ${colorClasses[color].split(' ')[2]} rounded-full`}
          style={{
            animation: `${i % 2 ? 'atomX' : 'atomY'} ${2 + i}s linear infinite`,
            opacity: 1 - i * 0.2,
          }}
        />
      ))}
    </div>
  </div>
);

export const RippleEffect = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`absolute inset-0 border-4 ${colorClasses[color].split(' ')[2]} rounded-full`}
          style={{
            animation: 'ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
            animationDelay: `${-i * 0.5}s`,
          }}
        />
      ))}
    </div>
  </div>
);



export const HeartbeatLoader = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div
      className={`${sizeClasses[size]} bg-gradient-to-br ${colorClasses[color]}`}
      style={{
        animation: 'heartbeat 1s ease-in-out infinite',
        clipPath: 'path("M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402")',
      }}
    />
  </div>
);

export const StardustTrail = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-5 h-5 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
          style={{
            animation: 'stardust 2s linear infinite',
            animationDelay: `${-i * 0.1}s`,
            transform: `rotate(${i * 18}deg)`,
          }}
        />
      ))}
    </div>
  </div>
);


export const Cube3D = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div
      className={`relative ${sizeClasses[size]} preserve-3d`}
      style={{ animation: 'cube3d 3s linear infinite' }}
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-80`}
          style={{
            transform: `rotate${i < 4 ? 'Y' : 'X'}(${i < 4 ? i * 90 : i === 4 ? 90 : -90}deg) translateZ(${parseInt(sizeClasses[size].split('h-')[1]) / 2}px)`,
          }}
        />
      ))}
    </div>
  </div>
);

export const RadarScan = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      <div className={`absolute inset-0 rounded-full border-2 ${colorClasses[color].split(' ')[2]} opacity-20`} />
      <div
        className={`absolute h-1/2 w-1 bg-gradient-to-b ${colorClasses[color]} origin-bottom`}
        style={{
          animation: 'radar 2s linear infinite',
          left: '50%',
          transformOrigin: 'bottom',
        }}
      />
    </div>
  </div>
);

export const ClockLoader = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      <div className={`absolute inset-0 rounded-full border-2 ${colorClasses[color].split(' ')[2]}`} />
      <div
        className={`absolute h-1/2 w-1 bg-gradient-to-b ${colorClasses[color]} rounded-full`}
        style={{
          animation: 'clock 12s linear infinite',
          left: '50%',
          transformOrigin: 'bottom',
        }}
      />
      <div
        className={`absolute h-1/3 w-1 bg-gradient-to-b ${colorClasses[color]} rounded-full`}
        style={{
          animation: 'clock 1s linear infinite',
          left: '50%',
          transformOrigin: 'bottom',
        }}
      />
    </div>
  </div>
);

export const Hourglass = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div
      className={`relative ${sizeClasses[size]} border-4 ${colorClasses[color].split(' ')[2]}`}
      style={{
        animation: 'hourglass 2s ease-in-out infinite',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)',
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${colorClasses[color]} opacity-50`} />
    </div>
  </div>
);

export const Windmill = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-1/2 bg-gradient-to-b ${colorClasses[color]}`}
          style={{
            animation: 'windmill 2s linear infinite',
            transform: `rotate(${i * 90}deg)`,
            transformOrigin: 'bottom',
            left: 'calc(50% - 4px)',
          }}
        />
      ))}
    </div>
  </div>
);

export const CircularProgress = ({ size = 'md', color = 'primary' }: LoadingProps) => (
  <div className="flex justify-center items-center">
    <svg className={sizeClasses[size]} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        strokeWidth="8"
        className={`${colorClasses[color].split(' ')[2]} opacity-20`}
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        strokeWidth="8"
        className={`${colorClasses[color].split(' ')[2]}`}
        strokeDasharray="283"
        strokeDashoffset="283"
        style={{
          animation: 'spinner 1.4s ease-in-out infinite',
          transformOrigin: 'center',
          strokeLinecap: 'round',
        }}
      />
    </svg>
  </div>
  
);