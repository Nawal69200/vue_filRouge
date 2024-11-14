<template>
  <div class="container my-5 text-center">
    <h3 class="mb-4">Derniers Ajouts</h3>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-6"> <!-- Ajuster pour la même taille -->
          <div class="card border-black border-5">
            <div class="card-body d-flex flex-column">
              <img :src="image" class="card-img-top object-fit-cover" :alt="altText" />
              <h5 class="card-title mt-3">{{ title }}</h5>
              <p class="card-text">{{ description }}</p>
              <div class="d-flex flex-column align-items-center mt-auto">
                <div class="d-flex align-items-center mb-2">
                  <div class="me-2">
                    <i class="bi bi-star-fill text-warning" v-for="n in filledStars" :key="'filled' + n"></i>
                    <i class="bi bi-star text-warning" v-for="n in emptyStars" :key="'empty' + n"></i>
                  </div>
                  <span>({{ reviews }} avis)</span>
                </div>
                <a :href="link" class="btn btn-warning mt-3">Voir la recette</a>
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
  name: 'LastRecipe',
  props: {
    image: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    reviews: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    filledStars() {
      return Math.floor(this.rating);
    },
    emptyStars() {
      return 5 - this.filledStars;
    }
  }
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>
