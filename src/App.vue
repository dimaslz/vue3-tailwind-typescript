<template>
  <div class="h-screen">
    <div class="border-t-8 border-green-500"></div>
    <div class="pt-8 pb-12 bg-gray-200">
      <div class="container w-full mt-12 mx-auto">
        <AppBar />

        <div class="grid grid-cols-3 gap-2">
          <div class="col-span-2 mt-12">
            <h1 class="custom-font text-6xl mt-6">
              learn <span class="edge-underline">EDGE</span> Cases
            </h1>
            <p class="mt-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              deleniti in vero odit, expedita tempora aut! Repellat eos, autem
              debitis excepturi qui, temporibus dolorum accusamus consequatur
              doloremque minima iure error!
            </p>

            <!-- Search bar, placed in its own div but still under the paragraph -->
            <div class="w-2/3 relative mt-8">
              <!-- Adjust margin-top as needed -->
              <input
                class="appearance-none border-gray-400 rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="what do you want to learn?"
              />
              <button
                class="bg-green-500 text-white rounded-full px-4 py-1 focus:outline-none focus:shadow-outline absolute right-2 bottom-1.5"
              >
                Search
              </button>
            </div>
          </div>
          <!-- End column 1 and 2 -->

          <!-- Column 3 for InteractiveCircle -->
          <div class="col-span-1 flex justify-end items-center">
            <InteractiveCircle
              :outerSize="330"
              :innerSize="80"
              :borderThickness="45"
              :innerSmallerCircle="true"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="py-6 bg-gray-100">
      <div class="container w-full mx-auto">
        <KnowleducationInfo />
      </div>
    </div>

    <div>
      <div class="container w-full mx-auto py-4">
        <div class="flex">
          <h2 class="custom-font text-4xl">our courses</h2>
        </div>
        <div class="grid grid-cols-3">
          <SkeletonLoader v-if="isLoading" />
          <ImageInformationCard
            v-else
            v-for="(course, index) in courses"
            :key="index"
            :image-src="course.imageSrc"
            :description="course.description"
          />
        </div>
      </div>
    </div>

    <div class="container mt-12 mx-auto">
      <h2 class="custom-font text-4xl mb-4">Need any help...?</h2>
      <base-card>
        <ContactUsForm />
      </base-card>
    </div>

    <div>
      <MainFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
// import MainLayout from "@/layouts/MainLayout.vue";
import AppBar from "@/components/AppBar.vue";
import InteractiveCircle from "@/components/InteractiveCircle.vue";
import KnowleducationInfo from "@/components/KnowleducationInfo.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import ImageInformationCard from "@/components/ImageInformationCard.vue";
import ContactUsForm from "@/components/formField/ContactUsForm.vue";
import MainFooter from "@/components/MainFooter.vue";
import makeServer from "@/mirageServer";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

interface Course {
  id: number;
  imageSrc: string;
  description: string;
}

export default defineComponent({
  name: "App",
  components: {
    AppBar,
    InteractiveCircle,
    KnowleducationInfo,
    ImageInformationCard,
    SkeletonLoader,
    ContactUsForm,
    MainFooter,
  },

  setup() {
    const isLoading = ref(true);
    const courses = ref<Course[]>([]);

    // Define a function that performs the data fetching
    const fetchCourses = async () => {
      try {
        // Simulate a network delay using setTimeout within a new Promise
        await new Promise((resolve) => setTimeout(resolve, 2000)); // waits for 2 seconds

        // Use async/await to fetch the data
        const response = await fetch("/api/courses");
        const data = await response.json();
        courses.value = data.courses;
      } catch (error) {
        console.error("Failed to load courses", error);
      } finally {
        isLoading.value = false; // Ensure isLoading is set to false after the data is fetched
      }
    };

    onMounted(() => {
      fetchCourses(); // Call this function on component mount
    });

    return { courses, isLoading };
  },
});
</script>

<style src="@/assets/css/main.css"></style>
