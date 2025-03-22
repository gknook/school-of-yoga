<template>
    <div id="main" class="w-full p-4 pb-24 max-w-screen-2xl mx-auto">
        <!-- <h1 class="text-4xl font-bold">Retreats</h1> -->

        <Video videoSrc="/assets/vid/Yoga.mp4" posterImage="" :mobileDisabled="true">
            <h1 class="text-white text-6xl font-semibold">Boek je retreat</h1>
            <p class="text-white">This will appear over the video</p>
        </Video>

        <!-- <div class="">
            <h2>Accomodatie</h2>
        </div>
        <div class="">
            <h2>Programma</h2>
        </div> -->
        <div class="bg-purple-950 p-8 rounded-2xl mt-8">
            <h2 class="text-3xl text-purple-100">Pakketten</h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
                <div
                    class="relative bg-gradient-to-bl from-purple-900 to-purple-950 overflow-hidden min-h-[500px] flex flex-col items-start rounded-3xl p-8">
                    <h3 class="text-purple-100 font-bold text-lg">Light</h3>
                    <ul class="text-purple-50 flex flex-col space-y-2 mt-8 flex-grow list-disc">
                        <!-- <li class="ml-4 pl-2">7 nachten accommodatie</li> -->
                        <li class="ml-4 pl-2">Alle maaltijden (ontbijt, lunch en diner)</li>
                        <li class="ml-4 pl-2">Onbeperkt thee en water</li>
                        <li class="ml-4 pl-2">Follow-through plan</li>
                        <li class="ml-4 pl-2">Alle groepssessies inclusief bij het programma</li>
                    </ul>
                    <div class="w-full flex items-end mt-8 bg-purple-950 hover:bg-purple-900 p-4 rounded-xl flex-col cursor-pointer">
                        <span class="text-white text-4xl font-extrabold">1500</span>
                        <span class="text-white">Boek nu</span>
                    </div>
                </div>
                <div
                    class="relative bg-gradient-to-bl from-purple-900 to-purple-950 overflow-hidden min-h-[500px] flex flex-col items-start rounded-3xl p-8">
                    <h3 class="text-purple-100 font-bold text-lg">Relax</h3>
                    <ul class="text-purple-50 flex flex-col space-y-2 mt-8 flex-grow list-disc">
                        <li class="ml-4 pl-2">Alles in Light</li>
                        <li class="ml-4 pl-2">7 nachten accommodatie</li>
                        <li class="ml-4 pl-2">Voorgesprek met Emma</li>
                    </ul>
                    <div class="w-full flex items-end mt-8 bg-purple-950 hover:bg-purple-900 p-4 rounded-xl flex-col cursor-pointer">
                        <span class="text-white text-4xl font-extrabold">2750</span>
                        <span class="text-white">Boek nu</span>
                    </div>
                </div>
                <div
                    class="relative bg-gradient-to-bl from-purple-900 to-purple-950 overflow-hidden min-h-[500px] flex flex-col items-start rounded-3xl p-8">
                    <h3 class="text-purple-100 font-bold text-lg">Embrace</h3>
                    <ul class="text-purple-50 flex flex-col space-y-2 mt-8 flex-grow list-disc">
                        <li class="ml-4 pl-2">Alles in Relax</li>
                        <li class="ml-4 pl-2">Twee 1-op-1 coach sessies tijdens de week</li>
                        <li class="ml-4 pl-2">Follow-up zoom call 2 maanden later</li>
                    </ul>
                    <div class="w-full flex items-end mt-8 bg-purple-950 hover:bg-purple-900 p-4 rounded-xl flex-col cursor-pointer">
                        <span class="text-white text-4xl font-extrabold">3500</span>
                        <span class="text-white">Boek nu</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import Video from './components/Video.vue'
</script>