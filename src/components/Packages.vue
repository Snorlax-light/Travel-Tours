<template>
  <section class="packages" id="packages">
    <h1 class="heading">our <span>packages</span></h1>

    <div class="box-container">
      <div 
        v-for="(pkg, index) in packages" 
        :key="index" 
        class="box" 
        data-aos="fade-up"
      >
        <div class="image">
          <img :src="pkg.image" :alt="pkg.location">
          <h3>
            <i class="fas fa-map-marker-alt"></i> {{ pkg.location }}
          </h3>
        </div>
        <div class="content">
          <div class="price">
            ${{ pkg.price }}<span>${{ pkg.oldPrice }}</span>
          </div>
          <p>{{ pkg.description }}</p>
          <a href="#" class="btn">book now</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const packages = ref([
  {
    location: 'mumbai',
    image: '/src/assets/images/p-1.jpg',
    price: 290.0,
    oldPrice: 350.99,
    description: 'Experience the vibrant culture and stunning architecture of Mumbai.'
  },
  {
    location: 'hawaii',
    image: '/src/assets/images/p-2.jpg',
    price: 290.0,
    oldPrice: 350.99,
    description: 'Relax on pristine beaches and explore volcanic landscapes.'
  },
  {
    location: 'sydney',
    image: '/src/assets/images/p-3.jpg',
    price: 290.0,
    oldPrice: 350.99,
    description: 'Visit the iconic Opera House and beautiful harbor city.'
  },
  {
    location: 'paris',
    image: '/src/assets/images/p-4.jpg',
    price: 290.0,
    oldPrice: 350.99,
    description: 'Discover the city of lights and romantic destinations.'
  },
  {
    location: 'tokyo',
    image: '/src/assets/images/p-5.jpg',
    price: 290.0,
    oldPrice: 350.99,
    description: 'Immerse yourself in traditional and modern Japanese culture.'
  },
  {
    location: 'egypt',
    image: '/src/assets/images/p-6.jpg',
    price: 290.0,
    oldPrice: 350.99,
    description: 'Explore ancient pyramids and rich historical heritage.'
  }
])
</script>