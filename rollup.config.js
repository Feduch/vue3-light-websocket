import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'

export default [
  {
    input: 'src/Main.js',
    output: {
      file: 'dist/Vue3LightWebSocket.module.js',
      name: 'Vue3LightWebSocket',
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
      file: 'dist/Vue3LightWebSocket.js',
      name: 'Vue3LightWebSocket',
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
