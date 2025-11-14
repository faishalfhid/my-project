import axios from 'axios'

const API = axios.create({
  baseURL: 'https://unmul2.app.n8n.cloud/webhook',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Kirim URL + Title (Step 1)
export async function submitVideoInfo(url, title) {
  const payload = { URL: url, title };

  const res = await API.post('/submit-url', payload);

  // Jika webhook tidak memberi body → res.data = ""
  if (!res.data || res.data === "") {
    return { 
      output: `Video dengan judul "${title}" berhasil dimuat, ada yang mau anda tanyakan?`
    };
  }

  return res.data;
}


// Kirim pesan chat (jika nanti kamu tambah webhook lain)
// export async function sendMessage(text) {
//   const res = await API.post('/chat-input', { text })
//   return res.data.output
// }
