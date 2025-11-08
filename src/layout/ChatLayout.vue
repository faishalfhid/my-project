<template>
  <div class="flex flex-col h-screen bg-gray-50 pb-24">
    <main ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-3">
      <MessageList :messages="messages" />

      <!-- Loading typing indicator -->
      <div v-if="isTyping" class="flex items-center space-x-2 text-gray-500 text-sm">
        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        <span>Bot sedang mengetik...</span>
      </div>
    </main>

    <InputBox @send="handleSend" />
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import MessageList from '../components/MessageList.vue'
import InputBox from '../components/InputBox.vue'

const messages = ref([
  { id: 1, from: 'bot', text: 'Halo! Ada yang bisa saya bantu?' }
])

const isTyping = ref(false)
const chatContainer = ref(null)

function scrollToBottom() {
  nextTick(() => {
    const el = chatContainer.value
    if (el) el.scrollTop = el.scrollHeight
  })
}

async function handleSend(text) {
  messages.value.push({ id: Date.now(), from: 'user', text })
  scrollToBottom()

  // tampilkan animasi mengetik
  isTyping.value = true
  scrollToBottom()

  // simulasi delay balasan bot
  await new Promise((r) => setTimeout(r, 1500))

  // sembunyikan animasi, lalu tambahkan pesan bot
  isTyping.value = false
  messages.value.push({
    id: Date.now() + 1,
    from: 'bot',
    text: `Oke, saya menerima pesanmu: "${text}"`
  })

  scrollToBottom()
}
</script>
