<template>
  <li
    class="bg-rose-200 p-6 hover:bg-rose-300 hover:shadow-sm relative overflow-hidden cursor-pointer mt-0"
  >
    <div class="flex justify-between items-start w-full">
      <h2 class="text-2xl font-semibold text-rose-950 z-10 truncate">
        {{ eventName }}
      </h2>
      <Tag :tag-label="eventType" :tag-color="'amber'" />
    </div>
    <div
      class="flex justify-start items-center space-x-8 mt-2 text-rose-950/70"
    >
      <div class="flex justify-start items-center space-x-2 z-10">
        <IconsCalendar /><span>{{ eventDate }}</span>
      </div>
      <div class="flex justify-start items-center space-x-2 z-10">
        <IconsClock /><span>{{ eventStartTime }} - {{ eventEndTime }}</span>
      </div>
    </div>
    <!-- <UIMandala
      class="absolute right-1/2 -z-0 justify-center"
      :style="{ transform: `translate(0, -${Math.random() * 56}rem)` }"
    /> -->
  </li>
</template>
<script setup>
defineProps({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  eventDate: { type: String },
  eventStartTime: { type: String },
  eventEndTime: { type: String }
});
</script>
