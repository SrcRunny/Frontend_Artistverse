<template>
    <div class="max-w-md mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden">
      <div class="flex flex-col h-[400px]">
        <div class="px-4 py-3 border-b dark:border-zinc-700">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold text-zinc-800 dark:text-white">Chatbot Assistant</h2>
            <div class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Online</div>
          </div>
        </div>
        <div class="flex-1 p-3 overflow-y-auto flex flex-col space-y-2" id="chatDisplay">
          <!-- User Messages -->
          <div v-for="message in userMessages" :key="message.id" class="chat-message self-end bg-blue-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
            {{ message.content }}
          </div>
          <!-- AI Messages -->
          <div v-for="message in aiMessages" :key="message.id" class="chat-message self-start bg-zinc-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
            {{ message.content }}
          </div>
        </div>
        <div class="px-3 py-2 border-t dark:border-zinc-700">
          <div class="flex gap-2">
            <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message..." class="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm" id="chatInput" type="text" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm" id="sendButton" @click="sendMessage">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userMessages: [],
        aiMessages: [],
        userInput: ''
      }
    },
    methods: {
        sendMessage() {
  if (this.userInput.trim() === '') return

  // Push user message first
  const userMessage = { id: Date.now(), role: 'user', content: this.userInput };
  this.userMessages.push(userMessage);

  this.sendUserMessageToServer();

  // Clear user input
  this.userInput = '';
},

      sendUserMessageToServer() {
        fetch('http://127.0.0.1:5000/ai-assistance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: this.userInput })
        })
          .then((response) => response.json())
          .then((data) => {
            this.aiMessages.push({ id: Date.now(), role: 'ai', content: data.response })
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }
    }
  }
  </script>
  