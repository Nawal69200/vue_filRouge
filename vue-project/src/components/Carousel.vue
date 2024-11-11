<template>
  <div class="container mt-5">
    <div class="text-center mb-4">
      <h3>Actus, tendance</h3>
    </div>
    <div class="row justify-content-center">
      <div class="col-11 col-md-10 col-lg-8">
        <div id="carouselExampleCaptions" class="carousel slide" ref="carousel">
          <div class="carousel-indicators">
            <button
              v-for="(item, index) in slides"
              :key="index"
              type="button"
              :data-bs-target="'#carouselExampleCaptions'"
              :data-bs-slide-to="index"
              :class="index === 0 ? 'active' : ''"
              :aria-current="index === 0 ? 'true' : 'false'"
              :aria-label="'Slide ' + (index + 1)"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              v-for="(item, index) in slides"
              :key="index"
              :class="['carousel-item', index === 0 ? 'active' : '']"
            >
              <img :src="item.image" class="d-block w-100 carousel-img" :alt="item.alt" />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="mb-3">{{ item.title }}</h5>
                <p>{{ item.description }}</p>
                <a :href="item.link" class="btn btn-outline-warning">Lire plus</a>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Précédent</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
 
  mounted() {
  this.$nextTick(() => {
    // Vérifie si Bootstrap est bien chargé
    if (typeof bootstrap !== 'undefined') {
      // Initialisation du carrousel avec un intervalle de 3 secondes (3000ms)
      const carousel = new bootstrap.Carousel(this.$refs.carousel, {
        interval: 3000, // Intervalle de 3 secondes
        ride: 'carousel' // Active le défilement automatique dès le début
      });
    } else {
      console.error("Bootstrap n'est pas défini.");
    }
  });
}

}
</script>

<style scoped>
.carousel-img {
  object-fit: cover;
}
</style>
