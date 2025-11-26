<template>
  <section class="review" id="review">
    <h1 class="heading">client's <span>review</span></h1>

    <div class="swiper-container review-slider" data-aos="zoom-in">
      <div class="swiper-wrapper">
        <div 
          v-for="(review, index) in reviews" 
          :key="index" 
          class="swiper-slide slide"
        >
          <img :src="review.image" :alt="review.name">
          <h3>{{ review.name }}</h3>
          <p>{{ review.text }}</p>
          <div class="stars">
            <i v-for="n in 4" :key="n" class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = ref([
  {
    name: 'john deo',
    image: '/src/assets/images/pic-1.png',
    text: 'Amazing experience! The trip was well organized and the destinations were breathtaking. Highly recommend their services!'
  },
  {
    name: 'jane smith',
    image: '/src/assets/images/pic-2.png',
    text: 'Professional service and great value for money. Made our vacation truly memorable and stress-free.'
  },
  {
    name: 'mike johnson',
    image: '/src/assets/images/pic-3.png',
    text: 'Outstanding customer support and fantastic travel packages. Will definitely book with them again!'
  },
  {
    name: 'sarah williams',
    image: '/src/assets/images/pic-4.png',
    text: 'The best travel agency we have used. Everything was perfect from start to finish!'
  }
])

onMounted(() => {
  new Swiper('.review-slider', {
    modules: [Pagination, Autoplay],
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
})
</script>
