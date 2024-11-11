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
              v-for="(slide, index) in slides" 
              :key="index" 
              type="button" 
              :data-bs-target="'#carouselExampleCaptions'" 
              :data-bs-slide-to="index" 
              :class="{'active': index === 0}" 
              :aria-current="index === 0 ? 'true' : 'false'" 
              :aria-label="'Slide ' + (index + 1)">
            </button>
          </div>
          <div class="carousel-inner">
            <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{'active': index === 0}">
              <img :src="slide.image" class="d-block w-100 carousel-img" :alt="slide.alt">
              <div class="carousel-caption d-none d-md-block">
                <h5 class="mb-3">{{ slide.title }}</h5>
                <p>{{ slide.description }}</p>
                <router-link :to="slide.link" class="btn btn-outline-warning">Lire plus</router-link>
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
  name: 'AppCarousel',  
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
 
  mounted() {
    this.$nextTick(() => {
      const carouselElement = this.$refs.carousel;
      if (typeof window.bootstrap !== 'undefined' && carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 3000,
          ride: 'carousel'
        });
      } else {
        console.error("Bootstrap n'est pas défini ou la référence du carrousel est introuvable.");
      }
    });
  }
}
</script>

<style scoped>
.carousel-img {
    max-height: 450px;
    object-fit: cover;
}

</style>
