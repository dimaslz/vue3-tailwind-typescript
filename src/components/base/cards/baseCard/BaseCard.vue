<template>
  <div
    class="hoverable-card max-w-sm rounded shadow-lg bg-white rounded-md py-6 px-4 mb-7"
    :style="{ height: cardHeight }"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
  props: {
    cardHeight: {
      type: String,
      required: true,
    },
  },
});
</script>
