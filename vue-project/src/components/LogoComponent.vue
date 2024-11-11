<!-- LogoComponent.vue -->
<template>
  <router-link to="/" class="navbar-brand">
    <img :src="logoSrc" alt="logo" />
  </router-link>
</template>

<script setup>
// Import the logo image from the assets folder
import logoSrc from '@/assets/logo.png';
</script>

<style scoped>
/* Add any specific styles for the logo component */
</style>
