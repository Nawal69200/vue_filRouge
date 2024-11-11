<template>
    <div class="reviews-summary row mt-3">
      <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center me-2">
            <!-- Étoiles en fonction de la note -->
            <i v-for="n in filledStars" :key="'filled-' + n" class="bi bi-star-fill text-warning"></i>
            <i v-for="n in emptyStars" :key="'empty-' + n" class="bi bi-star text-warning"></i>
          </div>
          <span>({{ totalReviews }} avis)</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeReviews',
    props: {
      rating: {
        type: Number,
        required: true,
        default: 0  // Note moyenne de 0 à 5
      },
      totalReviews: {
        type: Number,
        required: true,
        default: 0  // Nombre total d'avis
      }
    },
    computed: {
      filledStars() {
        return Math.round(this.rating); // Étoiles pleines en fonction de la note moyenne
      },
      emptyStars() {
        return 5 - Math.round(this.rating); // Étoiles vides pour compléter jusqu'à 5
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  