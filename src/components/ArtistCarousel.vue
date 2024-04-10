<template>
  <div class="background">
    <div class="container">
      <h1 class="title">ARTIST</h1>
      <div class="slider-wrapper">
        <ul class="image-list" ref="imageList">
          <li v-for="(image, index) in images" :key="index" class="image-item">
            <img
              :src="image.src"
              :alt="'img-' + (index + 1)"
              class="hover-image"
              @mouseover="showPopup(index)"
              @mouseleave="hidePopup(index)"
            />
            <div class="popup" v-if="image.showPopup">{{ image.description }}</div>
          </li>
        </ul>
      </div>
      <div class="slider-scrollbar">
        <div class="scrollbar-track">
          <div class="scrollbar-thumb" ref="scrollbarThumb"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Taylor Swift. sadaskdl;asdasdasdasd asdasdasdasdd',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 2',
          showPopup: false
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/complex/images/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover.png?output-format=jpg&output-quality=auto',
          description: 'Description for image 3',
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
      this.images[index].showPopup = true
    },
    hidePopup(index) {
      this.images[index].showPopup = false
    }
  }
}
</script>

<style scoped>
.popup {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 60px;
  font-size: 14px;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.5s linear;
    max-width: 150px; /* Adjust the max-width as needed */
  white-space: normal; /* Allow text to wrap */
}

.image-item:hover .popup {
  visibility: visible;
  opacity: 1;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slider-wrapper {
  position: relative;
}

.slider-wrapper .slide-button {
  position: absolute;
  top: 50%;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  z-index: 5;
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 2.2rem;
  background: #000;
  align-items: center;
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
}
.container .slider-scrollbar {
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
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
  background: #000;
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
    width: 20%;
  }
}
</style>
