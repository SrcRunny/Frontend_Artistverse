<template>
  <div>
    <HomepageCarousel></HomepageCarousel>
  </div>
  <div>
    <HomepageContent></HomepageContent>
  </div>

</template>

<script>
import HomepageCarousel from '@/components/HomepageCarousel.vue';
import HomepageContent from '@/components/HomepageContent.vue'
export default {
  name: 'HomepageView',
  components: {
    HomepageCarousel,
    HomepageContent
  },
};
</script>


