<template>
    <div class="recipe-details container my-5">
      <div class="row">
        <!-- Titre de la recette -->
        <RecipeTitle :title="currentRecipe.title" />
  
        <!-- Onglet image avec RecipeImage -->
        <RecipeImage :imageSrc="currentRecipe.image" :altText="currentRecipe.title" />
  
        <!-- Étoiles et avis -->
        <RecipeReviews :rating="currentRecipe.rating" :totalReviews="currentRecipe.reviews" />
      </div>
  
      <!-- Section principale en deux colonnes -->
      <div class="row">
        <!-- Colonne gauche : Détails de la recette -->
        <div class="col-lg-8 col-md-12">
          <!-- Description des étapes de la recette -->
          <StepDescription :steps="currentRecipe.steps" />
        </div>
  
        <!-- Colonne droite : Ingrédients et Informations -->
        <div class="col-lg-4 col-md-12 mt-4 mt-md-0">
          <!-- Onglet Ingrédients -->
          <Ingredient :ingredients="currentRecipe.ingredients" />
  
          <!-- Informations de la recette -->
          <Informations 
            :prepTime="currentRecipe.prepTime"
            :cookTime="currentRecipe.cookTime"
            :servings="currentRecipe.servings"
            :favoritesLink="currentRecipe.favoritesLink"
            @add-to-favorites="addToFavorites" />

        </div>
      </div>
  
      <!-- Section des Commentaires -->
      <Comments />
  
      <!-- Formulaire de commentaire -->
      <div class="comment-form-section mt-5">
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
  import StepTitle from './StepTitle.vue';
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
      StepTitle
    },
    data() {
    return {
      recipes: [
        {
          title: 'Burger du chef',
          rating: 4,
          reviews: 25,
          prepTime: 15,
          cookTime: 15,
          servings: 4,
          image: new URL('@/assets/burger.jpg', import.meta.url).href,
          favoritesLink: '/favorites',
          ingredients: [
            '500g de viande hachée',
            '4 pains à burger',
            '1 oignon',
            '2 tomates',
            'Feuilles de laitue',
            'Mayonnaise',
            'Huile de cuisson',
            'Sel et poivre',
          ],
          steps: [
          { 
            title: 'Étape 1 : Préparer les ingrédients', 
            description: 'Commencez par préparer tous les ingrédients. Coupez les oignons en fines rondelles, tranchez les tomates et préparez les feuilles de laitue. Assurez-vous que la viande hachée soit à température ambiante.'
          },
          { 
            title: 'Étape 2 : Préparer les galettes de bœuf', 
            description: "Formez des galettes avec la viande hachée, assaisonnez-les avec du sel et du poivre. Faites chauffer un peu d'huile dans une poêle à feu moyen et faites cuire les galettes jusqu'à ce qu'elles soient bien dorées de chaque côté."
          },
          { 
            title: 'Étape 3 : Cuisson des oignons', 
            description: "Dans la même poêle, ajoutez un peu d'huile si nécessaire et faites revenir les rondelles d'oignon jusqu'à ce qu'elles soient tendres et légèrement caramélisées."
          },
          { 
            title: 'Étape 4 : Assembler les burgers', 
            description: "Faites griller légèrement les pains à burger. Étalez une fine couche de mayonnaise sur chaque moitié de pain. Placez une feuille de laitue, une tranche de tomate et une galette de bœuf sur la moitié inférieure du pain. Ajoutez quelques rondelles d'oignon caramélisé et une tranche de fromage si désiré."
          },
          { 
            title: 'Étape 5 : Servir', 
            description: "Recouvrez avec la moitié supérieure du pain à burger. Servez immédiatement avec des frites maison ou une salade verte."
          },
          { 
            title: 'Étape 6 : Conseils et variantes', 
            description: "Pour varier les saveurs, vous pouvez ajouter des pickles, du bacon croustillant ou une sauce barbecue. Pour une option végétarienne, remplacez la galette de bœuf par une galette de légumes."
          },
        ]
        },

        {
          title: 'Boeuf sauté aux légumes et graines de sésame',
          rating: 5,
          reviews: 42,
          prepTime: 30,
          cookTime: 45,
          servings: 8,
          image: new URL('@/assets/tarte-citron.jpg', import.meta.url).href,  // Assurez-vous d'ajouter l'image pour la tarte au citron
          favoritesLink: '/favorites',
          ingredients: [
            '1 pâte sablée',
            '4 citrons',
            '150g de sucre',
            '3 œufs',
            '50g de beurre',
            '2 cuillères à soupe de maïzena',
            'Crème chantilly (facultatif)',
          ],
          steps: [
            { title: 'Étape 1 : Préparer la pâte', description: 'Étalez la pâte sablée dans un moule et faites-la cuire à blanc à 180°C pendant 15 minutes.' },
            { title: 'Étape 2 : Préparer la crème au citron', description: 'Dans une casserole, faites chauffer le jus des citrons avec le sucre. Mélangez les œufs et la maïzena dans un bol et incorporez-les au mélange chaud.' },
            { title: 'Étape 3 : Cuisson de la crème au citron', description: 'Faites cuire la préparation à feu doux jusqu’à ce qu’elle épaississe. Ajoutez le beurre et mélangez bien.' },
            { title: 'Étape 4 : Assembler la tarte', description: 'Versez la crème au citron sur la pâte sablée cuite et laissez refroidir.' },
            { title: 'Étape 5 : Décoration', description: 'Ajoutez une touche de crème chantilly sur le dessus de la tarte avant de servir, si désiré.' },
          ]
        }
      ],
        currentRecipeIndex: 0, // Index de la recette actuellement sélectionnée
      };
    },
    computed: {
      currentRecipe() {
        return this.recipes[this.currentRecipeIndex];
      }
    },
    methods: {
      addComment(commentData) {
        axios
          .post('/api/comments', commentData)
          .then((response) => {
            console.log('Commentaire ajouté avec succès', response);
          })
          .catch((error) => {
            console.error("Erreur lors de l'ajout du commentaire", error);
          });
      },
      printRecipe() {
        window.print();
      },
      switchRecipe(index) {
        this.currentRecipeIndex = index;
      },
      addToFavorites() {
        // Récupérer les favoris depuis localStorage
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
        // Vérifier si la recette est déjà dans les favoris
        if (!favorites.some(fav => fav.title === this.currentRecipe.title)) {
          favorites.push(this.currentRecipe);
          localStorage.setItem('favorites', JSON.stringify(favorites));
          console.log('Recette ajoutée aux favoris');
        } else {
          console.log('Recette déjà dans les favoris');
        }
      }
    },
  };
  </script>
  
  <style scoped>
  /* Styles de votre composant */
  </style>
  