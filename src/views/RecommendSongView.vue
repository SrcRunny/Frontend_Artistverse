<template>
  <div>
    <h1 align="center" style="color: #ff3300; margin: 40px">Emotion Music Recommender</h1>

    <div
      style="
        width: 50%;
        float: left;
        height: 100%;
        margin: auto;
        padding-bottom: 25px;
        text-align: center;
      "
    >
      <h2 align="center" style="color: #ff3300">Emotion Detector</h2>

      <div style="margin: 10px; text-align: center; width: 49%">
        <img class="outer-shadow center img-fluid" :src="videoFeedURL" />
      </div>
      <button @click="startCountdown" style="margin-top: 10px;">Capture Emotion</button>
      <div v-if="showCountdown" style="font-size: 24px; color: red; margin-top: 10px;">{{ countdownNumber }}</div>
    </div>

    <div style="width: 50%; float: left; height: 100%; margin: auto; text-align: center">
      <h2 align="center" style="color: #ff3300">Song Recommendations</h2>
      <div
        class="outer-shadow"
        id="ResultArea"
        style="
          padding: 15px;
          width: 100%;
          height: 100%;
          margin: auto;
          text-align: center;
          margin-bottom: 15px;
        "
      >
        <table
          class="table table-striped table-light table-bordered table-hover table-sm table-responsive"
          id="DynamicTable"
        >
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
      data: [],
      showCountdown: false,
      countdownNumber: 0
    }
  },
  methods: {
    startCountdown() {
      this.showCountdown = true;
      let count = 3;
      this.countdownNumber = count;
      const countdownInterval = setInterval(() => {
        if (count > 0) {
          count--;
          this.countdownNumber = count;
        } else {
          clearInterval(countdownInterval);
          this.captureEmotion();
        }
      }, 1000);
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
    }
  }
}
</script>

<style scoped>
img {
  padding: 20px;
  display: inline-block;
  margin: auto;
  width: 85%;
}
</style>
