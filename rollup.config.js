import typescript from '@rollup/plugin-typescript';

export default {
  output: {
    format: 'es',
  },
  plugins: [typescript()],
};
