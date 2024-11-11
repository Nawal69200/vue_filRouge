<template>
  <div class="search-form ms-auto">
    <form class="d-flex">
      <input
        v-model="searchQuery"
        class="form-control"
        type="search"
        placeholder="Rechercher"
        aria-label="Search"
        id="searchInput"  
        name="searchQuery" 
      />
      <button class="btn btn-success" type="submit" @click.prevent="handleSearch">
        <i class="bi bi-search"></i> Rechercher
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchButton',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        console.log('Recherche effectuée pour:', this.searchQuery);
      } else {
        console.log('Veuillez entrer une recherche');
      }
    },
  },
};
</script>
<style scoped>
</style>