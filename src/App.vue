<template>
  <main class="root">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  mounted() {
    this.fetchPeople();
  },

  methods: {
    ...mapActions(['fetchPeople'])
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.root {
  max-width: 1420px;
  margin: 0 auto;
  padding: 10px 10px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
