<template>
  <div class="background">
    <div class="container">
      <h1 class="title">
        ARTIST
      </h1>
      <div
        class="slider-wrapper"
        :class="{ 'animate__animated animate__fadeInDown animate__delay-1s': section2InView }"
      >
        <ul class="image-list" ref="imageList">
          <router-link
            v-for="(image, index) in images"
            :key="index"
            :to="`/artist/${index}`"
            class="image-link"
          >
            <li class="image-item" @mouseover="showPopup(index)">
              <img
                :src="image.src"
                :alt="'img-' + (index + 1)"
                class="hover-image"
                @mouseleave="hidePopup(index)"
              />
              <div class="popup" :class="{ active: image.showPopup }">{{ image.description }}</div>
            </li>
          </router-link>
        </ul>
      </div>
      <div
        class="slider-scrollbar"
        :class="{ 'animate__animated animate__fadeInDown animate__delay-1s': section2InView }"
      >
        <div class="scrollbar-track">
          <div class="scrollbar-thumb" ref="scrollbarThumb"></div>
        </div>
      </div>
      <h1
        class="title2"
        :class="{ 'animate__animated animate__fadeInUp animate__delay-2s': section2InView }"
      >
        Those, who bring art to people
      </h1>
      <h1
        class="title3"
        :class="{ 'animate__animated animate__fadeInUp animate__delay-3s': section2InView }"
      >
        with open eyes and open ears
      </h1>
    </div>
  </div>
</template>

<script>
import 'animate.css'

export default {
  data() {
    return {
      section2InView: false,
      images: [
        {
          src: 'https://e.snmc.io/i/600/s/90365538208c58d25109e5b52bd44651/11492161/taylor-swift-1989-taylors-version-Cover-Art.jpg',
          description: 'Taylor Swift',
          showPopup: false
        },
        {
          src: 'https://i.pinimg.com/564x/d7/03/b8/d703b83b1df5f755d355d623599de3e8.jpg',
          description: 'Billie Eilish',
          showPopup: false
        },
        {
          src: 'https://i.pinimg.com/736x/a1/33/db/a133db3be3edf41ead3bad133e64fd2a.jpg',
          description: 'Ed Sheeran',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 4',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 5',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 6',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 1',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 1',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 1',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 1',
          showPopup: false
        }
      ],
      maxScrollLeft: 0
    }
  },
  mounted() {
    this.initSlider()
    this.observeSection2()
  },
  methods: {
    initSlider() {
      const imageList = this.$refs.imageList
      const slideButtons = document.querySelectorAll('.slider-wrapper .slide-button')
      const sliderScrollbar = document.querySelector('.container .slider-scrollbar')
      const scrollbarThumb = this.$refs.scrollbarThumb
      this.maxScrollLeft = imageList.scrollWidth - imageList.clientWidth

      scrollbarThumb.addEventListener('mousedown', (e) => {
        const startX = e.clientX
        const thumbPosition = scrollbarThumb.offsetLeft
        const maxThumbPosition =
          sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth

        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX
          const newThumbPosition = thumbPosition + deltaX

          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition))
          const scrollPosition = (boundedPosition / maxThumbPosition) * this.maxScrollLeft

          scrollbarThumb.style.left = `${boundedPosition}px`
          imageList.scrollLeft = scrollPosition
        }

        const handleMouseUp = () => {
          document.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseup', handleMouseUp)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
      })

      slideButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const direction = button.id === 'prev-slide' ? -1 : 1
          const scrollAmount = imageList.clientWidth * direction
          imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        })
      })

      const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'flex'
        slideButtons[1].style.display = imageList.scrollLeft >= this.maxScrollLeft ? 'none' : 'flex'
      }

      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft
        const thumbPosition =
          (scrollPosition / this.maxScrollLeft) *
          (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth)
        scrollbarThumb.style.left = `${thumbPosition}px`
      }

      imageList.addEventListener('scroll', () => {
        updateScrollThumbPosition()
        handleSlideButtons()
      })
    },
    showPopup(index) {
      // Hide all popups first
      this.images.forEach((image) => {
        image.showPopup = false
      })
      // Show popup for the hovered image
      this.images[index].showPopup = true
    },
    hidePopup(index) {
      this.images[index].showPopup = false
    },
    observeSection2() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.section2InView = true
              observer.unobserve(this.$el)
            }
          })
        },
        { threshold: 0.2 }
      )
      observer.observe(this.$el)
    }
  }
}
</script>

<style scoped>
.popup {
  text-align: center;
  margin-top: 10px;
  border-radius: 30px;
  padding: 15px;
  position: relative;
  background-color: rgba(21, 22, 22, 0.8);
  color: #fff;
  font-size: 1.2rem;
  font-family: 'Outfit', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 3px;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.5s linear,
    transform 0.8s ease;
  max-width: 100%;
  white-space: normal;
  bottom: -60px;
  z-index: 1;
  transform: translateY(20px);
}

.image-item:hover .popup {
  visibility: visible;
  opacity: 1;
  bottom: 0;
  transform: translateY(0);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.title {
  text-align: center;
  color: #fff;
  font-size: 5rem;
  margin-bottom: 20px;
  font-family: 'Tac One', sans-serif;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 2px;
  animation-duration: 2s; /* don't forget to set a duration! */
}
.title2 {
  position: relative;
  text-align: center;
  color: #797777;
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 2px;
  margin-top: 2%;
  animation-duration: 2s; /* don't forget to set a duration! */
}

.title3 {
  position: relative;
  text-align: center;
  color: #797777;
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 2px;
  animation-duration: 2s; /* don't forget to set a duration! */
}

.background {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #202020;
}

.container {
  max-width: 1200px;
  width: 100%;
  position: absolute;
  top: 250%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slider-wrapper {
  position: relative;
  animation-duration: 2s; /* don't forget to set a duration! */
}

.slider-wrapper .slide-button {
  position: absolute;
  top: 41%;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  z-index: 5;
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 1.6rem;
  background: #000;
  justify-content: center;
  border-radius: 50%;
  transform: translateY(-50%);
}

.slider-wrapper .slide-button:hover {
  background: #404040;
}

.slider-wrapper .slide-button#prev-slide {
  left: -25px;
  display: none;
}

.slider-wrapper .slide-button#next-slide {
  right: -25px;
}

.slider-wrapper .image-list {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 18px;
  font-size: 0;
  list-style: none;
  margin-bottom: 30px;
  overflow-x: auto;
  scrollbar-width: none;
}

.slider-wrapper .image-list::-webkit-scrollbar {
  display: none;
}

.slider-wrapper .image-list .image-item {
  width: 325px;
  height: 400px;
  object-fit: cover;
  overflow: hidden;
}
.hover-image {
  transition: border-radius 0.5s ease;
}

.hover-image:hover {
  border-radius: 50%;
  border: 1px solid rgb(104, 102, 102);
}

.container .slider-scrollbar {
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  animation-duration: 2s; /* don't forget to set a duration! */
}

.slider-scrollbar .scrollbar-track {
  background: #ccc;
  width: 100%;
  height: 2px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  position: relative;
}

.slider-scrollbar:hover .scrollbar-track {
  height: 4px;
}

.slider-scrollbar .scrollbar-thumb {
  position: absolute;
  background: #d4ec4c;
  top: 0;
  bottom: 0;
  width: 30%;
  height: 100%;
  cursor: grab;
  border-radius: inherit;
}

.slider-scrollbar .scrollbar-thumb:active {
  cursor: grabbing;
  height: 8px;
  top: -2px;
}

.slider-scrollbar .scrollbar-thumb::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  bottom: -10px;
}

/* Styles for mobile and tablets */
@media only screen and (max-width: 1023px) {
  .slider-wrapper .slide-button {
    display: none !important;
  }

  .slider-wrapper .image-list {
    gap: 10px;
    margin-bottom: 15px;
    scroll-snap-type: x mandatory;
  }

  .slider-wrapper .image-list .image-item {
    width: 280px;
    height: 380px;
  }

  .slider-scrollbar .scrollbar-thumb {
    width: 15%;
  }
}
</style>
