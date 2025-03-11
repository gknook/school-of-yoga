<template>
  <!-- Hero Section with image background and overlaid text -->
  <div
    class="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4 max-w-screen-2xl mx-auto"
  >
    <!-- Third column for additional content -->
    <div
      class="lg:col-span-2 bg-rose-200 pb-4 pt-8 rounded-3xl text-rose-950 flex flex-col justify-center relative"
    >
      <div id="programma" v-if="eventsLoaded">
        <h2 class="text-4xl font-semibold mx-6">Lessen</h2>
        <ul class="" v-for="event in events" :key="event.id">
          <AgendaListItem
            :event-name="event.summary"
            :event-type="checkYogaType(event.summary)"
            :event-date="getDate(event.end.dateTime)"
            :event-start-time="getTime(event.start.dateTime)"
            :event-end-time="getTime(event.end.dateTime)"
            @click="showEventDetails(event)"
          />
        </ul>

        <button
          class="px-8 mt-4 w-full text-pink-900 hover:text-pink-950 transition-colors text-right"
        >
          Zie volledige programma
        </button>

        <div
          id="eventDetailModal"
          v-if="showEventDetailsModal"
          class="w-full h-full"
        >
          <AgendaEventDetail
            :event-name="eventDetail.summary"
            :event-type="checkYogaType(eventDetail.summary)"
            :event-date="getDate(eventDetail.end.dateTime)"
            :event-start-time="getTime(eventDetail.start.dateTime)"
            :event-end-time="getTime(eventDetail.end.dateTime)"
            :event-description="eventDetail.description"
            :event-location="eventDetail.location"
            :event-status="eventDetail.status"
            :event-link="eventDetail.htmlLink"
            @close-modal="showEventDetailsModal = false"
          />
          <div
            class="fixed top-0 left-0 w-full h-full bg-black z-20 opacity-75"
          ></div>
        </div>
      </div>
      <div v-else>Loading...</div>
    </div>
    <!-- Main content spanning 2 columns with background image -->
    <div
      class="lg:col-span-1 relative overflow-hidden flex items-center rounded-3xl"
    >
      <img
        src="https://images.squarespace-cdn.com/content/v1/5f48f84198e489725fcd6c4b/1610651131261-RBK9UOXGRKRBW5OM6DTU/IMG_5017.jpg?format=1000w"
        alt=""
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="bg-white px-4 py-2 absolute top-2 right-2 rounded-2xl">
        Watch video
      </div>
      <div
        class="absolute w-full bottom-0 p-8 h-2/3 bg-gradient-to-b from-transparent to-gray-800/50 flex items-end"
      >
        <h3 class="text-2xl font-semibold text-white">
          Verlicht stress met Yoga
        </h3>
      </div>
    </div>
    <div
      class="lg:col-span-1 relative overflow-hidden flex items-center rounded-3xl"
    >
      <img
        src="https://images.squarespace-cdn.com/content/v1/5f48f84198e489725fcd6c4b/1610653205250-JJADLEKXM9YZLJ7LTO38/IMG_5003.jpg?format=1000w"
        alt=""
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="bg-white px-4 py-2 absolute top-2 right-2 rounded-2xl">
        Watch video
      </div>
      <div
        class="absolute w-full bottom-0 p-8 h-2/3 bg-gradient-to-b from-transparent to-gray-800/50 flex items-end"
      >
        <h3 class="text-2xl font-semibold text-white">
          Vergroot je flexibiliteit
        </h3>
      </div>
    </div>
    <div
      class="lg:col-span-1 relative overflow-hidden flex items-center rounded-3xl"
    >
      <img
        src="https://images.squarespace-cdn.com/content/v1/5f48f84198e489725fcd6c4b/1610652484601-T2SV2GSX71X7XV7DTX0K/Hatha.jpg?format=1000w"
        alt=""
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="bg-white px-4 py-2 absolute top-2 right-2 rounded-2xl">
        Watch video
      </div>
      <div
        class="absolute w-full bottom-0 p-8 h-2/3 bg-gradient-to-b from-transparent to-gray-800/50 flex items-end"
      >
        <h3 class="text-2xl font-semibold text-white">
          Wordt sterker door Yoga
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const events = ref([]);
const eventsLoaded = ref(false);
const showEventDetailsModal = ref(false);
const eventDetail = ref([]);

const { checkYogaType } = useUtils();

onMounted(async () => {
  try {
    const response = await fetch("/api/calendar");
    events.value = await response.json();
  } catch (error) {
    console.error("failed to fetch events", error);
  } finally {
    eventsLoaded.value = true;
  }
});

const formatDate = dateString => {
  return new Date(dateString).toLocaleString();
};

function getDate(dateTime) {
  const date = new Date(dateTime);
  return date.toDateString();
}

function getTime(dateTime) {
  const date = new Date(dateTime);
  const formatter = new Intl.DateTimeFormat("nl-NL", {
    hour: "2-digit",
    minute: "2-digit"
  });
  return formatter.format(date);
}

function showEventDetails(event) {
  // console.log(event);
  showEventDetailsModal.value = true;
  // console.log(showEventDetailsModal.value);
  eventDetail.value = event;
}
</script>
