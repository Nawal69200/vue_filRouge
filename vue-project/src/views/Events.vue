<template>
  <div>
    <h1 class="text-center mb-5">Événements culinaires</h1>
    <EventList :events="events" />
    <div class="text-center mt-5">
      <h3>Vous organisez un événement culinaire ?</h3>
      <p>Faites-le nous savoir et nous pourrions le présenter ici !</p>
      <!-- Utilisation de <router-link> pour la navigation interne -->
      <router-link to="/soumettre-evenement" class="btn btn-primary">Soumettre un événement</router-link>
    </div>
  </div>
</template>

<script>
import EventList from '../components/EventList.vue';
import EventCard from '../components/EventCard.vue';

// Importation des images directement
import marcheImage from '@/assets/marche.jpg';
import platImage from '@/assets/plat.jpg';
import painMaisonImage from '@/assets/pain_maison.jpg';

export default {
  name: 'Events',
  components: {
    EventList,
    EventCard,
  },
  data() {
    return {
      events: [
        {
          title: 'Marché chinois éphémère',
          description: 'Un marché en plein air avec des produits italiens authentiques et des dégustations.',
          date: '19-20 août 2024',
          imageSrc: marcheImage,
          detailLink: '/evenements/marche-chinois',
        },
        {
          title: 'Cours de cuisine régionale',
          description: 'Explorez les spécialités de différentes régions italiennes dans ce cours interactif.',
          date: '20 mai 2024',
          imageSrc: platImage,
          detailLink: '/evenements/cours-cuisine',
        },
        {
          title: 'Atelier de fabrication de pain',
          description: 'Apprenez à faire vos pains et découvrez les secrets de la boulangerie artisanale.',
          date: '15 juin 2024',
          imageSrc: painMaisonImage,
          detailLink: '/evenements/atelier-pain',
        },
      ],
    };
  },
};
</script>

<style scoped>
.event-card,
.favorites-card {
  transition: transform 0.3s ease-in-out;
}

.event-card:hover,
.favorites-card:hover {
  transform: translateY(-5px);
}

.event-image,
.favorites-image {
  height: 250px;
  object-fit: cover;
}

.calendar-icon {
  font-size: 2rem;
  color: #dc3545;
}
</style>
