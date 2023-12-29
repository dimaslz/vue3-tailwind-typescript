<template>
  <div
    class="outer-circle"
    :style="outerCircleStyles"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="inner-circle" :style="innerCircleStyle">
      <div class="inner-smaller-circle" v-if="innerSmallerCircle"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

/**
 * The InteractiveCircle component creates a responsive visual interaction where an inner circle moves in relation to mouse movements within an outer circle.
 *
 * @component
 * @example
 * <InteractiveCircle
 *   :outerSize="100"
 *   :innerSize="30"
 *   :borderThickness="5"
 *   :innerSmallerCircle="true"
 * />
 */

export default defineComponent({
  name: "InteractiveCircle",

  props: {
    /**
     * Size of the outer circle
     */
    outerSize: {
      type: Number,
      default: 40,
    },
    /**
     * Size of the inner circle
     */
    innerSize: {
      type: Number,
      default: 12,
    },
    /**
     * Thickness of the outer circle's border
     */
    borderThickness: {
      type: Number,
      default: 6,
    },
    /**
     * A boolean that determines if an even smaller circle
     * should be shown within the inner circle.
     * @default false
     */
    innerSmallerCircle: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    /**
     * The style object for the outer circle calculated dynamically
     * based on the component's props.
     * @returns {Object} The style object.
     */
    const outerCircleStyles = computed(() => ({
      width: `${props.outerSize}px`,
      height: `${props.outerSize}px`,
      border: `${props.borderThickness}px solid #22c55e`,
      borderRadius: "50%",
      position: "relative",
      overflow: "hidden",
    }));

    /**
     * The style object for the inner circle calculated dynamically
     * based on the component's props at initial render.
     */
    const innerCircleStyle = ref({
      transform: "translate(-50%, -50%)",
      width: `${props.innerSize}px`,
      height: `${props.innerSize}px`,
      borderRadius: "50%",
      backgroundColor: "#484848",
      position: "absolute",
      top: "60%",
      left: "70%",
      transition: "transform 0.3s ease-out",
    });

    /**
     * Handles mouse movement over the outer circle and adjusts
     * the positioning of the inner circle based on cursor location.
     *
     * @param {MouseEvent} e - The mouse move event object.
     */
    const handleMouseMove = (e: MouseEvent) => {
      const outerCircle = e.currentTarget as HTMLElement;
      const bounds = outerCircle.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      /**
       * Calculate the maximum movement range for the inner circle
       */
      const maxMovementX = (props.outerSize - props.innerSize) / 2;
      const maxMovementY = (props.outerSize - props.innerSize) / 2;

      /**
       * Calculate the movement percentage relative to the center of the outer circle
       */
      const movementXPercent = distanceX / (bounds.width / 2);
      const movementYPercent = distanceY / (bounds.height / 2);

      /**
       * Update the style to move the inner circle towards the cursor
       */
      innerCircleStyle.value = {
        ...innerCircleStyle.value, // Spread the existing properties
        transform: `translate(${maxMovementX * movementXPercent}px, ${
          maxMovementY * movementYPercent
        }px)`,
      };
    };

    /**
     * Resets the inner circle's position to the center when
     * the mouse leaves the outer circle.
     */
    const handleMouseLeave = () => {
      innerCircleStyle.value = {
        ...innerCircleStyle.value, // Maintain the same structure
        transform: "translate(-50%, -50%)",
      };
    };

    return {
      outerCircleStyles,
      innerCircleStyle,
      handleMouseMove,
      handleMouseLeave,
    };
  },
});
</script>

<style lang="scss">
.inner-circle {
  .inner-smaller-circle {
    width: 20px;
    height: 20px;
    background-color: rgba(104, 104, 104, 0.963);
    border-radius: 50%;
    position: absolute;
    bottom: 20px;
    right: 10px;
  }
}
</style>
