<template>
  <div class="card mt-4">
    <div class="card-body">
      <h3>Informations</h3>
      <p><strong>Temps de préparation :</strong> {{ prepTime }} minutes</p>
      <p><strong>Temps de cuisson :</strong> {{ cookTime }} minutes</p>
      <p><strong>Portions :</strong> {{ servings }}</p>
    </div>
    <div class="my-3 mx-3 d-flex justify-content-start">
  <!-- Bouton Ajouter aux favoris -->
  <button @click="addToFavorites" class="btn btn-outline-primary w-50">
    <i class="bi bi-bookmark-heart me-2"></i> Ajouter aux favoris
  </button>

  <!-- Bouton Imprimer -->
  <button class="btn btn-outline-primary" @click="printRecipe">
    <i class="bi bi-printer me-2"></i> Imprimer
  </button>
</div>
  </div>
</template>

<script>
export default {
  name: 'RecipeInformation',
  props: {
  prepTime: {
    type: [Number, String],
    required: true,
  },
  cookTime: {
    type: [Number, String],
    required: true,
  },
  servings: {
    type: [Number, String],
    required: true,
  }
}
}

</script>

<style scoped>
/* Styles pour le composant Informations */
.card {
  margin-top: 20px;
}
h3 {
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
