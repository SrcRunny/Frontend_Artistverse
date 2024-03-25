<template>
  <div>
    <label for="seedText">Seed Text:</label>
    <input type="text" id="seedText" v-model="seedText" placeholder="Enter seed text" />
    <label for="length">Length:</label>
    <input type="number" id="length" v-model.number="length" placeholder="Enter length" />
    <button @click="generateLyrics">Generate Lyrics</button>
    <div v-if="generatedLyrics">
      <h3>Generated Lyrics:</h3>
      <p>{{ generatedLyrics }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seedText: '',
      length: 140,
      generatedLyrics: ''
    }
  },
  methods: {
    async generateLyrics() {
      try {
        const response = await fetch('http://127.0.0.1:5000/generate-lyrics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            seedText: this.seedText,
            length: this.length
          })
        })
        const data = await response.json()
        this.generatedLyrics = data.generatedLyrics
      } catch (error) {
        console.error('Error generating lyrics:', error)
      }
    }
  }
} 
</script>
