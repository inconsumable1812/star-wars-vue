<template>
  <router-link to="/">На главную</router-link>
  <h1 class="planet-name">Список всех персонажей на планете</h1>
  <label class="gender-label">
    Выберите пол персонажа:
    <select>
      <option value="all">Любой</option>
      <option value="male">Мужской</option>
      <option value="female">Женский</option>
      <option value="unknown">Неизвестный</option>
      <option value="n/a">Не имеет пола</option>
    </select>
  </label>
  <div class="people"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['planets']
});
</script>

<style>
.people {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
</style>
