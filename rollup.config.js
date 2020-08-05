import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    format: 'es',
    file: `./dist/index.js`,
  },
  plugins: [typescript()],
};
