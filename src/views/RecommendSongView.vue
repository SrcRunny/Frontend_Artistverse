<template>
  <div class="background">
    <h1 class="title">Emotion Music Recommender</h1>
    <div class="emotion-detector">
      <h2 class="subtitle">Emotion Detector</h2>

      <div class="video-container">
        <img class="video-feed" :src="videoFeedURL" :key="videoFeedKey" />
      </div>
      <h3 v-if="countDown > 0" class="countdown">{{ countDown }}</h3>
      <button class="camera-btn">
        <i class="fas fa-camera"></i>
      </button>
      <button @click="startCountdown" :disabled="countingDown" class="capture-button">
        Capture Emotion
      </button>
      <button @click="reset" class="reset-button">Reset</button>
      <h3 v-if="emotion" class="detected-emotion">Detected Emotion: {{ emotion }}</h3>
    </div>

    <div class="song-recommendations">
      <h2 class="subtitle">Song Recommendations</h2>
      <div class="result-area">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Album</th>
              <th>Artist</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{ item.Name }}</td>
              <td>{{ item.Album }}</td>
              <td>{{ item.Artist }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoFeedURL: 'http://127.0.0.1:5000/video_feed',
      videoFeedKey: 0,
      data: [],
      countingDown: false,
      emotion: null,
      countDown: 0
    }
  },
  methods: {
    startCountdown() {
      this.countDown = 5
      this.countingDown = true
      const countdownInterval = setInterval(() => {
        if (this.countDown > 0) {
          this.countDown--
        } else {
          clearInterval(countdownInterval)
          this.captureEmotion()
          this.countingDown = false
        }
      }, 1000)
    },
    captureEmotion() {
      fetch('http://127.0.0.1:5000/video_feed')
        .then(() => {
          console.log('Emotion captured successfully!')
          this.updateTable()
        })
        .catch((error) => {
          console.error('Error capturing emotion:', error)
        })
    },
    updateTable() {
      fetch('http://127.0.0.1:5000/t')
        .then((response) => response.json())
        .then((data) => {
          this.data = data
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
    reset() {
      this.data = []
      this.emotion = null
      this.countDown = 0
      this.videoFeedKey++
    }
  }
}
</script>

<style scoped>
.background {
  min-height: 100vh;
  background-color: #1b1b1b;
  width: 100%;
  position: absolute;
  text-align: center;
}

.container {
  text-align: center;
}

.title {
  z-index: 2;
  font-family: 'Avalors Personal Use';
  font-size: 40px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
  margin-top: 40px;
}

.subtitle {
  z-index: 2;
  font-family: 'Avalors Personal Use';
  font-size: 20px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
  margin: 40px;
}

.emotion-detector {
  width: 50%;
  float: left;
  height: 100%;
  margin: auto;
  padding-bottom: 20px;
  text-align: center;
}

.video-container {
  text-align: center;
  width: 100%;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.video-feed {
  display: inline-block;
  width: 65%;
  border: solid rgb(154, 153, 153) 2px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(77, 77, 77, 0.3);
}

.camera-btn {
  width: 200px;
  padding: 25px 30px 25px 30px;
  font-family: sans-serif;
  font-size: 400%;
  border-radius: 25px;
  border: none;
  background-color: #9b59b6;
  color: white;
}

.camera-btn:hover {
  cursor: pointer;
  background-color: #8e44ad;
}

.camera-btn:active {
  background: #8e44ad;
}

.countdown {
  color: #ff3300;
}

.capture-button {
  margin-top: 10px;
}

.reset-button {
  margin-top: 10px;
}

.detected-emotion {
  color: #ff3300;
}

.song-recommendations {
  width: 50%;
  float: left;
  height: 100%;
  margin: auto;
  text-align: center;
}

.result-area {
  padding: 15px;
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
  margin-bottom: 15px;
}

.table {
  margin: auto;
  width: 100%;
}
</style>
