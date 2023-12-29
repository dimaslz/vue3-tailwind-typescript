<template>
  <div
    :class="[
      'fixed top-14 z-50 h-14 flex items-center justify-between transition-width',
      isFullWidth ? 'container w-full' : 'w-1/2',
    ]"
  >
    <!-- AppBar contents-->
    <div
      class="bg-white px-4 shadow-md h-full flex items-center rounded-full justify-between w-full"
    >
      <div class="flex">
        <InteractiveCircle
          :outerSize="35"
          :innerSize="12"
          :borderThickness="6"
        />
        <span class="custom-font font-bold pt-1 pl-1 text-xl"
          >knowleducation</span
        >
      </div>

      <div class="text-gray-400">
        <button>Courses</button>
        <button class="mx-4">Contact Us</button>
        <button>Lorem</button>
      </div>

      <div>
        <BaseButton>Contact Us</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from "vue";
import InteractiveCircle from "./InteractiveCircle.vue";

/**
 * AppBar component used to navigate between different sections of the application.
 * It can adjust its width based on the scroll position.
 *
 * @component
 */

export default defineComponent({
  name: "AppBar",
  components: {
    InteractiveCircle,
  },

  setup() {
    /**
     * Boolean ref that indicates if the AppBar should be displayed in full width.
     * It becomes true when the window is scrolled past a certain threshold.
     */
    const isFullWidth = ref(false);

    /**
     * Handle the scroll event and determine if AppBar should switch to full width.
     */
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      isFullWidth.value = scrollTop > 400;
    };

    /**
     * Add scroll event listener on mount
     */
    window.addEventListener("scroll", handleScroll);

    /**
     * Clean up the event listener on unmount
     */
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { isFullWidth };
  },
});
</script>

<style scoped>
.transition-width {
  transition: width 0.3s ease;
}
</style>
