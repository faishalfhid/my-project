// src/api.js
import axios from 'axios'

// URL webhook dari n8n kamu
const WEBHOOK_URL = 'https://unmul2.app.n8n.cloud/webhook-test/chat-input'

/**
 * Kirim pesan user ke n8n
 * @param {string} text - Pesan dari user
 * @returns {Promise<string>} - Pesan balasan dari n8n
 */

export async function sendMessage(text) {
  try {
    const response = await axios.post(WEBHOOK_URL, { text })
    // const reply = response.data.body?.text || '(tidak ada balasan dari server)'
    reply = response.data.output || '(tidak ada balasan dari server)'
    return reply
  } catch (error) {
    console.error('Error:', error)
    return '⚠️ Terjadi kesalahan saat menghubungi server.'
  }
}
