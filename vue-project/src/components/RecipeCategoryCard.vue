<template>
  <div class="col-12 col-md-6 col-lg-3 mb-4">
    <h3 class="mb-4">{{ category }}</h3>
    <div class="card border-black border-5 d-flex flex-column">
      <img :src="image" class="card-img-top object-fit-cover" :alt="alt" />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mt-3">{{ title }}</h5>
        <p class="card-text text-center">{{ description }}</p>
        <div class="mt-auto text-center">
          <div class="d-flex justify-content-center">
            <i v-for="i in 5" :key="i" :class="['bi bi-star' + (i <= rating ? '-fill' : ''), 'text-warning']"></i>
            <span class="ms-2">({{ reviews }} avis)</span>
          </div>
          <div class="mt-3 text-center">
            <a :href="link" class="btn btn-warning mt-3">Voir la recette</a>
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
    category: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    alt: {
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
    rating: {
      type: Number,
      required: true
    },
    reviews: {
      type: Number,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
};
</script>
