<template>
  <div class="container my-5">
    <div class="row g-3">
      <GalleryItem v-for="(item, index) in galleryItems" 
                   :key="index" 
                   :imageSrc="item.src" 
                   :altText="item.alt" 
                   :className="item.className" />
    </div>
  </div>
</template>

<script>
import GalleryItem from './GalleryItem.vue';

// Importer les images avec des chemins relatifs
import burgerImage from '../assets/burger2.jpg';
import donutsImage from '../assets/donuts.jpg';
import gastronomyImage from '../assets/gastronomie.jpg';
import curryChickenImage from '../assets/poulet_curry.jpg';
import diverseFoodImage from '../assets/divers_aliments.jpg';
import fishImage from '../assets/poisson.jpg';
import grillImage from '../assets/grillades.jpg';
import pizzaImage from '../assets/pizza2.jpg';
import chocolateCakeImage from '../assets/gateau_chocolat.jpg';
import diversePlatesImage from '../assets/divers_plats.jpg';
import pancakeImage from '../assets/pancake.jpg';

export default {
  name: 'Gallery',
  components: {
    GalleryItem,
  },
  data() {
    return {
      galleryItems: [
        { src: burgerImage, alt: 'Burger du chef', className: 'col-md-4 col-sm-6 gallery-item gallery-item-vertical' },
        { src: donutsImage, alt: 'Donuts', className: 'col-md-4 col-sm-6 gallery-item gallery-item-vertical' },
        { src: gastronomyImage, alt: 'Plat gastronomique', className: 'col-md-4 col-sm-6 gallery-item gallery-item-vertical' },
        { src: curryChickenImage, alt: 'Poulet au curry', className: 'col-md-4 col-sm-6 gallery-item gallery-item-square' },
        { src: diverseFoodImage, alt: 'Divers aliments et fruits', className: 'col-md-4 col-sm-6 gallery-item gallery-item-square' },
        { src: fishImage, alt: 'Assiette de poisson', className: 'col-md-4 col-sm-6 gallery-item gallery-item-square' },
        { src: grillImage, alt: 'Brochettes et grillades', className: 'col-md-6 col-sm-6 gallery-item gallery-item-vertical' },
        { src: pizzaImage, alt: 'Pizza au chorizo', className: 'col-md-6 col-sm-6 gallery-item gallery-item-vertical' },
        { src: chocolateCakeImage, alt: 'Gâteau au chocolat', className: 'col-md-4 col-sm-6 gallery-item gallery-item-horizontal' },
        { src: diversePlatesImage, alt: 'Divers plats', className: 'col-md-4 col-sm-6 gallery-item gallery-item-horizontal' },
        { src: pancakeImage, alt: 'Pancake au sirop d\'érable', className: 'col-md-4 col-sm-6 gallery-item gallery-item-horizontal' },
      ],
    };
  },
};
</script>

<style scoped>
/* Styles spécifiques à la galerie */
</style>
