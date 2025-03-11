<template>
  <div
    class="w-8 h-8 rounded hover:bg-green-200 active:border-gray-600 active:border flex justify-center items-center cursor-pointer"
    @click="buttonClicked"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const emit = defineEmits(["clicked"]);

function buttonClicked() {
  emit("clicked");
}
</script>
