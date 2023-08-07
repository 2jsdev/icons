import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import terser from '@rollup/plugin-terser';

const config = {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
  },
  external: [/@babel\/runtime/, 'react', 'react-dom'],
  plugins: [
    typescript(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      extensions: ['.ts', '.tsx'],
    }),
    filesize(),
    terser(),
  ],
};

export default config;
