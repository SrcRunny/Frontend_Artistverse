<template>
  <div class="layout-container">
    <div class="section1">
      <GsapGenerator></GsapGenerator>
    </div>
    <div class="section2">
      <ArtistCarousel></ArtistCarousel>
    </div>
  </div>
</template>

<script>
import ArtistCarousel from '../components/ArtistCarousel.vue'
import GsapGenerator from '@/components/GsapGenerator.vue'

// import EmotionSection from '../components/EmotionSection.vue'

export default {
  name: 'LayoutView',
  components: {
    ArtistCarousel,
    GsapGenerator,
    // EmotionSection
  }
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section1,
.section2 {
  width: 100%; /* Adjust width as needed */
  padding: 20px; /* Add padding for spacing */
}
</style>