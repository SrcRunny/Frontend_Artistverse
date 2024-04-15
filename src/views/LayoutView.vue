<template>
  <div class="layout">
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
    GsapGenerator
    // EmotionSection
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

.section1,
.section2 {
  flex: 1;
}

</style>
