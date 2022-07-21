<template>
  <main class="root">
    <div class="error" v-if="getError">Ошибка: {{ getError }}</div>
    <div class="loading" v-else-if="isLoading">
      <p class="loading-text">Загрузка...</p>
    </div>
    <router-view v-else />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  mounted() {
    this.fetchPlanets();
    this.fetchPeople();
  },
  computed: {
    ...mapGetters(['getError', 'isLoading'])
  },
  methods: {
    ...mapActions(['fetchPlanets', 'fetchPeople'])
  }
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.root {
  max-width: 1420px;
  margin: 0 auto;
  padding: 10px 10px;
}

.error {
  color: red;
}

.loading-text {
  text-align: center;
}
</style>
