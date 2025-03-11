<template>
  <div
    class="flex items-center text-purple-950 hover:text-purple-900 bg-purple-100 hover:bg-purple-200 p-4 rounded-lg cursor-pointer"
    @mouseenter="activeItem = index"
    @mouseleave="handleMouseLeave"
  >
    <svg
      class="w-5 h-5 text-purple-800 mt-0.5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
    <h2>{{ item.title }}</h2>

    <!-- Peak Overlay -->
    <Transition name="fade">
      <div
        v-if="activeItem === index"
        class="-left-72 top-24 absolute z-10 ml-4 bg-white rounded-lg shadow-xl p-5 w-72 transform transition-all duration-300 ease-in-out"
        @mouseenter="isPeakHovered = true"
        @mouseleave="isPeakHovered = false"
      >
        <div class="flex flex-col space-y-4">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-40 object-cover rounded-lg"
          />
          <h3 class="font-bold text-lg text-gray-900">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
          <button
            class="bg-purple-900 text-white py-2 px-4 rounded-xl hover:bg-purple-950 transition-colors"
          >
            Lees meer
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from "vue";

const activeItem = ref(null);
const isPeakHovered = ref(false);

defineProps({
  item: { type: Object, required: true },
  index: { type: Number, required: true }
});

const handleMouseLeave = () => {
  // Only deactivate if we're not hovering the peak overlay
  setTimeout(() => {
    if (!isPeakHovered.value) {
      activeItem.value = null;
    }
  }, 200);
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
