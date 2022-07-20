<template>
  <router-link class="link" :to="`/people/${planet.name}`">
    <div class="container">
      <h2 class="planet-name">{{ planet.name }}</h2>
      <div class="planet-info">
        <p>Диаметр:</p>
        <p>Гравитация:</p>
        <p>Климат:</p>
        <p>Поверхность:</p>
        <p>Орбитальный период:</p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['planet']
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
