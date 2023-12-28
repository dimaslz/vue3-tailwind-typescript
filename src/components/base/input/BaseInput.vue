<template>
  <input
    :type="type"
    :value="modelValue"
    @input="updateValue($event.target.value)"
    :id="label"
    :placeholder="placeholder"
    :class="[
      'bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5',
      isInvalid ? 'border-custom-error text-custom-error' : 'border-gray-300',
    ]"
    required
  />
  <p v-if="isInvalid" class="text-custom-error text-xs mt-1">Invalid input!</p>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const { label, placeholder, modelValue } = defineProps<{
  type: string;
  label: string;
  placeholder?: string;
  modelValue: string; // using modelValue for v-model binding
}>();

const emit = defineEmits(["update:modelValue"]);

const isInvalid = ref(false); // State to track validity

function updateValue(value: string) {
  // Validate the input
  if (value.length < 3) {
    isInvalid.value = true;
  } else {
    isInvalid.value = false;
  }

  // Emit the input value to update the v-model binding
  emit("update:modelValue", value);
}
</script>
