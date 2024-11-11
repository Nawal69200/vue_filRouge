<template>
  <div class="comments-section container my-5">
    <h3 class="text-center mt-5 mb-4">Commentaires</h3>
    <div class="col-md-8 offset-md-2">
      <div v-for="comment in comments" :key="comment.id" class="card mb-4">
        <div class="card-body">
          <p class="card-text">{{ comment.text }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p class="text-muted mb-1">
                <strong>Posté le :</strong> {{ comment.date }}
                <span class="ms-2"><strong>Posté par :</strong> {{ comment.author }}</span>
              </p>
            </div>
            <div class="text-warning d-flex">
              <i v-for="n in comment.rating" :key="n" class="bi bi-star-fill"></i>
              <i v-for="n in (5 - comment.rating)" :key="n" class="bi bi-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  data() {
    return {
      comments: [
        {
          id: 1,
          text: 'Un plat délicieux !...',
          date: '15 juin 2024 à 14:35',
          author: 'Marie69',
          rating: 4
        },
        {
          id: 2,
          text: 'Excellent !...',
          date: '10 juin 2023 à 09:22',
          author: 'JeanDupont',
          rating: 4
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Style pour les commentaires */
</style>
