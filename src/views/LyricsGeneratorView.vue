<template>
  <div style="margin-top: 100px">
    <h1>Lyrics Generator</h1>
    <form @submit.prevent="generateLyrics">
      <label for="prompt">Enter your prompt:</label>
      <input type="text" id="prompt" v-model="prompt" required />
      <button type="submit">Generate Lyrics</button>
    </form>
    <div v-if="lyrics">
      <h2>Generated Lyrics:</h2>
      <pre>{{ lyrics }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prompt: '',
      lyrics: ''
    }
  },
  methods: {
    async generateLyrics() {
      try {
        // Send HTTP request to server
        const response = await fetch('http://127.0.0.1:5000/generate-lyrics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: this.prompt })
        })

        // Parse response and update lyrics
        const data = await response.json()
        this.lyrics = data.lyrics
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Add your CSS styles here */
</style>
