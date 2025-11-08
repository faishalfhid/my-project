<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import ChatLayout from './components/ChatLayout.vue'
import Navbar from './components/Navbar.vue'
// import ChatBox from './components/InputBox.vue'
import ChatLayout from './layout/ChatLayout.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    <div class="pt-16">
    <ChatLayout />
    </div>
    <!-- <ChatBox /> -->
  </div>
</template>

