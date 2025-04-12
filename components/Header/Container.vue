<template>
  <!-- Hero Section with image background and overlaid text -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
    <!-- Main content spanning 2 columns with background image -->
    <div
      class="lg:col-span-2 relative overflow-hidden min-h-[500px] flex items-center rounded-3xl border-4 border-purple-200"
    >
      <!-- Background image -->
      <img
        src="https://images.squarespace-cdn.com/content/v1/5f48f84198e489725fcd6c4b/1598626076629-7P08BW2A9EPCWMBKJ4CE/yoga_class_picture_websize.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-cover z-0"
      />

      <!-- Dark overlay for better text readability -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-white to-transparent bg-opacity-25 z-10"
      ></div>

      <!-- Content overlay -->
      <div class="relative z-20 p-8 md:p-12 text-purple-900 w-4/5 sm:w-3/5">
        <span
          class="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full mb-4"
          >Amsterdam & het Gooi</span
        >
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Kom tot rust bij School of Yoga
        </h1>
        <p class="text-lg mb-8 text-purple-800 max-w-xl">
          School of Yoga is ontstaan om mensen te laten ervaren dat yoga en
          meditatie zelfhelende technieken zijn om je geest en lichaam tot rust
          te brengen.
        </p>
      </div>
    </div>

    <!-- Third column for additional content -->
    <div
      class="bg-gradient-to-br from-purple-200 to-purple-100 p-8 rounded-3xl flex flex-col justify-center relative"
    >
      <h3 class="text-3xl font-semibold mb-4 text-purple-950">
        Emma van Kooten
      </h3>
      <p class="mt-2 text-purple-900">
        School of Yoga wordt begeleidt door mijzelf, Emma van Kooten. Ik ben
        vooral in Nepal en India opgeleid en gebruik veel traditionele yoga
        methodieken.
      </p>
      <p class="lg:mt-8 mt-4 text-purple-900">
        Stijlen waarin ik lesgeef zijn:
      </p>
      <ul class="mt-4 grid grid-cols-2 gap-1">
        <li v-for="(item, index) in items" :key="index">
          <StyleGridItems :item="item" :index="index" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import StyleGridItems from "./StyleGridItems.vue";

const items = ref([
  {
    title: "Ashtanga",
    description:
      "Een dynamische stijl met een vaste serie van houdingen. Daardoor kan je echt je aandacht naar binnen keren. Er ligt er een sterke focus op ademhaling, gerichte blik en de bandha\’s",
    image:
      "https://images.squarespace-cdn.com/content/v1/5f48f84198e489725fcd6c4b/1610653115115-6XSE8SK90X6DPH29RFS1/IMG_2799.jpg?format=256w"
  },
  {
    title: "Hatha",
    description:
      "Hatha betekent Zon (Ha) Maan (Tha). Je beoefent zowel houdingen die je lijf en geest krachtig maken, met daarnaast ook rustige en verdiepende houdingen die je geest kalmeren.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5f48f84198e489725fcd6c4b/1610652484601-T2SV2GSX71X7XV7DTX0K/Hatha.jpg?format=256w"
  },
  {
    title: "Vinyasa",
    description:
      "Een creatieve en speelse stijl waarbij je  vloeiend door de houdingen heen beweegt terwijl je kracht, uithoudingsvermogen en flexibiliteit opbouwt.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5f48f84198e489725fcd6c4b/1610652923010-XU7RPUXSOS7FTUODG88F/image-asset.jpeg?format=256w"
  },
  {
    title: "Yin",
    description:
      "Een rustige vorm van yoga waarbij houdingen langere tijd  worden vastgehouden. Op deze manier wordt er ruimte gecreëerd in het bindweefsel en de gewrichten.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5f48f84198e489725fcd6c4b/1610652765338-2LSY6N229OY9EYP8DB8P/Yin.jpg?format=256w"
  }
]);
</script>
