<template>
  <section class="contact" id="contact">
    <h1 class="heading"><span>contact</span> us</h1>

    <form @submit.prevent="handleSubmit" data-aos="zoom">
      <div class="inputBox">
        <input type="text" v-model="form.name" placeholder="name" data-aos="fade-up">
        <input type="email" v-model="form.email" placeholder="email" data-aos="fade-up">
      </div>

      <div class="inputBox">
        <input type="number" v-model="form.number" placeholder="number" data-aos="fade-up">
        <input type="text" v-model="form.subject" placeholder="subject" data-aos="fade-up">
      </div>

      <textarea 
        v-model="form.message" 
        placeholder="your message" 
        cols="30" 
        rows="10" 
        data-aos="fade-up"
      ></textarea>

      <input type="submit" value="send message" class="btn">
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  number: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
}
</script>
