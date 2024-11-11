<template>
  <footer>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <p class="mt-3">© 2024 Recettes X. Tous droits réservés.</p>
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mb-3">
            <!-- Utilisation de router-link pour la navigation interne -->
            <router-link to="/politique-de-confidentialite">Politique de Confidentialité</router-link>
            <span class="d-none d-md-block">|</span>
            <router-link to="/conditions-utilisation">Conditions d'Utilisation</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import UseCondition from './UseCondition.vue';
  import PrivacyPolicy from './PrivacyPolicy.vue';

export default {
  name: "Footer",
  UseCondition,
  PrivacyPolicy
  
};
</script>

<style scoped>
/* Styles pour le footer */
</style>
