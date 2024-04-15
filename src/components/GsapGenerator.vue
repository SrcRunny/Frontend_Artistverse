<template>
  <div class="body">
    <div class="wrapper" ref="wrapper">
      <div class="items" ref="items">
        <div class="item" v-for="(image, index) in images" :key="index" ref="item">
          <img :src="image.url" :alt="image.alt" />
        </div>
      </div>
      <div class="overlay" ref="overlay">
        <h1>Our,</h1>
        <h2> Feature</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  data() {
    return {
      images: [
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        },
        {
          url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&quality=89&ssl=1',
          alt: 'Image 1'
        }
        // Add more image URLs as needed
      ],
      tl: null
    }
  },
  mounted() {
    this.initGSAP()
  },
  methods: {
    initGSAP() {
      gsap.registerPlugin(ScrollTrigger) // Register ScrollTrigger plugin
      this.tl = gsap.timeline()

      this.tl.to(this.$refs.items.querySelectorAll('.item img'), { scale: 1 }, 0)
      this.tl.to(this.$refs.items, { scale: 2, rotate: 0 }, 0)
      this.tl.to(this.$refs.overlay, { height: '100%' }, 0.2)
      this.tl.to(this.$refs.overlay.querySelector('h1'), { scale: 1 }, 0.6)
      this.tl.to(this.$refs.overlay.querySelector('h2'), { scale: 1 }, 0.6)
      this.tl.to(this.$refs.items, { scale: 0.8, opacity: 0.2 }, 0.6)

      ScrollTrigger.create({
        trigger: this.$refs.wrapper,
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true,
        animation: this.tl
      })
    }
  }
}
</script>
<style scoped>
.body {
  background: black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.items {
  width: 130%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.item {
  width: 300px;
  height: 400px;
  margin: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.item:hover {
  transform: scale(1.05);
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.4);
}

.overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 0vh;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: clamp(3rem, 8vw, 10rem);
  overflow: hidden;
}
.overlay h1 {
  transform: scale(0);
}
</style>
