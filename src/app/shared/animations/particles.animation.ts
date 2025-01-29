import { IParticlesProps } from '@tsparticles/angular/lib/ng-particles.module';
import { IOptions, MoveDirection, OutMode } from '@tsparticles/engine';

export const particles: Partial<IParticlesProps> = {
  background: {
    color: {
      value: 'rgba(0, 0, 0, 0)',
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: '#5a80f5',
    },
    collisions: {
      enable: false,
    },
    move: {
      enable: true,
      direction: MoveDirection.none,
      outModes: {
        default: OutMode.out,
      },
      random: true,
      speed: { min: 0.3, max: 1 },
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 200,
      limit: {
        value: 500,
      },
    },
    opacity: {
      value: { min: 0.2, max: 0.7 },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 2 },
    },
    trail: {
      enable: true,
      length: 10,
      fillColor: '#5a80f5',
    },
  },
  emitters: [
    {
      position: { x: 50, y: 0 },
      rate: {
        delay: 0.5,
        quantity: 1,
      },
      size: {
        width: 100,
        height: 0,
      },
      particles: {
        move: {
          direction: MoveDirection.bottom,
          speed: { min: 2, max: 4 },
          outModes: {
            default: OutMode.out,
          },
        },
        opacity: {
          value: { min: 0.5, max: 1 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        trail: {
          enable: true,
          length: 15,
          fillColor: '#5a80f5',
        },
      },
    },
    {
      position: { x: 50, y: 0 },
      rate: {
        delay: 1,
        quantity: 2,
      },
      size: {
        width: 100,
        height: 0,
      },
      particles: {
        move: {
          direction: MoveDirection.bottom,
          speed: { min: 0.5, max: 1 },
          outModes: {
            default: OutMode.out,
          },
        },
        opacity: {
          value: { min: 0.3, max: 0.6 },
        },
        size: {
          value: { min: 2, max: 4 },
        },
        trail: {
          enable: true,
          length: 20,
          fillColor: '#5a80f5',
        },
      },
    },
  ],
  detectRetina: true,
};
