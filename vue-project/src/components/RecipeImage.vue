<template>
  <div class="recipe-image row">
    <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
      <div class="card">
        <img :src="imageSrc" :alt="altText" class="img-fluid rounded img-thumbnail" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeImage',
  props: {
    imageSrc: {
      type: String,
      required: true, 
    },
    altText: {
      type: String,
      default: 'Image de la recette', 
    }
  }
};
</script>

<style scoped>
  .card-img-top2 {
    height: 150px; 
}
</style>
