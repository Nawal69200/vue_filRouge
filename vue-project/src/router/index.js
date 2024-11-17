// Importation du Vue Router pour Vue 3
import { createRouter, createWebHistory } from 'vue-router';

// Importation des vues principales
import HomePage from '@/views/HomePage.vue';
import Events from '@/views/Events.vue';
import GalleryPhotos from '@/views/GalleryPhotos.vue';
import FavoritePages from '@/views/FavoritePages.vue';
import Contact from '@/views/Contact.vue';
import RecipePage from '@/views/RecipePage.vue';

// Importation des composants spécifiques
import EventForm from '@/components/EventForm.vue';
import UseCondition from '@/components/UseCondition.vue';
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';

// Importation des pages spécifiques
import AvocadoContent from '@/views/AvocadoContent.vue';
import NutContent from '@/views/NutContent.vue';
import PeppersContent from '@/views/PeppersContent.vue';

// Importation des pages Connexion et Inscription
import Connexion from '@/views/Connexion.vue';
import Inscription from '@/views/Inscription.vue';

// Définir les routes principales
const routes = [
  { path: '/', name: 'homePage', component: HomePage },
  { path: '/accueil', redirect: '/' },
  { path: '/evenements', name: 'evenements', component: Events },
  { path: '/gallerie_photos', name: 'gallerie_photos', component: GalleryPhotos },
  { path: '/favoris', name: 'favoris', component: FavoritePages },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/connexion', name: 'connexion', component: Connexion },
  { path: '/inscription', name: 'inscription', component: Inscription },
  { path: '/politique-de-confidentialite', name: 'privacyPolicy', component: PrivacyPolicy },
  { path: '/conditions-utilisation', name: 'useCondition', component: UseCondition },
  { path: '/soumettre-evenement', name: 'eventForm', component: EventForm },
  { path: '/avocat', name: 'avocadoContent', component: AvocadoContent },
  { path: '/noix', name: 'nutContent', component: NutContent },
  { path: '/piments', name: 'peppersContent', component: PeppersContent },

  // Ajouter une route dynamique pour les recettes
  { path: '/recettes/:slug', name: 'recipePage', component: RecipePage, props: true },
];

// Création du router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
