<template>
  <div class="recipe-details container" v-if="currentRecipe">
    <div class="row">
      <!-- Titre de la recette -->
      <RecipeTitle :title="currentRecipe.title" />

      <!-- Image et avis -->
      <div class="col-12 text-center">
        <RecipeImage 
          v-if="currentRecipe.image" 
          :imageSrc="currentRecipe.image" 
          :altText="currentRecipe.alt || 'Recette'" 
        />
        <RecipeReviews 
          :rating="calculatedRating" 
          :totalReviews="currentRecipe.comments.length" 
        />
      </div>

      <!-- Description et Contenu -->
      <div class="col-md-8">
        <RecipeDescription 
          :description="currentRecipe.description" 
          :steps="currentRecipe.steps" 
        />
      </div>

      <div class="col-md-4">
        <RecipeIngredient 
          v-if="currentRecipe.ingredients" 
          :ingredients="currentRecipe.ingredients" 
        />
        <RecipeInformation 
          v-if="currentRecipe.information"
          :prepTime="currentRecipe.information.prepTime" 
          :cookTime="currentRecipe.information.cookTime" 
          :servings="currentRecipe.information.servings" 
        />
      </div>
    </div>

    <!-- Section des commentaires -->
    <div class="comments-section container my-5">
      <h3 class="text-center mt-5 mb-4">Commentaires</h3>
      <div class="col-md-8 offset-md-2">
        <div 
          v-for="comment in currentRecipe.comments" 
          :key="comment.id" 
          class="card mb-4"
        >
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
                <i 
                  v-for="n in comment.rating" 
                  :key="`filled-${comment.id}-${n}`" 
                  class="bi bi-star-fill"
                ></i>
                <i 
                  v-for="n in (5 - comment.rating)" 
                  :key="`empty-${comment.id}-${n}`" 
                  class="bi bi-star"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Formulaire pour ajouter un commentaire -->
    <div class="comment-form-section mt-5">
      <h3 class="text-center mb-4">Ajouter un commentaire</h3>
      <form 
        @submit.prevent="submitComment" 
        class="bg-light p-4 mx-auto col-11 col-md-8 col-lg-6"
      >
        <div class="mb-3">
          <label for="username" class="form-label">Nom d'utilisateur</label>
          <input
            v-model="commentForm.username"
            type="text"
            class="form-control"
            id="username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Adresse e-mail</label>
          <input
            v-model="commentForm.email"
            type="email"
            class="form-control"
            id="email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="rating" class="form-label">Note</label>
          <select
            v-model="commentForm.rating"
            class="form-select"
            id="rating"
            required
          >
            <option value="">Choisir une note</option>
            <option value="5">5 étoiles</option>
            <option value="4">4 étoiles</option>
            <option value="3">3 étoiles</option>
            <option value="2">2 étoiles</option>
            <option value="1">1 étoile</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="comment" class="form-label">Votre commentaire</label>
          <textarea
            v-model="commentForm.comment"
            class="form-control"
            id="comment"
            rows="5"
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          class="btn btn-primary w-100"
        >
          Envoyer le commentaire
        </button>
      </form>
    </div>
  </div>

  <div v-else class="text-center my-5">
    <p>Recette introuvable. Veuillez vérifier le lien.</p>
  </div>
</template>

<script>
// Import des composants nécessaires
import RecipeTitle from '@/components/RecipeTitle.vue';
import RecipeImage from '@/components/RecipeImage.vue';
import RecipeReviews from '@/components/RecipeReviews.vue';
import RecipeDescription from '@/components/RecipeDescription.vue';
import RecipeIngredient from '@/components/RecipeIngredient.vue';
import RecipeInformation from '@/components/RecipeInformation.vue';

export default {
  name: 'RecipePage',
  components: {
    RecipeTitle,
    RecipeImage,
    RecipeReviews,
    RecipeDescription,
    RecipeIngredient,
    RecipeInformation,
  },

  data() {
    return {
      recipes: [], // Initialiser les recettes vides
      currentRecipe: null, // Recette à afficher
      commentForm: {
        username: '',
        email: '',
        rating: '',
        comment: '',
      },
    };
  },

  computed: {
    calculatedRating() {
      if (!this.currentRecipe || !this.currentRecipe.comments.length) {
        return 0;
      }
      const totalRatings = this.currentRecipe.comments.reduce(
        (sum, comment) => sum + parseInt(comment.rating),
        0
      );
      return (totalRatings / this.currentRecipe.comments.length).toFixed(1);
    },
  },

  created() {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de chargement des données');
        }
        return response.json();
      })
      .then(data => {
        this.recipes = data;

        // Récupérer le slug depuis l'URL
        const slug = this.$route.params.slug;

        // Trouver la recette correspondante
        this.currentRecipe = this.recipes.find(recipe => recipe.slug === slug);

        if (!this.currentRecipe) {
          console.warn('Aucune recette trouvée pour le slug :', slug);
        }
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données :', error);
      });
  },

  methods: {
    submitComment() {
      const newComment = {
        text: this.commentForm.comment,
        date: new Date().toLocaleString(),
        author: this.commentForm.username,
        rating: parseInt(this.commentForm.rating),
        id: Date.now(),
      };

      // Ajouter le commentaire à la recette
      this.currentRecipe.comments.push(newComment);

      // Réinitialisation du formulaire
      this.commentForm = {
        username: '',
        email: '',
        rating: '',
        comment: '',
      };
    },
  },
};
</script>
