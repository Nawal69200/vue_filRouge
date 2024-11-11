<template>
  <div v-if="!consentGiven" class="cookie-law-banner">
    <p>{{ message }}</p>
    <div class="buttons">
      <button @click="acceptCookies" class="accept">{{ acceptText }}</button>
      <button @click="declineCookies" class="decline">{{ declineText }}</button>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'VueCookieLaw',
  props: {
    title: { type: String, default: 'Nous utilisons des cookies' },
    message: { type: String, default: "En poursuivant votre navigation, vous acceptez l'utilisation de cookies pour améliorer votre expérience." },
    acceptText: { type: String, default: 'Accepter' },
    declineText: { type: String, default: 'Refuser' },
    expires: { type: Number, default: 365 } // Durée du consentement en jours
  },
  data() {
    return { consentGiven: false };
  },
  created() {
    this.checkConsent();
  },
  methods: {
    checkConsent() {
      const consent = Cookies.get('user_cookie_consent');
      if (consent === 'accepted') {
        this.consentGiven = true;
      } else {
        this.consentGiven = false;
      }
    },
    acceptCookies() {
      const isProduction = process.env.NODE_ENV === 'production';
      Cookies.set('user_cookie_consent', 'accepted', { expires: this.expires, sameSite: 'None', secure: isProduction });
      this.consentGiven = true;
    },
    declineCookies() {
      const isProduction = process.env.NODE_ENV === 'production';
      Cookies.set('user_cookie_consent', 'declined', { expires: this.expires, sameSite: 'None', secure: isProduction });
      this.consentGiven = true;
    }
  }
};
</script>

<style scoped>
.cookie-law-banner {
  background-color: #000;
  color: #fff;
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
.buttons {
  margin-top: 10px;
}
.accept {
  background-color: #4caf50;
  color: white;
  margin-right: 10px;
}
.decline {
  background-color: #f44336;
  color: white;
}
</style>
