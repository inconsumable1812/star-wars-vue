<template>
  <div class="planets">
    <PlanetsCard
      :key="i"
      v-for="(planet, i) in getPlanets.results"
      :planet="planet"
    ></PlanetsCard>
  </div>
  <div class=""><p>Нет Планет</p></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import PlanetsCard from '@/components/PlanetsCard.vue';

export default defineComponent({
  components: { PlanetsCard },

  computed: {
    ...mapGetters(['getPlanets'])
  }
});
</script>

<style>
.planets {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
</style>
