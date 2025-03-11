<template>
  <div
    class="flex items-center text-purple-950 hover:text-purple-900 bg-purple-100 hover:bg-purple-200 p-4 rounded-lg cursor-pointer relative"
    @mouseenter="handleMouseEnter"
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
        class="right-0 absolute z-40 ml-4 bg-white rounded-xl shadow-xl p-2 w-72 transform transition-all duration-300 ease-in-out h-96"
        @mouseenter="isPeakHovered = true"
        @mouseleave="isPeakHovered = false"
        :class="{ 'bottom-row': index >= 2, 'top-row': index < 2 }"
      >
        <div class="flex flex-col space-y-4">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-40 object-cover rounded-lg"
          />
          <h3 class="px-2 font-bold text-lg text-gray-900">{{ item.title }}</h3>
          <p class="px-2 text-gray-600 line-clamp-4">{{ item.description }}</p>
          <button
            class="px-2 text-purple-900 hover:text-purple-950 transition-colors text-right"
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

const props = defineProps({
  item: { type: Object, required: true },
  index: { type: Number, required: true }
});

const handleMouseEnter = () => {
  activeItem.value = props.index;
};

const handleMouseLeave = () => {
  // Only deactivate if we're not hovering the peak overlay
  setTimeout(() => {
    if (!isPeakHovered.value) {
      activeItem.value = null;
    }
  }, 50);
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.top-row {
  top: -24.5rem;
}

.bottom-row {
  @apply top-16;
}
</style>
