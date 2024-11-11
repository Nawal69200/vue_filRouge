<template>
    <div class="recipe-title container my-5">
      <h1 class="text-center mb-4">{{ title }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeTitle',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Style du titre de la recette */
  .recipe-title {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  
  .recipe-title h1 {
    font-weight: bold;
    font-size: 2.5rem; /* ajustez la taille du titre si nécessaire */
  }
  </style>
  