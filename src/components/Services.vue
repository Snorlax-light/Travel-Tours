<template>
  <section class="services" id="services">
    <h1 class="heading">our <span>services</span></h1>

    <div class="box-container">
      <div 
        v-for="(service, index) in services" 
        :key="index" 
        class="box" 
        data-aos="zoom-in"
      >
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
        <i :class="service.icon"></i>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    icon: 'fas fa-hotel',
    title: 'affordable hotels',
    description: 'Find the perfect accommodation for your budget and comfort.'
  },
  {
    icon: 'fas fa-plane',
    title: 'affordable flight',
    description: 'Book flights at the best prices to your dream destinations.'
  },
  {
    icon: 'fas fa-utensils',
    title: 'affordable meals',
    description: 'Enjoy delicious local cuisine without breaking the bank.'
  },
  {
    icon: 'fas fa-hiking',
    title: 'hiking',
    description: 'Experience breathtaking trails and outdoor adventures.'
  }
])
</script>