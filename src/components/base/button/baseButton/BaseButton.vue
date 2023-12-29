<template>
  <button
    :class="[
      'rounded-full text-white bg-green-400 py-2 px-3 font-medium',
      buttonSize,
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    size: {
      type: String,
      default: "w-full", // Default to full width
    },
  },
  setup(props) {
    const buttonSize = computed(() => {
      // Return appropriate width class based on size prop
      switch (props.size) {
        case "small":
          return "w-20"; // Tailwind class for small width
        case "medium":
          return "w-40"; // Tailwind class for medium width
        case "large":
          return "w-60"; // Tailwind class for large width
        default:
          return props.size; // Could be 'w-full', 'w-1/2', etc.
      }
    });

    return {
      buttonSize,
    };
  },
});
</script>
