/* eslint-disable no-await-in-loop */
import { fetchPeople } from '@/api/fetchPeople';
import { fetchPlanets } from '@/api/fetchPlanets';
import { GetData, State } from 'vue';
import { Module } from 'vuex';

const getData: Module<State, GetData> = {
  state: {
    isLoading: false,
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
    },
    getError(state) {
      return state.error;
    },
    isLoading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    updatePlanets(state, planets) {
      state.planets = planets;
    },
    updatePeople(state, people) {
      state.people = people;
    },
    changeError(state, error) {
      state.error = error;
    },
    changeLoading(state, boolean) {
      state.isLoading = boolean;
    }
  },
  actions: {
    async fetchPlanets({ commit }) {
      commit('changeLoading', true);
      const data = await fetchPlanets({ page: '1' });

      if (data instanceof globalThis.Error) {
        commit('changeError', data);
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
            commit('changeError', result);
            return Promise.reject(result);
          }

          if (result.results !== undefined) {
            allPlanets.push(...result.results);
          }
        }
      }

      data.results = [...allPlanets];
      commit('updatePlanets', data);
      commit('changeLoading', false);
      return data;
    },
    async fetchPeople({ commit }) {
      commit('changeLoading', true);
      const data = await fetchPeople({ page: '1' });

      if (data instanceof globalThis.Error) {
        return Promise.reject(data);
      }
      const allPeople = [];

      if (data.results !== undefined) {
        allPeople.push(...data.results);
      }

      if (data.count !== undefined) {
        const allPeopleCount = data.count;
        const peopleInOnePage = 10;

        for (
          let index = 2;
          index <= allPeopleCount / peopleInOnePage;
          index += 1
        ) {
          const result = await fetchPeople({ page: index.toString() });

          if (result instanceof globalThis.Error) {
            return Promise.reject(result);
          }

          if (result.results !== undefined) {
            allPeople.push(...result.results);
          }
        }
      }

      data.results = [...allPeople];

      commit('updatePeople', data);
      commit('changeLoading', false);
      return data;
    }
  }
};

export default getData;
