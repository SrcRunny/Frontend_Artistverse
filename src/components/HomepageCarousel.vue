<script lang="ts">
export default {
  data() {
    return {
      activeIndex: 0, 
      items: [
        {
          imageSrc: 'https://cornerstonehomeinspectors.com/wp-content/uploads/2022/09/washing-machine-brands-to-avoid-scaled.jpg',
          title: 'Spin N Send',
          description: 'Your description for Slider 01'
        },
        {
          imageSrc: 'https://cms.otteriwashdry.com/assets/6ddb269f-675e-4a67-89e1-e9a168e6b479',
          title: 'Slider 02',
          description: 'Your description for Slider 01'
        },
        {
          imageSrc: 'https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/in/blog/pc/detail/blog-april/best-fully-automatic-washing-machines/pc.jpg',
          title: 'Slider 03',
          description: 'Your description for Slider 01'
        },
        {
          imageSrc: 'https://www.cincinnati.com/gcdn/-mm-/b7f5ed5d8a6f8cb865868eecfa4798757ab6fe03/c=0-0-2000-1125/local/-/media/2018/07/03/USATODAY/usatsports/Reviewed.com-RvEW-21880-GettyImages-136628195.jpg',
          title: 'Slider 04',
          description: 'Your description for Slider 01'
        },
        {
          imageSrc: 'https://content.abt.com/image.php/ba489d2301eadc993072a86d4919fd19?image=/media/learn/hero-images/washing-machine-buying-guide-hero.jpg',
          title: 'Slider 05',
          description: 'Your description for Slider 01'
        }
      ] as { imageSrc: string; title: string; description: string }[],intervalId: null as number | null
    };
  },
  mounted() {
    this.startAutoRun();
  },
  methods: {
    setActive(index: number) {
      this.activeIndex = index;
    },
    nextSlider() {
      this.activeIndex = (this.activeIndex + 1) % this.items.length;
    },
    prevSlider() {
      this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
    },
    startAutoRun() {
      this.intervalId = setInterval(() => {
        this.nextSlider();
      }, 6000);
    },
    stopAutoRun() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
      }
    }
  },
  beforeUnmount() {
    this.stopAutoRun();
  }
};
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
        <img :src="item.imageSrc" alt="" />
        <div class="content">
          <p>We are</p>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
  
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
        <img :src="item.imageSrc" />
        <div class="content">{{ item.title }}</div>
      </div>
    </div>
</template>

<style scoped>
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

.slider .list .item img {
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
  background-image: linear-gradient(to top, #000 30%, transparent);
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
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;  
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
.slider .list .item.active p:nth-child(3) {
  transform: translateY(30px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent 0.5s 0.7s ease-in-out 1 forwards;
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

.thumbnail{
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

.thumbnail::-webkit-scrollbar{
  width: 0;
}

.thumbnail .item{
  width: 150px;
  height: 220px;
  filter: brightness(0.5);
  transition: 0.5s;
  flex-shrink: 0;
  border-radius: 10px;

}
.thumbnail .item:hover{
  border: rgb(255, 255, 255) 3px solid;
  border-radius: 10px;
}
.thumbnail .item img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  
}

.thumbnail .item.active{
  filter: brightness(1.2);
}
.thumbnail .item .content{
  position: absolute;
  inset: auto 10px 10px 10px;
  color: white;
  font-weight: 700;
}

@media screen and (max-width: 678px){
    .thumbnail{
      justify-content: start;
    }
    .slider .list .item .content h2{
      font-size: 55px;
      font-weight: 700;
    }
    .arrows{
      top: 50%;
    }
}
</style>
