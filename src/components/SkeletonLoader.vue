<template>
  <base-card cardHeight="300px">
    <div class="w-full animate-pulse">
      <div class="bg-gray-300 h-40"></div>
      <!-- Placeholder for the image -->
      <div class="p-4 space-y-3">
        <div class="h-4 bg-gray-200 rounded"></div>
        <!-- Placeholder for the title -->
        <div class="h-3 bg-gray-200 rounded w-5/6"></div>
        <!-- Placeholder for the description -->
      </div>
    </div>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkeletonLoader",
});
</script>
