<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-16 max-w-screen-2xl mx-auto"
  >
    <div
      class="md:col-span-2 bg-rose-200 pb-4 pt-8 rounded-3xl text-rose-950 flex flex-col justify-center relative"
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
