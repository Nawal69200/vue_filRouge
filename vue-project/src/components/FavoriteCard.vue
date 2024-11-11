<template>
  <div class="col mb-4">
    <div class="favorites-card card h-100">
      <img 
        :src="favorite.imageSrc" 
        class="favorites-image card-img-top" 
        :alt="favorite.title" 
        @error="imageError($event)" />
      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">{{ favorite.title }}</h5>
          <i class="bi bi-bookmark-heart text-primary"></i>
        </div>
        <p class="card-text">{{ favorite.description }}</p>
        <div class="mt-auto d-flex justify-content-center">
          <!-- Lien vers la recette détaillée avec Vue Router -->
          <router-link :to="favorite.detailLink" class="btn btn-warning">
            Voir la recette
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavoriteCard',
  props: {
    favorite: {
      type: Object,
      required: true,
    },
  },
  methods: {
    imageError(event) {
      event.target.src = 'path/to/default-image.jpg'; // Image par défaut en cas d'erreur
    }
  },
};
</script>

<style scoped>
/* Styles spécifiques pour chaque carte de recette favorite */
</style>
