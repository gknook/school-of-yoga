<template>
  <div
    class="z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w:1/4 sm:w-1/2 w-3/4 bg-lime-200 rounded-3xl p-6 shadow-xl overflow-hidden"
  >
    <div class="flex justify-between items-start w-full space-x-2">
      <Tag :tag-label="eventType" :tag-color="'green'" />
      <UIIconButton @clicked="closeModal"
        ><IconsClose class="p-1 w-8 h-8"
      /></UIIconButton>
    </div>
    <div class="z-10 mt-16">
      <h2 class="text-4xl font-semibold text-lime-950 z-10 flex-grow">
        {{ eventName }}
      </h2>
      <p class="z-20 text-lime-800 mt-4">{{ eventDescription }}</p>

      <!-- <p class="z-20 text-sm text-lime-700 mt-2">{{ eventStatus }}</p> -->
    </div>
    <div
      class="flex-col justify-start items-center space-y-2 mt-8 text-lime-950"
    >
      <div class="flex justify-start items-start space-x-2 z-10">
        <IconsCalendar class="flex-none mt-1" /><span>{{ eventDate }}</span>
      </div>
      <div class="flex justify-start items-start space-x-2 z-10">
        <IconsClock class="flex-none mt-1" /><span
          >{{ eventStartTime }} - {{ eventEndTime }}</span
        >
      </div>
      <div class="flex justify-start items-start space-x-2 z-10">
        <IconsMarker class="flex-none mt-1" /><span>{{ eventLocation }}</span>
      </div>
    </div>
    <div class="z-10 mt-16">
      <a
        :href="eventLink"
        class="text-lime-500 hover:underline hover:text-lime-600"
        >Open in Google Calendar</a
      >
    </div>
    <UIMandala
      class="absolute top-0 right-1/2 -z-10 justify-center -translate-y-1/2"
      :style="{ top: `${Math.random() * 48} rem` }"
    />
  </div>
</template>
<script setup>
defineProps({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  eventDate: { type: String },
  eventStartTime: { type: String },
  eventEndTime: { type: String },
  eventDescription: { type: String },
  eventLocation: { type: String },
  eventStatus: { type: String },
  eventLink: { type: String }
});

const emit = defineEmits(["closeModal"]);

function closeModal() {
  emit("closeModal");
}
</script>
