import { MoveDirection, OutMode } from 'tsparticles-engine';

export const particles = {
  background: {
    color: {
      value: '#00000000',
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: '#f4ecfc',
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.bounce,
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};
