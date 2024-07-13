<template>
  <div class="body">
  <div class="center-container">
    <div class="topic">
      <h1>Welcome to AI Assistance</h1>
      <p>This interface provides music suggestions based on lyrics you provide.</p>
      <p>You must put only lyrics of your lyrics in here</p>

    </div>

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
          class="input-field"
        />
        <button @click="sendMessage" class="send-button">Send</button>
      </div>
    </div>
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
        body: JSON.stringify({ lyrics: this.userInput })
      })
        .then((response) => response.json())
        .then((data) => {
          this.messages.push({ id: Date.now(), role: 'ai', content: data.analysis })
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }
}
</script>

<style scoped>
 h1 {
    font-family: 'Avalors Personal Use';
    font-size: 40px;
    letter-spacing: 5px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
    position: relative;
  }
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b1b1b;
}

.topic {
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
}

.topic h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.topic p {
  font-size: 1.2rem;
  color: #666;
}

.chat-container {
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.chat-messages {
  max-height: 60vh;
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
  border-top: 1px solid #eee;
}

.input-field {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.send-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
