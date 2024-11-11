<template>
  <div class="container my-5">
    <h1 class="text-center mb-5">Restons en contact</h1>

    <!-- Composant pour les informations de contact -->
    <ContactInfo />

    <hr />

    <!-- Formulaire de contact -->
    <ContactForm />
  </div>
</template>

<script>
// Importation des composants nécessaires
import ContactInfo from '../components/ContactInfo.vue';
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    ContactInfo,
    ContactForm,
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
</style>
