<template>
  <div class="container mt-5 text-center">
    <h3 class="mb-4">Recette de la semaine</h3>
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-6">
        <div class="card border-black border-5">
          <div class="card-body">
            <!-- Affichage de l'image de la recette -->
            <img :src="recipe.image" class="card-img-top object-fit-cover" :alt="recipe.alt" />

            <!-- Titre de la recette -->
            <h5 class="card-title mt-3">{{ recipe.title }}</h5>

            <!-- Description de la recette -->
            <p class="card-text">{{ recipe.description }}</p>

            <!-- Affichage des étoiles de notation dynamiquement -->
            <div class="d-flex flex-column align-items-center">
              <div class="d-flex align-items-center">
                <i
                  v-for="n in filledStars"
                  :key="'filled' + n"
                  class="bi bi-star-fill text-warning"
                ></i>
                <i
                  v-for="n in emptyStars"
                  :key="'empty' + n"
                  class="bi bi-star text-warning"
                ></i>
                <span class="ms-2">({{ recipe.reviews }} avis)</span>
              </div>
              
              <!-- Lien vers la recette -->
              <div class="mt-3">
                <router-link :to="recipe.link" class="btn btn-warning">Voir la recette</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  computed: {
    filledStars() {
      return Math.floor(this.recipe.rating); // Calcul des étoiles pleines
    },
    emptyStars() {
      return 5 - this.filledStars; // Calcul des étoiles vides
    }
  }
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>
