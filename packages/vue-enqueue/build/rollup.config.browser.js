import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueEnqueue',
    file: 'dist/vue-enqueue.min.js',
    format: 'iife',
    sourcemap: true,
  },
})

config.plugins.push(terser({}))

export default config
