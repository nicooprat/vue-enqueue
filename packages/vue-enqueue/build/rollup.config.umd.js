import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-enqueue',
    file: 'dist/vue-enqueue.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
