<template>
  <div class="container my-5">
    <h3 class="mb-4 text-center">{{ title }}</h3>
    
    <!-- Affichage des recettes -->
    <div class="card border-black border-5 mb-3 mx-auto col-12 col-md-12 col-lg-10" 
         v-for="(recipe, index) in recipes" :key="index">
      <div class="d-flex flex-column flex-md-row h-100">
        
        <!-- Image de la recette -->
        <div class="col-12 col-md-4 d-flex">
          <img :src="recipe.image" 
               class="img-fluid rounded-start w-100 h-100 object-fit-cover" 
               :alt="recipe.alt" />
        </div>

        <!-- Détails de la recette -->
        <div class="col-12 col-md-8 d-flex flex-column">
          <div class="card-body d-flex flex-column">
            <!-- Titre de la recette -->
            <h5 class="card-title">{{ recipe.title }}</h5>

            <!-- Description de la recette -->
            <p class="card-text text-center flex-grow-1">{{ recipe.description }}</p>

            <!-- Affichage des étoiles dynamiquement -->
            <div class="d-flex justify-content-center align-items-center mt-auto">
              <div class="me-2">
                <template v-for="star in 5" :key="star">
                  <i :class="{
                      'bi bi-star-fill text-warning': star <= recipe.rating, 
                      'bi bi-star text-warning': star > recipe.rating
                    }" />
                </template>
              </div>
              <span>({{ recipe.reviews }} avis)</span>
            </div>

            <!-- Lien vers la recette -->
            <div class="mt-3 text-center">
              <router-link :to="recipe.link" class="btn btn-warning">Voir la recette</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeList',
  props: {
    title: {
      type: String,
      required: true
    },
    recipes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* Vous pouvez personnaliser le style ici */
.card-img-top {
  object-fit: cover;
}
</style>
