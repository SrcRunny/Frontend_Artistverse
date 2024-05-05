<template>
  <div class="background">
    <div class="layout">
      <h1 class="text-4xl md:text-5xl mt-8">Lyrics Generator by "Genre"</h1>
      <div class="nav mt-5">
        <button class="btn-23 mr-2 md:mr-4">
          <span class="text">Genre</span>
          <span aria-hidden="" class="marquee">Genre</span>
        </button>
        <button class="btn-23 mr-2 md:mr-4">
          <span class="text">Mood</span>
          <span aria-hidden="" class="marquee">Mood</span>
        </button>
        <button class="btn-23">
          <span class="text">Artist</span>
          <span aria-hidden="" class="marquee">Artist</span>
        </button>
      </div>
    </div>
    <div class="container1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 md:mt-4">
      <div class="box1"></div>
      <div class="box1"></div>
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
.background {
  min-height: 100vh;
  background-color: #1b1b1b;
}

.layout {
  padding: 20px;
  text-align: center;
}

.box1 {
  width: 100%;
  height: 400px;
  border: 2px solid white;
}

h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
}

.btn-23,
.btn-23 *,
.btn-23 :after,
.btn-23 :before,
.btn-23:after,
.btn-23:before {
  border: 0 solid;
  box-sizing: border-box;
}

.btn-23 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;
}

.btn-23:disabled {
  cursor: default;
}

.btn-23:-moz-focusring {
  outline: auto;
}

.btn-23 svg {
  display: block;
  vertical-align: middle;
}

.btn-23 [hidden] {
  display: none;
}

.btn-23 {
  border-radius: 20px;
  border-width: 2px;
  overflow: hidden;
  padding: 2rem 3rem;
  margin: 10px;
  position: relative;
}

.btn-23 span {
  display: grid;
  inset: 0;
  place-items: center;
  position: absolute;
  transition: opacity 0.2s ease;
}

.btn-23 .marquee {
  --spacing: 5em;
  --start: 0em;
  --end: 5em;
  -webkit-animation: marquee 1s linear infinite;
  animation: marquee 1s linear infinite;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
  opacity: 0;
  position: relative;
  text-shadow:
    #fff var(--spacing) 0,
    #fff calc(var(--spacing) * -1) 0,
    #fff calc(var(--spacing) * -2) 0;
}

.btn-23:hover .marquee {
  -webkit-animation-play-state: running;
  animation-play-state: running;
  opacity: 1;
}

.btn-23:hover .text {
  opacity: 0;
}

.btn-23:hover {
  background-color: rgb(20, 20, 20);
}

@-webkit-keyframes marquee {
  0% {
    transform: translateX(var(--start));
  }

  to {
    transform: translateX(var(--end));
  }
}

@keyframes marquee {
  0% {
    transform: translateX(var(--start));
  }

  to {
    transform: translateX(var(--end));
  }
}

@media (max-width: 768px) {
  .btn-23 {
    padding: 1.5rem 2rem;
    font-size: 90%;
  }
}

@media (max-width: 640px) {
  .btn-23 {
    padding: 1rem 1.5rem;
    font-size: 80%;
  }
}

@media (max-width: 500px) {
  .btn-23 {
    font-size: 70%;
  }
  .h1 {
    margin-top: 20px;
  }
}
</style>
