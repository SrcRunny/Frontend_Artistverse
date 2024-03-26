<template>
  <div class="container mx-auto p-4">
    <label class="block mb-2" for="seedText">Seed Text:</label>
    <input
      class="w-full mb-4 p-2 border border-gray-300 rounded-md"
      type="text"
      id="seedText"
      v-model="seedText"
      placeholder="Enter seed text"
    />
    <label class="block mb-2" for="length">Length:</label>
    <input
      class="w-full mb-4 p-2 border border-gray-300 rounded-md"
      type="number"
      id="length"
      v-model.number="length"
      placeholder="Enter length"
    />
    <button
      @click="generateLyrics"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
    >
      Generate Lyrics
    </button>
    <div v-if="generatedLyrics" class="mt-4">
      <h3 class="text-lg font-semibold mb-2">Generated Lyrics :</h3>
      <div v-for="(section, index) in generatedLyrics" :key="index">
        <h4 class="text-gray-800" v-if="index === 0">Verse 1</h4>
        <h4 class="text-gray-800" v-if="index === 1">Chorus</h4>
        <h4 class="text-gray-800" v-if="index === 2">Verse 2</h4>
        <p class="text-gray-800">{{ section }}</p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seedText: '',
      length: 140,
      generatedLyrics: []
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
        // Access the correct keys from the response data
        const { verse1, chorus, verse2 } = data
        // Assign the verses to generatedLyrics array
        this.generatedLyrics = [verse1, chorus, verse2]
      } catch (error) {
        console.error('Error generating lyrics:', error)
      }
    }
  }
}
</script>

<style scoped>
/* From uiverse.io by @Ali-Tahmazi99 */
button {
  display: inline-block;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #03045e;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
}

button::before,
button::after {
  content: '';
  position: absolute;
  top: 0;
  width: 0;
  height: 100%;
  transform: skew(15deg);
  transition: all 0.5s;
  overflow: hidden;
  z-index: -1;
}

button::before {
  left: -10px;
  background: #240046;
}

button::after {
  right: -10px;
  background: #5a189a;
}

button:hover::before,
button:hover::after {
  width: 58%;
}

button:hover span {
  color: #e0aaff;
  transition: 0.3s;
}

button span {
  color: #03045e;
  font-size: 18px;
  transition: all 0.3s ease-in;
}
</style>
