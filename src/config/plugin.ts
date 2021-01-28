import { EggPlugin } from 'egg';
export default {
  static: false, // default is true
  redis: {
    enable: false,
    package: 'egg-redis',
  }
} as EggPlugin;
