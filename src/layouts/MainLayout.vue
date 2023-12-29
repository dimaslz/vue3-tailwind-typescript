<template>
  <div id="main-layout">
    <AppBar />
    <!-- Your top navigation bar component -->

    <main>
      <slot />
      <!-- Reserved space where your page content will be injected -->
    </main>

    <MainFooter />
    <!-- Your main footer component -->
  </div>
</template>

<script lang="ts">
import AppBar from "@/components/AppBar.vue"; // Adjust path as necessary
import MainFooter from "@/components/MainFooter.vue"; // Adjust path as necessary

export default {
  components: {
    AppBar,
    MainFooter,
  },
};
</script>

<!-- Add your styling here if necessary -->
<style>
#main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
