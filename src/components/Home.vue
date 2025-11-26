<template>
  <section class="home" id="home">
    <div class="image" data-aos="fade-down">
      <img :src="homeImage" alt="Travel illustration">
    </div>

    <div class="content" data-aos="fade-up">
      <h3>adventure is worthwhile</h3>
      <p>Discover amazing destinations and create unforgettable memories. Let us guide you through the most breathtaking locations around the world!</p>
      <a href="#packages" class="btn">explore now</a>
    </div>
  </section>
</template>

<script setup>
// Import your image - place home-img.svg in src/assets/images/
// For now using placeholder
const homeImage = '/src/assets/images/home-img.svg'
</script>