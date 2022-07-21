import { Store } from 'vuex';
import { Planets, Peoples } from './api/types';

declare module '@vue/runtime-core' {
  type GetData = {
    isLoading: boolean;
    error: string | null;
    planets: Planets;
    people: Peoples;
  };

  type State = GetData;

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
