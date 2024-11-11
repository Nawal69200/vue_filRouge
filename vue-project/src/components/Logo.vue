<template>
  <router-link to="/" class="navbar-brand">
    <img :src="logoSrc" alt="logo" />
  </router-link>
</template>

<script setup>
// Importation du chemin de l'image
import logoSrc from '@/components/icons/logo.png';
</script>

<style scoped>
/* Ajoute des styles spécifiques si nécessaire */
</style>
