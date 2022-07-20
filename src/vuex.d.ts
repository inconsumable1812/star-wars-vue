import { Store } from 'vuex';
import { Planets, Peoples } from './api/types';

declare module '@vue/runtime-core' {
  interface State {
    error: string | null;
    planets: Planets;
    people: Peoples;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
