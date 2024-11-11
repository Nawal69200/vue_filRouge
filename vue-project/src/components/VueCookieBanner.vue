<!-- VueCookieBanner.vue -->
<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="container text-center">
      <p>
        Ce site utilise des cookies pour améliorer votre expérience.
        <a href="/politique-de-confidentialité" target="_blank">En savoir plus</a>.
      </p>
      <div>
        <button @click="acceptCookies" class="btn btn-primary">Accepter</button>
        <button @click="refuseCookies" class="btn btn-secondary">Refuser</button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'; // Importation statique de js-cookie

export default {
  name: 'VueCookieBanner',
  data() {
    return {
      showBanner: !Cookies.get("cookie-consent"), // Affiche la bannière si le cookie n'existe pas
    };
  },
  methods: {
    acceptCookies() {
      Cookies.set("cookie-consent", "true", { expires: 365 });
      this.showBanner = false; // Cache la bannière après consentement
    },
    refuseCookies() {
      Cookies.set("cookie-consent", "false", { expires: 365 });
      this.showBanner = false; // Cache la bannière après refus
    },
  },
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
  padding: 10px;
  z-index: 9999;
}

.cookie-banner .btn {
  margin-top: 10px;
  margin-right: 10px;
}
</style>
