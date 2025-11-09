<template>
  <div class="flex flex-col h-screen bg-gray-50">
    <!-- Step 1: Input video -->
    <div v-if="!videoSelected" class="flex flex-col items-center justify-center h-full p-6">
      <div class="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4">
        <h2 class="text-xl font-semibold text-center">Masukkan Informasi Video</h2>

        <input
          v-model="videoTitle"
          placeholder="Judul Video"
          class="border w-full p-2 rounded-lg text-sm"
        />
        <input
          v-model="videoUrl"
          placeholder="URL YouTube"
          class="border w-full p-2 rounded-lg text-sm"
        />

        <button
          @click="startChat"
          :disabled="!videoTitle || !videoUrl"
          class="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          Mulai Chat
        </button>
      </div>
    </div>

    <!-- Step 2: Chat UI -->
    <div v-else class="flex flex-col h-full fixed w-full">
      <header class="p-4 bg-white shadow-sm flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold">Judul video: {{ videoTitle }}</h2>
          <p class="text-sm text-gray-500 truncate w-64">URL Video: {{ videoUrl }}</p>
        </div>
        <button
          @click="resetVideo"
          class="text-sm bg-red-500 hover:bg-red-600 p-2 rounded-lg text-white transition"
        >
          Ganti Video
        </button>
      </header>

      <main ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-3 pb-40">
        <MessageList :messages="messages" />

        <!-- Typing animation -->
        <div v-if="isTyping" class="flex items-center space-x-2 text-gray-500 text-sm">
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          <span>Bot sedang mengetik...</span>
        </div>
      </main>

      <InputBox @send="handleSend" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import MessageList from '../components/MessageList.vue'
import InputBox from '../components/InputBox.vue'

const videoTitle = ref('')
const videoUrl = ref('')
const videoSelected = ref(false)

const messages = ref([])
const isTyping = ref(false)
const chatContainer = ref(null)

function startChat() {
  videoSelected.value = true
  messages.value = [
    { id: 1, from: 'bot', text: `Halo! Saya siap membantu menjawab pertanyaan tentang video "${videoTitle.value}".` }
  ]
}

function resetVideo() {
  videoSelected.value = false
  videoTitle.value = ''
  videoUrl.value = ''
}

function scrollToBottom() {
  nextTick(() => {
    const el = chatContainer.value
    if (el) el.scrollTop = el.scrollHeight
  })
}

async function handleSend(text) {
  messages.value.push({ id: Date.now(), from: 'user', text })
  scrollToBottom()

  isTyping.value = true
  scrollToBottom()

  await new Promise((r) => setTimeout(r, 1500))

  isTyping.value = false
  messages.value.push({
    id: Date.now() + 1,
    from: 'bot',
    text: `Oke, pertanyaanmu tentang "${videoTitle.value}" sudah saya terima: "${text}"`
  })

  scrollToBottom()
}
</script>
