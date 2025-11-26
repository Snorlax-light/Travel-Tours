<template>
  <div>
    <Header />
    <Home />
    <FilterForm />
    <Packages />
    <Services />
    <Pricing />
    <Review />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import FilterForm from './components/FilterForm.vue'
import Packages from './components/Packages.vue'
import Services from './components/Services.vue'
import Pricing from './components/Pricing.vue'
import Review from './components/Review.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Handle scroll behavior
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')
    const loginForm = document.querySelector('.login-form')
    
    if (navbar) navbar.classList.remove('active')
    if (loginForm) loginForm.classList.remove('active')
  })
})
</script>

<style>
@import './assets/styles/main.css';
</style>