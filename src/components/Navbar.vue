<template>
  <nav class="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo / Brand -->
        <div class="flex items-center space-x-2">
          <span class="text-lg font-semibold text-gray-800">MyChatBot</span>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Docs</a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-show="isOpen" class="md:hidden bg-white border-t">
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Home</a>
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">About</a>
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Docs</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
