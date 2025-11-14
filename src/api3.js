import axios from 'axios'

// const WEBHOOK_URL = 'https://unmul2.app.n8n.cloud/webhook/chat-input'
const WEBHOOK_URL = 'https://unmul2.app.n8n.cloud/webhook/chat-input'

export async function sendMessage(text) {
  try {
    const response = await axios.post(WEBHOOK_URL, { text })

    if (response.data && response.data.output) {
      return response.data.output
    } else {
      console.warn('Response tidak sesuai:', response.data)
      return '⚠️ Maaf, tidak ada respons dari bot.'
    }
  } catch (err) {
    console.error('Error saat kirim pesan:', err)
    return '⚠️ Maaf, terjadi kesalahan koneksi.'
  }
}
