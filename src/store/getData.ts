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
        return null;
      }
      const allPlanets = [];

      if (data.results !== undefined) {
        allPlanets.push(...data.results);
      }

      if (data.count !== undefined) {
        const allPlanetsCount = data.count;
        const planetsInOnePage = 10;
        const promisesArray = [];

        for (
          let index = 2;
          index <= allPlanetsCount / planetsInOnePage;
          index += 1
        ) {
          promisesArray.push(fetchPlanets({ page: index.toString() }));
        }
        const result = await Promise.all(promisesArray);
        result.forEach((res) => {
          if (res instanceof Error) {
            commit('changeError', data);
          } else if (res.results !== undefined) {
            allPlanets.push(...res.results);
          }
        });
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
        commit('changeError', data);
        return null;
      }
      const allPeople = [];

      if (data.results !== undefined) {
        allPeople.push(...data.results);
      }

      if (data.count !== undefined) {
        const allPeopleCount = data.count;
        const peopleInOnePage = 10;
        const promisesArray = [];
        for (
          let index = 2;
          index <= allPeopleCount / peopleInOnePage;
          index += 1
        ) {
          promisesArray.push(fetchPeople({ page: index.toString() }));
        }

        const result = await Promise.all(promisesArray);
        result.forEach((res) => {
          if (res instanceof Error) {
            commit('changeError', data);
          } else if (res.results !== undefined) {
            allPeople.push(...res.results);
          }
        });
      }

      data.results = [...allPeople];

      commit('updatePeople', data);
      commit('changeLoading', false);
      return data;
    }
  }
};

export default getData;
