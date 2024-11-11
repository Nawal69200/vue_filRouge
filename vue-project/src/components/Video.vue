<template>
  <div class="container my-5">
    <div class="text-center mb-4">
      <h3>Vidéo du jour</h3>
    </div>

    <!-- Section vidéo -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="ratio ratio-16x9">
          <!-- On ne charge l'iframe que si l'utilisateur a accepté les cookies -->
          <iframe 
            v-if="videoSrc" 
            :src="videoSrc" 
            title="YouTube video player" 
            allowfullscreen
            referrerpolicy="strict-origin-when-cross-origin"
            :allow="allowAttributes"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Message informatif sur la gestion des cookies -->
    <div v-if="showConsentBanner" class="cookie-consent-banner text-center my-4">
      <p>Cette vidéo utilise des cookies tiers. Vous pouvez accepter les cookies pour voir la vidéo.</p>
      <button @click="acceptCookies" class="btn btn-success">Accepter</button>
      <button @click="declineCookies" class="btn btn-danger">Refuser</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';

export default {
  name: 'Video',
  setup() {
    const showConsentBanner = ref(false);
    const videoSrc = ref('');
    const allowAttributes = ref('');

    // Vérifie si l'utilisateur a déjà pris une décision concernant les cookies
    onMounted(() => {
      const consentGiven = Cookies.get('user_cookie_consent');
      if (consentGiven === 'accepted') {
        // Si l'utilisateur a accepté, chargez la vidéo
        videoSrc.value = 'https://www.youtube.com/embed/Mkx4iRqcbr4?si=ArEwfaYzLE5BQO-g';
        allowAttributes.value = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      } else {
        // Si l'utilisateur n'a pas encore donné son consentement, affichez la bannière
        showConsentBanner.value = true;
      }
    });

    const isProduction = process.env.NODE_ENV === 'production';

    // Fonction utilisée lorsque l'utilisateur accepte les cookies
    const acceptCookies = () => {
      showConsentBanner.value = false;
      // Charge la vidéo et définit les attributs nécessaires
      videoSrc.value = 'https://www.youtube.com/embed/Mkx4iRqcbr4?si=ArEwfaYzLE5BQO-g';
      allowAttributes.value = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

      // Sauvegarde le consentement dans un cookie avec les attributs SameSite et Secure
      Cookies.set('user_cookie_consent', 'accepted', { expires: 365, sameSite: 'None', secure: isProduction });
    };

    // Fonction utilisée lorsque l'utilisateur refuse les cookies
    const declineCookies = () => {
      showConsentBanner.value = false;
      videoSrc.value = ''; // Ne chargez pas la vidéo si l'utilisateur refuse
      allowAttributes.value = ''; // Réinitialise les attributs d'iframe

      // Sauvegarde le refus dans un cookie
      Cookies.set('user_cookie_consent', 'declined', { expires: 365, sameSite: 'None', secure: isProduction });
    };

    return {
      showConsentBanner,
      videoSrc,
      allowAttributes,
      acceptCookies,
      declineCookies
    };
  }
};
</script>

<style scoped>
.cookie-consent-banner {
  background-color: #000;
  color: #fff;
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
