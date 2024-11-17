<template>
  <div class="reviews-summary row mt-3">
    <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center me-2">
          <!-- Étoiles en fonction de la note -->
          <i 
            v-for="n in filledStars" 
            :key="'filled-' + n" 
            class="bi bi-star-fill text-warning"
          ></i>
          <i 
            v-for="n in emptyStars" 
            :key="'empty-' + n" 
            class="bi bi-star text-warning"
          ></i>
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
      validator: value => value >= 0 && value <= 5, // Assure que la note est valide
    },
    totalReviews: {
      type: Number,
      required: true,
      validator: value => value >= 0, // Total d'avis ne peut pas être négatif
    }
  },
  computed: {
    filledStars() {
      // Retourne le nombre d'étoiles pleines (arrondi à l'entier supérieur)
      return Math.floor(this.rating);
    },
    emptyStars() {
      // Retourne le nombre d'étoiles vides
      return 5 - Math.floor(this.rating);
    }
  }
};
</script>
