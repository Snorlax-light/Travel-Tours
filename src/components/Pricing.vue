<template>
  <section class="pricing" id="pricing">
    <h1 class="heading">our <span>pricing</span></h1>

    <div class="box-container">
      <div 
        v-for="(plan, index) in plans" 
        :key="index" 
        class="box" 
        data-aos="zoom-in-up"
      >
        <h3>{{ plan.name }}</h3>
        <div class="price">
          <span>$</span>
          <span class="amount">{{ plan.price }}</span>
          <span>/mo</span>
        </div>
        <ul>
          <li v-for="(feature, idx) in plan.features" :key="idx">
            {{ feature }}
          </li>
        </ul>
        <a href="#" class="btn">choose plan</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const plans = ref([
  {
    name: 'basic plan',
    price: 30,
    features: ['10 days', 'food and drinks', 'safety guide', 'insurance', 'luxury hotel']
  },
  {
    name: 'standard plan',
    price: 50,
    features: ['20 days', 'food and drinks', 'safety guide', 'insurance', 'luxury hotel']
  },
  {
    name: 'premium plan',
    price: 90,
    features: ['30 days', 'food and drinks', 'safety guide', 'insurance', 'luxury hotel']
  }
])
</script>
