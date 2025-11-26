<template>
  <header class="header">
    <a href="#" class="logo">
      <i class="fas fa-paper-plane"></i> travel
    </a>

    <div class="icons">
      <div 
        class="fas fa-moon" 
        id="theme-btn"
        :class="{ 'fa-sun': isDarkMode }"
        @click="toggleTheme"
      ></div>
      <div 
        class="fas fa-user" 
        id="login-btn"
        @click="toggleLogin"
      ></div>
      <div 
        class="fas fa-bars" 
        id="menu-btn"
        @click="toggleMenu"
      ></div>
    </div>

    <nav class="navbar" :class="{ active: menuActive }">
      <a href="#home" @click="closeMenus">home</a>
      <a href="#packages" @click="closeMenus">packages</a>
      <a href="#services" @click="closeMenus">services</a>
      <a href="#pricing" @click="closeMenus">pricing</a>
      <a href="#review" @click="closeMenus">review</a>
      <a href="#contact" @click="closeMenus">contact</a>
    </nav>

    <form class="login-form" :class="{ active: loginActive }" @submit.prevent="handleLogin">
      <div class="inputBox">
        <span>username</span>
        <input type="text" v-model="username" placeholder="enter your name">
      </div>

      <div class="inputBox">
        <span>password</span>
        <input type="password" v-model="password" placeholder="enter your password">
      </div>

      <div class="remember">
        <input type="checkbox" v-model="rememberMe" id="login-remember">
        <label for="login-remember">remember me</label>
      </div>

      <input type="submit" value="login" class="btn">
    </form>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuActive = ref(false)
const loginActive = ref(false)
const isDarkMode = ref(false)
const username = ref('')
const password = ref('')
const rememberMe = ref(false)

const toggleMenu = () => {
  menuActive.value = !menuActive.value
  loginActive.value = false
}

const toggleLogin = () => {
  loginActive.value = !loginActive.value
  menuActive.value = false
}

const closeMenus = () => {
  menuActive.value = false
  loginActive.value = false
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('active')
}

const handleLogin = () => {
  console.log('Login attempt:', { username: username.value, rememberMe: rememberMe.value })
  // Add your login logic here
}
</script>