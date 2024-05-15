<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
        :class="{ 'user-message': message.role === 'user', 'ai-message': message.role === 'ai' }"
      >
        {{ message.content }}
      </div>
    </div>
    <div class="chat-input">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        type="text"
        placeholder="Type a message..."
      />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      userInput: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.userInput.trim() === '') return

      this.messages.push({ id: Date.now(), role: 'user', content: this.userInput })

      this.sendUserMessageToServer()

      this.userInput = ''
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
          this.messages.push({ id: Date.now(), role: 'ai', content: data.response })
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }
}
</script>

<style scoped>
.chat-container {
  margin-top: 500px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.user-message {
  background-color: #dff2fc;
  align-self: flex-end;
}

.ai-message {
  background-color: #f0f0f0;
  align-self: flex-start;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
}

.chat-input input {
  flex: 1;
  margin-right: 10px;
}

.chat-input button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
