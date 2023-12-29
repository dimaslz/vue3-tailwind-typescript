<template>
  <BaseCard cardHeight="170px" class="flex">
    <div class="flex mx-auto items-center z-20">
      <div class="card-number">{{ titleNumber }}</div>
      <div class="circle-background">
        <img
          class="shake-image mb-14 h-18 w-12"
          :src="require(`@/assets/images/${imageName}.png`)"
          alt="card image"
          style="transition: transform 0.2s ease-in-out"
        />
      </div>
      <div class="ml-8">
        <div class="custom-font text-xl">{{ cardTitle }}</div>
        <p class="text-gray-400 text-base pt-2">{{ cardText }}</p>
      </div>
    </div>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HoverableCard",
  props: {
    titleNumber: String,
    imageName: String,
    cardTitle: String,
    cardText: String,
  },
});
</script>

<style lang="scss" scoped>
.hoverable-card {
  transition: transform 1s ease-in-out;
  position: relative;
  &:hover {
    .shake-image {
      transform: rotate(-10deg);
    }
  }

  .card-number {
    color: #f1f5f9;
    font-size: 4em;
    font-weight: 700;
    transform: rotate(50deg);
    position: absolute;
    right: 0px;
    top: 5px;
    z-index: -1;
  }
  .circle-background {
    width: 90px;
    height: 90px;
    background-color: #fef3c7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
