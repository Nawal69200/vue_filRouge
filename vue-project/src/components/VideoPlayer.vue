<template>
  <div class="container my-5">
    <div class="text-center mb-4">
      <h3>Vidéo du jour</h3>
    </div>

    <div v-if="cookieConsent" class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="ratio ratio-16x9">
          <!-- Iframe YouTube avec cookies désactivés -->
          <iframe
            src="https://www.youtube-nocookie.com/embed/Mkx4iRqcbr4?si=ArEwfaYzLE5BQO-g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div v-else class="text-center">
      <p>Vous devez accepter les cookies pour visionner cette vidéo.</p>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: 'VideoPlayer',
  data() {
    return {
      cookieConsent: Cookies.get("cookie-consent") === "true", 
    };
  },
};
</script>

<style scoped>
.ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 ratio */
}

.ratio iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-center {
  text-align: center;
}
</style>
