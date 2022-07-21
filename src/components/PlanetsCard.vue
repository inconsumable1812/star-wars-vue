<template>
  <router-link class="link" :to="`/people/${planet.name}`">
    <div class="container">
      <h2 class="planet-name">{{ planet.name }}</h2>
      <div class="planet-info">
        <p>Диаметр: {{ planet.diameter }}</p>
        <p>Гравитация: {{ planet.gravity }}</p>
        <p>Климат: {{ planet.climate }}</p>
        <p>Поверхность: {{ planet.terrain }}</p>
        <p>Орбитальный период: {{ planet.orbital_period }}</p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { Planet } from '@/api/types';

export default defineComponent({
  props: {
    planet: {
      type: Object as PropType<Planet>,
      required: true
    }
  }
});
</script>

<style>
.link {
  color: inherit;
  text-decoration: none;
}
.container {
  border: 1px solid #eee;
  box-shadow: 2px 2px 10px rgb(115, 112, 176);
  min-height: 220px;
  text-decoration: none;
  padding: 0px 8px;
  border-radius: 10px;
}
.planet-name {
  margin: 8px 0;
  text-align: center;
  font-size: 20px;
}

.planet-info {
  padding: 8px 0;
  display: flex;
  row-gap: 8px;
  flex-direction: column;
}
</style>
