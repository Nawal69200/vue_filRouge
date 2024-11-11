<template>
  <div class="recipe-page">
    <!-- Détails de la recette -->
    <RecipeDetail />
  </div>
</template>

<script>
import RecipeDetail from '@/components/RecipeDetail.vue';

export default {
  name: 'RecipePage',
  components: {
    RecipeDetail
  }
};
</script>

<style scoped>
</style>
