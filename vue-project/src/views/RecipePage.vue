<template>
  <div class="recipe-details container my-5">
    <div class="row">
      <RecipeTitle :title="recipe.title" />
      <RecipeImage :src="recipe.image" :alt="recipe.alt" />
      <Informations :description="recipe.description" :rating="recipe.rating" :reviews="recipe.reviews" />
      <StepDescription />
      <Ingredient />
      <Informations />
      <RecipeReviews />
      <Comments />
      <CommentForm />
    </div>
  </div>
</template>

<script>
import data from '@/data.json';  
import RecipeTitle from '@/components/RecipeTitle.vue';
import RecipeImage from '@/components/RecipeImage.vue';
import Informations from '@/components/Informations.vue';
import Ingredient from '@/components/Ingredient.vue';
import StepDescription from '@/components/StepDescription.vue';
import RecipeReviews from '@/components/RecipeReviews.vue';
import Comments from '@/components/Comments.vue';
import CommentForm from '@/components/CommentForm.vue';

export default {
  name: 'RecipePage',
  components: {
    RecipeTitle,
    RecipeImage,
    Informations,
    Ingredient,
    StepDescription,
    RecipeReviews,
    Comments,
    CommentForm
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    recipe() {
      return data.find(recipe => recipe.slug === this.slug); // Utiliser 'data' au lieu de 'recipesData'
    }
  }
};
</script>
