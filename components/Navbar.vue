<template>
  <ul
    class="w-full flex p-2 justify-center bg-purple-50 max-w-screen-2xl mx-auto mt-4 rounded-2xl text-purple-950"
  >
    <li class="px-4 py-4 hover:bg-purple-100 rounded-xl">
      <NuxtLink to="/" class="flex space-x-2 items-center"
        ><IconsHome /> <span>Home</span></NuxtLink
      >
    </li>
    <li class="px-4 py-4 hover:bg-purple-100 rounded-xl">
      <NuxtLink to="/retreats">Retreats</NuxtLink>
    </li>
    <li class="px-4 py-4 hover:bg-purple-100 rounded-xl">
      <NuxtLink to="/cursussen/krachtvanyin">Ontdek de kracht van yin</NuxtLink>
    </li>
  </ul>
</template>
<script>
export default {
  name: "navbar"
};
</script>
