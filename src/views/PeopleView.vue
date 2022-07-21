<template>
  <router-link to="/">На главную</router-link>
  <h1 class="planet-name">
    Список всех персонажей на планете {{ currentPlanetName }}
  </h1>
  <label class="gender-label">
    Выберите пол персонажа:
    <select v-model="chosenGender">
      <option value="all">Любой</option>
      <option value="male">Мужской</option>
      <option value="female">Женский</option>
      <option value="unknown">Неизвестный</option>
      <option value="n/a">Не имеет пола</option>
    </select>
  </label>

  <div class="people" v-if="getPeopleInCurrentPlanet.length !== 0">
    <people-cards
      v-for="people in getPeopleInCurrentPlanet"
      :key="people.name"
      :people="people"
    ></people-cards>
  </div>
  <p v-else>Персонажей не найдено!</p>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';
import PeopleCards from '@/components/PeopleCards.vue';
import { Peoples, Planets } from '@/api/types';

export default defineComponent({
  props: ['planets'],
  components: { PeopleCards },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore(key);

    const currentPlanetName = ref(route.params.planetName);
    const chosenGender = ref('all');

    const getCurrentPlanetArray = computed(() => {
      const planets = store.getters.getPlanets as Planets;

      const currentPlanetArray = planets.results.filter(
        (planet) => planet.name === currentPlanetName.value
      );

      return currentPlanetArray;
    });

    if (getCurrentPlanetArray.value.length === 0) {
      router.push('/mock');
    }

    const getPeopleInCurrentPlanet = computed(() => {
      const people = store.getters.getPeople as Peoples;
      const currentPlanet = getCurrentPlanetArray.value[0];

      const peopleInCurrentPlanet = currentPlanet.residents
        .map((url) => people.results.filter((p) => p.url === url))
        .flat()
        .filter((p) =>
          chosenGender.value === 'all' ? true : p.gender === chosenGender.value
        );

      return peopleInCurrentPlanet;
    });

    return { getPeopleInCurrentPlanet, chosenGender, currentPlanetName };
  }
});
</script>

<style>
.people {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.planet-name {
  text-align: center;
}

.gender-label {
  display: inline-block;
  margin: 12px 0;
}
</style>
