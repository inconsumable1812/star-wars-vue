/* eslint-disable no-await-in-loop */
import { fetchPlanets } from '@/api/fetchPlanets';
import { createStore } from 'vuex';

export default createStore({
  state: {
    error: null,
    planets: { count: 0, next: null, previous: null, results: [] },
    people: { count: 0, next: null, previous: null, results: [] }
  },
  getters: {
    getPlanets(state) {
      return state.planets;
    },
    getPeople(state) {
      return state.people;
    }
  },
  mutations: {
    updatePlanets(state, planets) {
      state.planets = planets;
    },
    updatePeople(state, people) {
      state.people = people;
    }
  },
  actions: {
    async fetchPeople(context) {
      const data = await fetchPlanets({ page: '1' });

      if (data instanceof globalThis.Error) {
        return Promise.reject(data);
      }
      const allPlanets = [];

      if (data.results !== undefined) {
        allPlanets.push(...data.results);
      }

      if (data.count !== undefined) {
        const allPlanetsCount = data.count;
        const planetsInOnePage = 10;

        for (
          let index = 2;
          index <= allPlanetsCount / planetsInOnePage;
          index += 1
        ) {
          const result = await fetchPlanets({ page: index.toString() });

          if (result instanceof globalThis.Error) {
            return Promise.reject(result);
          }

          if (result.results !== undefined) {
            allPlanets.push(...result.results);
          }
        }
      }

      data.results = [...allPlanets];
      context.commit('updatePlanets', data);

      return data;
    }
  },
  modules: {}
});
