<template>
    <div class="recipe-title container my-4">
      <h1 class="text-center">{{ title }}</h1>
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
  </style>
  