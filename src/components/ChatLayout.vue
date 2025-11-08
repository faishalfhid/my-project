<template>
  <div class="flex flex-col">
    <!-- Header -->
    <header class="p-4 border-b bg-white shadow-sm">
      <h2 class="text-lg font-semibold">YouTube Video Chatbot</h2>
      <p class="text-sm text-slate-500">
        Ketik pertanyaan dan lampirkan YouTube URL
      </p>
    </header>

    <!-- Chat area -->
    <main class="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
      <div
        v-for="msg in messages"
        :key="msg.id"
        :class="[
          'max-w-[75%] p-3 rounded-2xl',
          msg.from === 'user'
            ? 'bg-blue-500 text-white self-end ml-auto'
            : 'bg-white border text-gray-800 self-start mr-auto'
        ]"
      >
        {{ msg.text }}
      </div>
    </main>

    <!-- Footer / input -->
    <footer class="p-4 border-t bg-white">
      <div class="mb-2">
        <input
          v-model="videoUrl"
          placeholder="YouTube URL (opsional)"
          class="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div class="flex gap-2">
        <input
          v-model="userInput"
          @keyup.enter="handleSend"
          placeholder="Tulis pesan..."
          class="flex-1 border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400"
        />
        <button
          @click="handleSend"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Kirim
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([
  { id: 1, from: 'bot', text: 'Halo! Kirim YouTube link atau tanya sesuatu.' }
])
const userInput = ref('')
const videoUrl = ref('')

// Simulasi bot lokal (tanpa API)
function handleSend() {
  const text = userInput.value.trim()
  if (!text) return

  // Tambahkan pesan user
  messages.value.push({ id: Date.now(), from: 'user', text })
  userInput.value = ''

  // Simulasi delay balasan bot
  setTimeout(() => {
    const reply = generateMockReply(text)
    messages.value.push({ id: Date.now() + 1, from: 'bot', text: reply })
  }, 600)
}

// Fungsi balasan dummy
function generateMockReply(text) {
  if (videoUrl.value) {
    return `Simulasi jawaban berdasarkan video: ${videoUrl.value}`
  } else if (text.includes('halo')) {
    return 'Halo juga! Ada yang bisa saya bantu terkait video YouTube?'
  } else if (text.includes('apa')) {
    return 'Pertanyaan menarik! Tapi ini masih mode offline 😄'
  } else {
    return 'Saya bot lokal tanpa koneksi API. Coba kirim URL YouTube!'
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
