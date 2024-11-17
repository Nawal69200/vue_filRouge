<template>
  <main class="container my-5">
    <h1 class="text-center mb-5">Mes Recettes Favorites</h1>
    
    <div v-if="favorites.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <div v-for="(recipe, index) in favorites" :key="index" class="col mb-4">
        <div class="favorites-card card h-100">
          <img :src="recipe.image" class="favorites-image card-img-top" :alt="recipe.title">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">{{ recipe.title }}</h5>
              <button @click="removeFromFavorites(index)" class="btn btn-danger btn-sm ms-2">Supprimer</button>
            </div>
            <p class="card-text">{{ recipe.description }}</p>
            <div class="mt-auto d-flex justify-content-center">
              <a :href="recipe.link" class="btn btn-warning">Voir la recette</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else>Aucun favori pour le moment.</p>

    <RecipePage :recipe="favorites[0]" />
  </main>
</template>

<script>
// Images importées pour Vite
import boeufImage from '@/assets/boeuf_saute.jpg';
import sushiImage from '@/assets/sushis2.jpg';
import tarteCocoImage from '@/assets/tarte_coco.jpg';
import burgerImage from '@/assets/burger.jpg';
import nouillesImage from '@/assets/nouilles.jpg';
import saladePouletImage from '@/assets/salade_poulet-grille.jpg';

// Importation du composant RecipePage
import RecipePage from '@/views/RecipePage.vue';

export default {
  name: 'FavoritePages',
  components: {
    RecipePage, // Ajout du composant RecipePage
  },
  data() {
    return {
      defaultFavorites: [
        {
          title: 'Boeuf sauté aux légumes et graines de sésame',
          description: 'Découvrez notre délicieux Bœuf Sauté aux Légumes et Graines de Sésame.',
          image: boeufImage,
          link: '/recettes/boeuf_saute.html',
        },
        {
          title: 'Sushis',
          description: 'Recette de sushis, parfaite pour un début de repas.',
          image: sushiImage,
          link: '/recettes/sushis.html',
        },
        {
          title: 'Tarte à la noix de coco',
          description: 'Délicieuse tarte à la noix de coco, crémeuse et exotique.',
          image: tarteCocoImage,
          link: '/recettes/tarte_coco.html',
        },
        {
          title: 'Burger du chef',
          description: 'Burger avec pain brioché doré et tranches de bœuf de qualité.',
          image: burgerImage,
          link: '/recettes/burger.html',
        },
        {
          title: 'Nouilles aux crevettes et oeufs de caille',
          description: 'Nouilles aux crevettes et œufs de cailles, entre terre et mer.',
          image: nouillesImage,
          link: '/recettes/nouilles_crevettes.html',
        },
        {
          title: 'Salade gourmande au poulet grillé',
          description: 'Salade au poulet grillé avec saveurs et textures variées.',
          image: saladePouletImage,
          link: '/recettes/salade_poulet_grille.html',
        },
      ],
      favorites: [],
    };
  },
  created() {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : this.defaultFavorites;
  },
  methods: {
    addToFavorites(recipe) {
      if (!this.favorites.some(fav => fav.title === recipe.title)) {
        this.favorites.push(recipe);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        console.log('Recette ajoutée aux favoris');
      } else {
        console.log('Recette déjà dans les favoris');
      }
    },
    removeFromFavorites(index) {
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
  },
};
</script>

<style scoped>
/* Ajoutez votre style ici */
</style>
