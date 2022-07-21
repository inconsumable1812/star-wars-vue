import { InjectionKey, State } from 'vue';
import { createStore, Store } from 'vuex';
import getDataModule from './getData';

export const key: InjectionKey<Store<State>> = Symbol('Store');

export const store = createStore({
  modules: {
    getDataModule
  }
});
