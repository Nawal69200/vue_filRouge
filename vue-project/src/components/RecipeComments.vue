<template>
  <div class="comments-section container my-5">
    <h3 class="text-center mt-5 mb-4">Commentaires</h3>
    <div class="col-md-8 offset-md-2">
      <!-- Liste des commentaires -->
      <div 
        v-for="comment in comments" 
        :key="`comment-${comment.id}`" 
        class="card mb-4"
      >
        <div class="card-body">
          <p class="card-text">{{ comment.text }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p class="text-muted mb-1">
                <strong>Posté le :</strong> {{ comment.date }}
                <span class="ms-2">
                  <strong>Posté par :</strong> {{ comment.author }}
                </span>
              </p>
            </div>
            <!-- Affichage des étoiles -->
            <div class="text-warning d-flex">
              <i 
                v-for="n in comment.rating" 
                :key="`filled-star-${comment.id}-${n}`" 
                class="bi bi-star-fill"
              ></i>
              <i 
                v-for="n in (5 - comment.rating)" 
                :key="`empty-star-${comment.id}-${n}`" 
                class="bi bi-star"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeComments',
  props: {
    comments: {
      type: Array,
      required: true,
      default: () => [],
    }
  }
};
</script>

<style scoped>
</style>
