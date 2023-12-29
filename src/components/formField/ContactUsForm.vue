<template>
  <form class="mt-10" @submit.prevent="submitForm">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <BaseInputLabel label="Full name">
              <BaseInput
                v-model="form.fullName"
                label="fullName"
                placeholder="John Doe"
                type="text"
              />
            </BaseInputLabel>
          </div>

          <div>
            <BaseInputLabel label="Email address">
              <BaseInput
                v-model="form.email"
                label="email"
                placeholder="john.doe@example.com"
                type="email"
              />
            </BaseInputLabel>
          </div>
        </div>

        <div class="mb-6">
          <BaseInputLabel label="Message">
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </BaseInputLabel>
        </div>

        <BaseButton size="medium">Send</BaseButton>
      </div>

      <div class="col-span-1 icon-div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fbbf24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  fullName: "",
  email: "",
  message: "",
});

function submitForm() {
  // Handle the form submission
  console.log("Submitting form:", form.value);
}
</script>

<style lang="scss" scoped>
.icon-div {
  background-color: #fef3c7;
  padding: 4rem; /* 16px padding */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  svg {
    transform: rotate(270deg);
  }
}
</style>
