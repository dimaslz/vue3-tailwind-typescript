<template>
  <div class="input-label">
    <label
      for="fullName"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
/**
 * Wrapper for form fields
 *
 * @example
 * <BaseInputLabel label="example">
 *  <BaseInut></BaseInut>
 * </BaseInputLabel>
 */
const { label } = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
