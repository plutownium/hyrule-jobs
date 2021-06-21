/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 6/20 issue: 
// https://stackoverflow.com/questions/62216862/error-in-vue3-argument-of-type-typeof-import-dist-vue-is-not-assignabl
// does nothing.