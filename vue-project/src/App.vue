<!-- App.vue -->
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
          <LogoComponent />

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

    <!-- Main Content Area -->
    <main>
      <router-view />
    </main>

    <!-- Cookie Consent Banner -->
    <VueCookieBanner />

    <!-- Footer -->
    <footer>
      <FooterPage />
    </footer>
  </div>
</template>

<script>
// Import des composants nécessaires
import DropdownMenu from '@/components/DropdownMenu.vue';
import SearchButton from '@/components/SearchButton.vue';
import VueCookieBanner from '@/components/VueCookieBanner.vue'; 
import LogoComponent from '@/components/LogoComponent.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'AppComponent',
  components: {
    DropdownMenu,
    SearchButton,
    VueCookieBanner,
    LogoComponent,
    FooterPage
  },
};
</script>

<style scoped>
/* Style global pour supprimer le soulignement et changer la couleur des liens */
router-link {
  text-decoration: none;  /* Supprime le soulignement */
  color: #333333;;         /* Hérite de la couleur du texte */
}

router-link:hover {
  color: #FFFFFF; /* Une couleur personnalisée pour le survol */
  text-decoration: underline; /* Ajouter un soulignement au survol si souhaité */
}
</style>
