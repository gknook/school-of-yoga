<template>
  <div
    class="flex-none rounded-full text-sm text-center font-semibold w-28 h-8 flex items-center justify-center"
    :class="`bg-${tagColor}-100 text-${tagColor}-900`"
  >
    {{ tagLabel }}
  </div>
</template>
<script setup>
defineProps({
  tagLabel: String,
  tagColor: String
});
</script>
