<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

export default {
  name: 'App',
  mounted() {
    const appElement: HTMLElement | null = document.getElementById('app');
    const height = document.documentElement.clientHeight + 'px';
    if (appElement) appElement.style.height = height;
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
