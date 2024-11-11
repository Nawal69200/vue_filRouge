<template>
  <div>
    <h1 class="text-center mb-5">Galerie de nos meilleures recettes</h1>
    <Gallery />
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue';
import GalleryItem from '../components/GalleryItem.vue';

export default {
  name: 'GalleryPhotos',
  components: {
    Gallery,
    GalleryItem
  },
};
</script>

<style scoped>
.gallery-item img {
  border-radius: 0.7em;
}

.gallery-item img:hover {
  transform: scale(1.1);
  filter: brightness(120%);
}

.gallery-item img:not(:hover) {
  transform: scale(0.9);
  filter: grayscale(100%) sepia(70%);
}

.gallery-item-square {
  aspect-ratio: 1 / 1;
}

.gallery-item-vertical {
  aspect-ratio: 3 / 4;
}

.gallery-item-horizontal {
  aspect-ratio: 4 / 3;
}
</style>
