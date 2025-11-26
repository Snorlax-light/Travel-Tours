<template>
  <section class="form-container" data-aos="zoom-in">
    <form @submit.prevent="handleBooking">
      <div class="inputBox">
        <span>where to</span>
        <input type="text" v-model="destination" placeholder="search places">
      </div>

      <div class="inputBox">
        <span>arrivals</span>
        <input type="date" v-model="arrivalDate">
      </div>

      <div class="inputBox">
        <span>leaving</span>
        <input type="date" v-model="leavingDate">
      </div>

      <input type="submit" value="book now" class="btn">
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const destination = ref('')
const arrivalDate = ref('')
const leavingDate = ref('')

const handleBooking = () => {
  console.log('Booking:', { destination: destination.value, arrivalDate: arrivalDate.value, leavingDate: leavingDate.value })
}
</script>