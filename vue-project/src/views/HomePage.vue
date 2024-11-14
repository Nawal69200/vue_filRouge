<template>
  <main class="container">
    <div class="text-center">
      <h1 class="p-4">Explorez, cuisinez, dégustez</h1>
      <p>Les meilleures recettes à portée de clic !</p>
    </div>
    <hr>

    <!-- Recette de la semaine -->
    <RecipeCard :recipe="recipeOfTheWeek" />

    <!-- Carousel et catégories de recettes -->
    <AppCarousel :slides="carouselSlides" /> 

    <div class="container my-5">
      <div class="row text-center">
        <RecipeCategoryCard
          v-for="(category, index) in recipeCategories"
          :key="index"
          :category="category.name"
          :image="category.image"
          :alt="category.alt"
          :title="category.title"
          :description="category.description"
          :rating="category.rating"
          :reviews="category.reviews"
          :link="category.link"
        />
      </div>
    </div>

    <!-- Vidéo du jour -->
    <VideoPlayer />

    <!-- Sections de recettes -->
    <RecipeCardSection
      title="Recettes de saisons"
      :recipes="seasonalRecipes"
    />
    <RecipeCardSection
      title="Recettes végétariennes"
      :recipes="vegetarianRecipes"
    />
    <RecipeCardSection
      title="Recettes populaires"
      :recipes="popularRecipes"
    />

    <!-- Derniers Ajouts -->
    <LastRecipe 
      :image="lastRecipe.image"
      :altText="lastRecipe.altText"
      :title="lastRecipe.title"
      :description="lastRecipe.description"
      :reviews="lastRecipe.reviews"
      :rating="lastRecipe.rating"
      :link="lastRecipe.link"
    />

    <!-- Newsletter -->
    <NewsletterForm />
  </main>
</template>

<script>
// Importation des composants nécessaires
import RecipeCard from '@/components/RecipeCard.vue';
import LastRecipe from '@/components/LastRecipe.vue';
import AppCarousel from '@/components/AppCarousel.vue';
import RecipeCategoryCard from '@/components/RecipeCategoryCard.vue';
import VideoPlayer from '@/components/VideoPlayer.vue';
import RecipeCardSection from '@/components/RecipeCardSection.vue';
import NewsletterForm from '@/components/NewsletterForm.vue';

// Importation des images (si nécessaire)
import boeufSauteImage from '@/assets/boeuf_saute.jpg';
import noixImage from '@/assets/noix.jpg';
import avocatsImage from '@/assets/avocats.jpg';
import pimentsImage from '@/assets/piments.jpg';
import sushisImage from '@/assets/sushis2.jpg';
import chakchoukaImage from '@/assets/chakchouka.jpg';
import tarteCocoImage from '@/assets/tarte_coco.jpg';
import mojitoImage from '@/assets/mojito_orange.jpg';
import nouillesImage from '@/assets/nouilles.jpg';
import patesCremeImage from '@/assets/pates_creme.jpg';
import burgerImage from '@/assets/burger.jpg';
import saladePouletImage from '@/assets/salade_poulet-grille.jpg';

export default {
  name: 'HomePage',
  components: {
    RecipeCard,
    AppCarousel,
    RecipeCategoryCard,
    VideoPlayer,
    RecipeCardSection,
    NewsletterForm,
    LastRecipe
  },
  data() {
    return {
      recipeOfTheWeek: {
        image: boeufSauteImage,
        alt: 'Boeuf sauté aux légumes',
        title: 'Boeuf sauté aux légumes et graines de sésame',
        description: 'Découvrez notre délicieux Bœuf Sauté aux Légumes et Graines de Sésame, un plat savoureux...',
        reviews: 12,
        rating: 4,
        link: '/recettes/boeuf_saute'
      },
      carouselSlides: [
        {
          image: noixImage,
          alt: 'Les noix',
          title: 'Pourquoi devrait-on manger davantage de noix ?',
          description: 'Les noix sont riches en acides gras oméga-3, bénéfiques pour la santé cardiovasculaire.',
          link: '/noix'
        },
        {
          image: avocatsImage,
          alt: 'Les avocats',
          title: 'Les bienfaits des avocats',
          description: 'Les avocats contiennent des fibres, aidant à la digestion.',
          link: '/avocat'
        },
        {
          image: pimentsImage,
          alt: 'Les piments',
          title: 'Les vertus du piment',
          description: 'Les piments possèdent des propriétés anti-inflammatoires.',
          link: '/piments'
        }
      ],
      recipeCategories: [
        {
          name: 'Entrées',
          image: sushisImage,
          alt: 'Assiette de sushis',
          title: 'Sushis',
          description: 'Recette de sushis frais et délicieux. Idéale pour débuter votre repas.',
          rating: 4,
          reviews: 15,
          link: '/recettes/sushis'
        },
        {
          name: 'Plats',
          image: chakchoukaImage,
          alt: 'Chakchouka',
          title: 'Chakchouka',
          description: 'Plat maghrébin à base de tomates, d\'oeufs, de poivrons et d\'oignons.',
          rating: 4,
          reviews: 7,
          link: '/recettes/chakchouka'
        },
        {
          name: 'Desserts',
          image: tarteCocoImage,
          alt: 'Tarte à la noix de coco',
          title: 'Tarte à la noix de coco',
          description: 'Délicieuse tarte à la noix de coco, crémeuse et exotique. Un régal.',
          rating: 4.5,
          reviews: 40,
          link: '/recettes/tarte_coco'
        },
        {
          name: 'Boissons',
          image: mojitoImage,
          alt: 'Mojito orange sanguine',
          title: 'Mojito à l\'orange',
          description: 'Un mojito rafraîchissant à l\'orange sanguine, parfait pour l\'été.',
          rating: 4.5,
          reviews: 25,
          link: '/recettes/mojito_orange'
        }
      ],
      seasonalRecipes: [
        {
          title: 'Nouilles aux crevettes et oeufs de caille',
          image: nouillesImage,
          alt: 'Nouilles aux crevettes',
          description: 'Savourez notre plat exquis de Nouilles aux Crevettes et oeufs de cailles, aux herbes fraîches.',
          rating: 4,
          reviews: 7,
          link: '/recettes/nouilles_crevettes'
        }
      ],
      vegetarianRecipes: [
        {
          title: 'Pâtes à la crème',
          image: patesCremeImage,
          alt: 'Pâtes à la crème',
          description: 'Des pâtes à la crème onctueuse, rehaussées de fromage fondu et d\'une touche d\'ail.',
          rating: 4,
          reviews: 12,
          link: '/recettes/pates_creme'
        }
      ],
      popularRecipes: [
        {
          title: 'Burger du chef',
          image: burgerImage,
          alt: 'Burger du chef',
          description: 'Ce burger se distingue par son pain brioché doré et ses tranches juteuses de bœuf.',
          rating: 4.5,
          reviews: 25,
          link: '/recettes/burger'
        }
      ],
      lastRecipe: {
        image: saladePouletImage,
        altText: 'Salade au poulet grillé',
        title: 'Salade gourmande au poulet grillé',
        description: 'Cette salade gourmande au poulet grillé est un mélange parfait de saveurs et de textures. Un repas équilibré et délicieux pour toutes les occasions.',
        reviews: 5,
        rating: 4,
        link: '/recettes/salade_poulet_grille'
      }
    };
  }
};
</script>
