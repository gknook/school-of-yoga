<template>
    <div class="video-container rounded-2xl border-4 border-purple-300 relative" ref="videoContainer">
      <video 
        ref="videoElement"
        autoplay 
        muted 
        loop 
        playsinline 
        :src="videoSrc"
        :poster="posterImage"
        onloadstart="this.playbackRate = 0.5;"
      ></video>
      <div class="content px-8 py-24 bg-purple-900/20 h-full w-full flex justify-end flex-col">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  import videoFile from '@/assets/vid/Yoga.mp4'
  
  const props = defineProps({
    posterImage: {
      type: String,
      default: ''
    },
    mobileDisabled: {
      type: Boolean,
      default: false
    }
  })
  
  const videoContainer = ref(null)
const videoElement = ref(null) // This should be null initially to reference the DOM element
const videoSrc = ref(videoFile) // New ref for the video source
const isMobile = ref(false)
  
  onMounted(() => {
    checkDevice()
    window.addEventListener('resize', checkDevice)

    // videoElement.value = videoFile;
    
    // Ensure video plays when ready
    if (videoElement.value) {
        videoElement.value.play().catch(error => {
        console.warn('Autoplay failed:', error)
      })
    }
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice)
  })
  
  const checkDevice = () => {
    isMobile.value = window.innerWidth <= 768
    
    if (props.mobileDisabled && isMobile.value && videoElement.value) {
        videoElement.value.pause()
    } else if (videoElement.value) {
        videoElement.value.play().catch(e => console.warn(e))
    }
  }
  </script>
  
  <style scoped>
  .video-container {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }
  
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    object-fit: cover;
    z-index: -1;
  }
  
  .content {
    position: relative;
    z-index: 1;
    /* Add styling for your content here */
  }
  </style>