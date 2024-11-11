<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <!-- Navbar Toggle for small screens -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Logo -->
          <router-link class="navbar-brand" to="/">
            <img src="@/components/icons/logo.png" alt="logo" />
          </router-link>

          <!-- Dropdown Menu -->
          <DropdownMenu />

          <!-- Navbar Items -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Accueil</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/evenements">Evénements</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/gallerie_photos">Galerie photos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/favoris">Favoris</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contactez-nous</router-link>
              </li>
            </ul>
            <!-- Search Form -->
            <SearchButton />
          </div>
        </div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer />
  </div>
</template>

<script>
// Importation des composants
import DropdownMenu from './components/DropdownMenu.vue';
import SearchButton from './components/SearchButton.vue';

export default {
  name: 'App',
  components: {
    DropdownMenu,
    SearchButton,
  },
};
</script>
