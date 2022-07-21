<template>
  <div class="container">
    <h2 class="people-name">{{ people.name }}</h2>
    <div class="people-info">
      <p>Пол: {{ people.gender }}</p>
      <p>Дата рождения: {{ people.birth_year }}</p>
      <p>Рост: {{ people.height }}</p>
      <p>Вес: {{ people.mass }}</p>
      <p>Цвет волос: {{ people.hair_color }}</p>
      <p>Цвет кожи: {{ people.skin_color }}</p>
      <p>Цвет глаз: {{ people.eye_color }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['people']
});
</script>

<style>
.container {
  border: 1px solid #eee;
  box-shadow: 2px 2px 10px rgb(115, 112, 176);
  min-height: 210px;
  text-decoration: none;
  padding: 0px 8px;
  border-radius: 10px;
}

.people-name {
  margin: 8px 0;
  text-align: center;
  font-size: 20px;
}

.people-info {
  padding: 8px 0;
  display: flex;
  row-gap: 8px;
  flex-direction: column;
}
</style>
