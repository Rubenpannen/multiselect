import vue from 'vue-prev-rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/Multiselect.vue',
    output: {
      file: 'dist/multiselect.vue2.js',
      format: 'esm',
    },
    plugins: [
      alias({
        entries: [
          { find: 'composition-api', replacement: '@vue/composition-api' },
        ]
      }),
      vue(),
    ],
    external: ['@vue/composition-api'],
  },
  {
    input: 'src/Multiselect.vue',
    output: {
      file: 'dist/multiselect.vue2.global.js',
      format: 'iife',
      name: 'VueformMultiselect',
      globals: {
        'vue': 'Vue',
        '@vue/composition-api': 'VueCompositionAPI',
      }
    },
    plugins: [
      alias({
        entries: [
          { find: 'composition-api', replacement: '@vue/composition-api' },
        ]
      }),
      vue(),
      terser()
    ],
    external: ['@vue/composition-api', 'vue'],
  }
]