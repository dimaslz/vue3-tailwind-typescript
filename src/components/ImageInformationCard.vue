<template>
  <base-card cardHeight="300px">
    <div class="w-full">
      <img
        class="w-full h-40 rounded-md"
        :src="imageSrc"
        alt="Sunset in the mountains"
      />
    </div>

    <p class="text-gray-300">{{ description }}</p>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageInformationCard",

  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
