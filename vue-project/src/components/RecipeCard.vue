<template>
  <div class="container mt-5 text-center">
    <h3 class="mb-4">Recette de la semaine</h3>
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-6">
        <div class="card border-black border-5">
          <div class="card-body">
            <img :src="recipe.image" class="card-img-top object-fit-cover" :alt="recipe.alt" />
            <h5 class="card-title mt-3">{{ recipe.title }}</h5>
            <p class="card-text">{{ recipe.description }}</p>
            <div class="d-flex flex-column align-items-center">
              <div class="d-flex align-items-center">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star text-warning"></i>
                <i class="bi bi-star text-warning"></i>
                <span class="ms-2">({{ recipe.reviews }} avis)</span>
              </div>
              <div class="mt-3">
                <a :href="recipe.link" class="btn btn-warning">Voir la recette</a>
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
  }
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>
