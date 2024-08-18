<template>
  <div>
    <h1>Please Subscribe to my channel</h1>
  </div>
</template>

<script>
export default {
  name: "ProgressionDetailView",
  mounted() {
    const scripts = [
      "./js/TweenMax.min.js",
      "./js/pixi.min.js",
      "./js/rgbKineticSlider.js",
      "./js/script.js",
    ];
    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
    });
  },
};
</script>


<style scoped>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


</style>