<!-- RecipePage.vue -->
<template>
  <div class="recipe-details container my-5">
    <div class="row">
      <!-- Titre de la recette -->
      <RecipeTitle :title="currentRecipe?.title || 'Chargement...'" />

      <!-- Onglet image avec RecipeImage -->
      <RecipeImage 
        v-if="currentRecipe?.image" 
        :imageSrc="currentRecipe.image" 
        :altText="currentRecipe.alt || 'Recette'" 
      />

      <!-- Étoiles et avis -->
      <RecipeReviews 
        v-if="currentRecipe?.rating !== undefined && currentRecipe?.reviews !== undefined" 
        :rating="currentRecipe.rating" 
        :totalReviews="currentRecipe.reviews" 
      />
    </div>

    <!-- Section principale en deux colonnes -->
    <div class="row">
      <div class="col-lg-8 col-md-12">
        <StepDescription v-if="currentRecipe?.steps" :steps="currentRecipe.steps" />
      </div>

      <div class="col-lg-4 col-md-12 mt-4 mt-md-0">
        <Ingredient v-if="currentRecipe?.ingredients" :ingredients="currentRecipe.ingredients" />
        <Informations 
          v-if="currentRecipe?.prepTime !== undefined && currentRecipe?.cookTime !== undefined && currentRecipe?.servings !== undefined"
          :prepTime="currentRecipe.prepTime"
          :cookTime="currentRecipe.cookTime"
          :servings="currentRecipe.servings"
          :favoritesLink="currentRecipe.favoritesLink"
          @add-to-favorites="addToFavorites" 
        />
      </div>
    </div>

    <!-- Section des commentaires -->
    <Comments v-if="currentRecipe" />
    <div class="comment-form-section mt-5" v-if="currentRecipe">
      <CommentForm @comment-submitted="addComment" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CommentForm from './CommentForm.vue';
import Comments from './Comments.vue';
import RecipeImage from './RecipeImage.vue';
import RecipeTitle from './RecipeTitle.vue';
import RecipeReviews from './RecipeReviews.vue';
import Ingredient from './Ingredient.vue';
import Informations from './Informations.vue';
import StepDescription from './StepDescription.vue';

export default {
  name: 'RecipeDetail',
  components: {
    CommentForm,
    Comments,
    RecipeImage,
    RecipeTitle,
    StepDescription,
    RecipeReviews,
    Ingredient,
    Informations,
  },
  data() {
    return {
      currentRecipeIndex: 0,
      recipes: [
        {
          title: "Boeuf sauté aux légumes et graines de sésame",
          image: "/assets/boeuf_saute.jpg",
          alt: "Boeuf sauté aux légumes",
          reviews: 12,
          rating: 4,
          prepTime: 20,
          cookTime: 15,
          servings: 4,
          ingredients: [
            '500g de bœuf (type sauté)',
            '1 poivron rouge',
            '1 carotte',
            '1 brocoli',
            '2 cuillères à soupe de graines de sésame',
            '3 cuillères à soupe de sauce soja',
            '1 cuillère à soupe de miel',
            '2 gousses d\'ail',
            '1 cuillère à soupe de gingembre râpé',
            'Huile de cuisson',
            'Sel et poivre',
          ],
          steps: [
            { title: 'Étape 1 : Préparer les ingrédients', description: 'Préparez tous les ingrédients.' },
            { title: 'Étape 2 : Dorer le bœuf', description: 'Faites dorer le bœuf dans une poêle.' },
          ]
        },
        // Autres recettes ici...
      ]
    };
  },
  computed: {
    currentRecipe() {
      return this.recipes[this.currentRecipeIndex] || null;
    }
  },
  methods: {
    addToFavorites() {
      // Gérer l'ajout à la liste des favoris
    },
    addComment(comment) {
      // Gérer l'ajout de commentaires
    },
  },
};
</script>
