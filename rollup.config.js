import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'

export default [
  {
    input: 'src/Main.js',
    output: {
      file: 'dist/VueLightWebSocket.module.js',
      name: 'VueLightWebSocket',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      minify({})
    ]
  },
  {
    input: 'src/Main.js',
    output: {
      file: 'dist/VueLightWebSocket.js',
      name: 'VueLightWebSocket',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      minify({})
    ]
  }
]
