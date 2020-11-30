<template>
  <div id="nav" class="p-12">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  @apply text-gray-800 text-center antialiased;
}

#nav {
  a {
    @apply text-gray-800 font-bold;

    &.router-link-exact-active {
      @apply text-green-500;
    }
  }
}
</style>
