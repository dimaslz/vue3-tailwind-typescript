<template>
  <div class="grid grid-cols-3 gap-8 py-8 items-center">
    <div class="col-span-1">
      <HoverableCard
        v-for="(item, index) in items"
        :key="index"
        :titleNumber="item.titleNumber"
        :imageName="item.imageName"
        :cardTitle="item.cardTitle"
        :cardText="item.cardText"
      />
    </div>

    <div class="col-span-2">
      <h2 class="custom-font text-4xl">
        Choose knowleducation over
        <span class="parantheses-left"></span>
        <span class="rotate-text">ALL</span>
        <span class="parantheses-right"></span>
        others...!
      </h2>
      <p class="mt-4 text-gray-400 font-normal leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        minus consectetur eum quod non repudiandae iusto voluptate recusandae.
        Sunt eos enim vitae ratione dolorum eius consequuntur officiis. Ab,
        consequatur eveniet. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis minus consectetur eum quod non repudiandae iusto
        voluptate recusandae. Sunt eos enim vitae ratione dolorum eius
        consequuntur officiis. Ab, consequatur eveniet. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Perspiciatis minus consectetur eum
        quod non repudiandae iusto voluptate recusandae. Sunt eos enim vitae
        ratione dolorum eius consequuntur officiis. Ab, consequatur eveniet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        minus consectetur eum quod non repudiandae iusto voluptate recusandae.
        Sunt eos enim vitae ratione dolorum eius consequuntur officiis. Ab,
        consequatur eveniet.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HoverableCard from "./HoverableCard.vue";

export default defineComponent({
  name: "KnowleducationInfo",
  components: {
    HoverableCard,
  },

  setup() {
    const items = ref([
      {
        titleNumber: "0th",
        imageName: "hand-0",
        cardTitle: "Zeroth reason",
        cardText: "Lorem Ipsum 0th",
      },
      {
        titleNumber: "1st",
        imageName: "hand-1",
        cardTitle: "First reason",
        cardText: "Lorem Ipsum 1st",
      },
      {
        titleNumber: "2nd",
        imageName: "hand-2",
        cardTitle: "second reason",
        cardText: "Lorem Ipsum 2nd",
      },
    ]);

    return {
      items,
    };
  },
});
</script>

<style>
.parantheses-left {
  border-radius: 0px 18px 18px 0px;
  padding: 7px;
  height: 50px;
  border-right: 6px solid #22c55e;
  display: inline-block;
  transform: rotate(45deg);
  position: relative;
  top: 35px;
  left: -25px;
}

.parantheses-right {
  border-radius: 0px 18px 18px 0px;
  padding: 7px;
  height: 50px;
  border-right: 6px solid #22c55e;
  display: inline-block;
  transform: rotate(-230deg);
  position: relative;
  top: 35px;
  left: -75px;
}

.rotate-text {
  display: inline-block;
  transform: rotate(-35deg);
  color: #22c55e;
  position: relative;
  bottom: 40px;
  left: -30px;
}
</style>
