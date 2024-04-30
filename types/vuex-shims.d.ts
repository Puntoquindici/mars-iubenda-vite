// vuex.d.ts
import { Store } from 'vuex'
import { State } from '../src/store/IubendaStore'

declare module '@vue/runtime-core' {
  // declare your own store states

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}