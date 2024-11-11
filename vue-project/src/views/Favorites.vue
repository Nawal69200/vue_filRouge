<template>
  <div>
    <h2>Vos favoris</h2>
    <ul v-if="favorites.length > 0">
      <li v-for="(recipe, index) in favorites" :key="index">
        {{ recipe.title }}
        <button @click="removeFromFavorites(index)" class="btn btn-danger btn-sm ms-2">Supprimer</button>
      </li>
    </ul>
    <p v-else>Aucun favori pour le moment.</p>

    <RecipeDetail @add-to-favorites="addToFavorites" />
  </div>
</template>

<script>
import RecipeDetail from '@/components/RecipeDetail.vue';

export default {
  name: 'Favorites',
  components: {
    RecipeDetail
  },
  data() {
    return {
      favorites: []
    };
  },
  created() {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
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
    }
  }
};
</script>

<style scoped>
</style>
