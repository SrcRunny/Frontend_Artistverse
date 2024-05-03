<template>
  <div>
    <h1>Lyrics generator</h1>
  </div>
  <div class="container">
    <div class="vertical">
      <div class="box1">
        <div>
          <h1>GENRE</h1>
        </div>
      </div>
      <div class="box1">
        <div>
          <h1>Mood</h1>
        </div>
      </div>
      <div class="box1">
        <div>
          <h1>Artist Style</h1>
        </div>
      </div>
    </div>

    <div class="section2">
      <div class="box2">
        <h1>Topic</h1>
        <input v-model="prompt" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="dropdown">
          <select v-model="genre">
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Indie">Indie</option>
            <option value="Jazz">Jazz</option>
          </select>
          <select v-model="language">
            <option value="Thai">Thai</option>
            <option value="English">English</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
          </select>
        </div>
        <div>
          <button @click="generateLyrics">Generate</button>
        </div>
      </div>
    </div>
    <div class="section3">
      <div class="box3">
        <div v-if="loading" class="loader">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>
        <div v-else>
          <pre v-if="lyrics">{{ lyrics }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prompt: '',
      genre: 'Pop',
      language: 'Thai',
      lyrics: '',
      loading: false
    }
  },
  methods: {
    async generateLyrics() {
      try {
        this.loading = true
        const response = await fetch('http://127.0.0.1:5000/generate-lyrics-genre', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: this.prompt, genre: this.genre, language: this.language })
        })

        const data = await response.json()
        this.lyrics = data.lyrics
      } catch (error) {
        console.error('Error:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box1 {
  width: 200px;
  height: 160px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
}

.box2 {
  width: 500px;
  height: 480px;
  border: 1px solid #000000;
  padding: 30px;
}

.box3 {
  width: 500px;
  height: 480px;
  border: 1px solid #000000;
  padding: 30px;
}

.box1 h1 {
  color: rgb(0, 0, 0);
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: linear-gradient(to right, #272626, #8a8887);
  margin: 0 5px;
  animation: bubbleAnimation 1.5s ease-in-out infinite;
}

@keyframes bubbleAnimation {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0.5;
  }
}
</style>
