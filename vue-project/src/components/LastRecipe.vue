<template>
  <div class="container my-5 text-center">
    <h3 class="mb-4">Derniers Ajouts</h3>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-6" v-for="recipe in recipes" :key="recipe.slug">
          <div class="card border-black border-5">
            <div class="card-body d-flex flex-column">
              <img :src="recipe.image" class="card-img-top object-fit-cover" :alt="recipe.alt" />
              <h5 class="card-title mt-3">{{ recipe.title }}</h5>
              <p class="card-text">{{ recipe.description }}</p>
              <div class="d-flex flex-column align-items-center mt-auto">
                <div class="d-flex align-items-center mb-2">
                  <div class="me-2">
                    <i class="bi bi-star-fill text-warning" v-for="n in filledStars(recipe.rating)" :key="'filled' + n"></i>
                    <i class="bi bi-star text-warning" v-for="n in emptyStars(recipe.rating)" :key="'empty' + n"></i>
                  </div>
                  <span>({{ recipe.reviews }} avis)</span>
                </div>
                <router-link :to="`/recettes/${recipe.slug}`" class="btn btn-warning mt-3">Voir la recette</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recipeData from '@/data/data.json';

export default {
  name: 'LastRecipe',
  data() {
    return {
      recipes: recipeData  // Charger les recettes depuis le fichier JSON
    };
  },
  methods: {
    filledStars(rating) {
      return Math.floor(rating); // Retourne le nombre de stars pleines
    },
    emptyStars(rating) {
      return 5 - this.filledStars(rating); // Retourne le nombre de stars vides
    }
  }
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>
