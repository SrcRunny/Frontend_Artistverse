<script>
import videoSrc from '../video/2.mp4'
import videoSrc2 from '../video/1.mp4'
import videoSrc3 from '../video/3.mp4'
import videoSrc5 from '../video/5.mp4'
import videoSrc4 from '../video/4.mp4'

export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {
          head: 'WE ARE',
          videoSrc: videoSrc, // Change to your video source URL
          title: 'ARTISTVERSE',
          description: 'Your description for Slider 01'
        },
        {
          head: 'Together,',
          videoSrc: videoSrc2,
          title: 'Lets Rock!!!',
          description: 'Your description for Slider 01'
        },
        {
          head: 'Feeling',
          videoSrc: videoSrc3,
          title: 'Lyrics with emotion',
          description: 'Your description for Slider 01'
        },
        {
          head: 'Feature,',
          videoSrc: videoSrc4,
          title: 'Lyrics Generater',
          description: 'Your description for Slider 01'
        },
        {
          head: 'let',
          videoSrc: videoSrc5,
          title: 'Contact us',
          description: 'Your description for Slider 01'
        }
      ],
      intervalId: null
    }
  },
  mounted() {
    this.startAutoRun()
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    },
    nextSlider() {
      this.activeIndex = (this.activeIndex + 1) % this.items.length
    },
    prevSlider() {
      this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length
    },
    startAutoRun() {
      this.intervalId = setInterval(() => {
        this.nextSlider()
      }, 10000)
    },
    stopAutoRun() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId)
      }
    }
  },
  beforeUnmount() {
    this.stopAutoRun()
  }
}
</script>

<template>
  <div class="slider">
    <div class="list">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :class="{ active: index === activeIndex }"
      >
        <!-- Change image to video -->
        <video :src="item.videoSrc" muted autoplay loop></video>
        <div class="content">
          <p>{{ item.head }}</p>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <a class="fancy" v-if="index === 4" href="#">
            <span class="top-key"></span>
            <span class="text">Let's go</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Remain unchanged -->
  <div class="arrows">
    <button @click="prevSlider">&#60;</button>
    <button @click="nextSlider">&#62;</button>
  </div>

  <div class="thumbnail">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item"
      :class="{ active: index === activeIndex }"
      @click="setActive(index)"
    >
      <!-- Change image to video -->
      <video :src="item.videoSrc" muted loop></video>
      <div class="content">{{ item.title }}</div>
    </div>
  </div>
</template>
<style scoped>
.fancy {
  background-color: white;
  border: 1px solid #000;
  border-radius: 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 1.25em 2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 13px;
  margin-top: 50px;
}

.fancy::before {
  content: ' ';
  width: 1.5625rem;
  height: 2px;
  background: black;
  top: 50%;
  left: 1.5em;
  position: absolute;
  transform: translateY(-50%);
  transform-origin: center;
  transition:
    background 0.3s linear,
    width 0.3s linear;
}

.fancy .text {
  font-size: 1.125em;
  line-height: 1.33333em;
  padding-left: 2em;
  display: block;
  text-align: left;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
}

.fancy .top-key {
  height: 2px;
  width: 1.5625rem;
  top: -2px;
  left: 0.625rem;
  position: absolute;
  background: transparent;
  transition:
    width 0.5s ease-out,
    left 0.3s ease-out;
}

.fancy .bottom-key-1 {
  height: 2px;
  width: 1.5625rem;
  right: 1.875rem;
  bottom: -2px;
  position: absolute;
  background: transparent;
  transition:
    width 0.5s ease-out,
    right 0.3s ease-out;
}

.fancy .bottom-key-2 {
  height: 2px;
  width: 0.625rem;
  right: 0.625rem;
  bottom: -2px;
  position: absolute;
  background: transparent;
  transition:
    width 0.5s ease-out,
    right 0.3s ease-out;
}

.fancy:hover {
  color: white;
  background: black;
}

.fancy:hover::before {
  width: 0.9375rem;
  background: white;
}

.fancy:hover .text {
  color: white;
  padding-left: 1.5em;
}

.fancy:hover .top-key {
  left: -2px;
  width: 0px;
}

.fancy:hover .bottom-key-1,
.fancy:hover .bottom-key-2 {
  right: 0;
  width: 0;
}
.slider {
  height: 100vh;
  position: relative;
}

.slider .list .item {
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
}

.slider .list .item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider .list .item::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to top, #000 10%, transparent);
}

.slider .list .item .content {
  position: absolute;
  left: 10%;
  top: 20%;
  width: 500px;
  max-width: 80%;
  z-index: 1;
  color: white;
  font-weight: 500;
}

.slider .list .item .content p:nth-child(1) {
  text-transform: uppercase;
  letter-spacing: 5px;
}

.slider .list .item .content h2 {
  font-size: 90px;
  font-weight: 300;
  margin: 0;
  white-space: nowrap;
  font-family: 'Anton', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  letter-spacing: 4px;
}
.slider .list .item.active {
  opacity: 1;
  z-index: 10;
}

@keyframes showContent {
  to {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}

.slider .list .item.active p:nth-child(1),
.slider .list .item.active h2,
.slider .list .item.active p:nth-child(3),
.slider .list .item.active .fancy {
  transform: translateY(30px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent 0.8s 1.2s ease-in-out 1 forwards;
}

.slider .list .item.active h2 {
  animation-delay: 1s;
}
.slider .list .item.active p:nth-child(3) {
  animation-duration: 1.3s;
}

.arrows {
  position: absolute;
  top: 50%;
  right: 50px;
  z-index: 100;
}

.arrows button {
  background-color: #eee5;
  border: none;
  font-family: monospace;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: x-large;
  color: #eee;
  transition: 0.5s;
  margin-left: 10px;
}

.arrows button:hover {
  background-color: #eee;
  color: black;
}

.thumbnail {
  position: absolute;
  bottom: 50px;
  z-index: 11;
  display: flex;
  gap: 10px;
  width: 100%;
  height: 250px;
  padding: 0 50px;
  box-sizing: border-box;
  overflow: auto;
}

.thumbnail::-webkit-scrollbar {
  width: 0;
}

.thumbnail .item {
  width: 150px;
  height: 220px;
  filter: brightness(0.5);
  transition: 0.5s;
  flex-shrink: 0;
  border-radius: 10px;
}
.thumbnail .item:hover {
  border: rgb(255, 255, 255) 3px solid;
  border-radius: 10px;
}
.thumbnail .item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.thumbnail .item.active {
  filter: brightness(1.2);
}
.thumbnail .item .content {
  position: absolute;
  inset: auto 10px 10px 10px;
  color: white;
  font-weight: 700;
}

@media screen and (max-width: 678px) {
  .thumbnail {
    justify-content: start;
  }
  .slider .list .item .content h2 {
    font-size: 55px;
    font-weight: 700;
  }
  .arrows {
    top: 50%;
  }
}
</style>
