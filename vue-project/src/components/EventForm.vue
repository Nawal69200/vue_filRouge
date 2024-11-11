<template>
    <main class="container my-5">
      <div class="form-header mb-5">
        <h1 class="text-center">Formulaire de soumission d'événement</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10 col-sm-12 col-lg-8">
          <div class="custom-form-style p-5">
            <form @submit.prevent="submitEvent">
              <div class="mb-3">
                <label for="eventName" class="form-label">Nom de l'événement *</label>
                <input v-model="event.name" type="text" class="form-control" id="eventName" required />
              </div>
              <div class="mb-3">
                <label for="eventType" class="form-label">Type d'événement *</label>
                <select v-model="event.type" class="form-select" id="eventType" required>
                  <option value="">Choisissez un type</option>
                  <option value="atelier">Atelier de cuisine</option>
                  <option value="degustation">Dégustation</option>
                  <option value="concours">Concours</option>
                  <option value="conference">Conférence</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="startEventDate" class="form-label">Date de début *</label>
                  <input v-model="event.startDate" type="date" class="form-control" id="startEventDate" required />
                </div>
                <div class="col">
                  <label for="endEventDate" class="form-label">Date de fin *</label>
                  <input v-model="event.endDate" type="date" class="form-control" id="endEventDate" required />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="startTime" class="form-label">Heure de début *</label>
                  <input v-model="event.startTime" type="time" class="form-control" id="startTime" required />
                </div>
                <div class="col">
                  <label for="endTime" class="form-label">Heure de fin *</label>
                  <input v-model="event.endTime" type="time" class="form-control" id="endTime" required />
                </div>
              </div>
              <div class="mb-3">
                <label for="eventLocation" class="form-label">Lieu *</label>
                <input v-model="event.location" type="text" class="form-control" id="eventLocation" required />
              </div>
              <div class="mb-3">
                <label for="eventDescription" class="form-label">Description *</label>
                <textarea v-model="event.description" class="form-control" id="eventDescription" rows="4" required></textarea>
              </div>
              <div class="mb-3">
                <label for="eventCapacity" class="form-label">Capacité maximale</label>
                <input v-model="event.capacity" type="number" class="form-control" id="eventCapacity" min="1" />
              </div>
              <div class="mb-3">
                <label for="eventPrice" class="form-label">Prix (€)</label>
                <input v-model="event.price" type="number" class="form-control" id="eventPrice" />
              </div>
              <div class="mb-3">
                <label for="eventImage" class="form-label">Image</label>
                <input type="file" class="form-control" id="eventImage" accept="image/*" @change="handleImageUpload" />
              </div>
              <div class="mb-3">
                <label for="organizerName" class="form-label">Nom de l'organisateur *</label>
                <input v-model="event.organizerName" type="text" class="form-control" id="organizerName" required />
              </div>
              <div class="mb-3">
                <label for="organizerEmail" class="form-label">Email de l'organisateur *</label>
                <input v-model="event.organizerEmail" type="email" class="form-control" id="organizerEmail" required />
              </div>
              <div class="mb-3">
                <label for="organizerPhone" class="form-label">Téléphone de l'organisateur</label>
                <input v-model="event.organizerPhone" type="tel" class="form-control" id="organizerPhone" />
              </div>
              <div class="mb-3 form-check">
                <input v-model="event.termsAccepted" type="checkbox" class="form-check-input" id="termsCheck" required />
                <label class="form-check-label" for="termsCheck">J'accepte les conditions d'utilisation et la politique de confidentialité *</label>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary w-100">Soumettre l'événement</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'EventForm',
    data() {
      return {
        event: {
          name: '',
          type: '',
          startDate: '',
          endDate: '',
          startTime: '',
          endTime: '',
          location: '',
          description: '',
          capacity: '',
          price: '',
          image: null,
          organizerName: '',
          organizerEmail: '',
          organizerPhone: '',
          termsAccepted: false
        }
      };
    },
    methods: {
      handleImageUpload(event) {
        this.event.image = event.target.files[0];
      },
      submitEvent() {
        // Gestion de la soumission du formulaire
        console.log('Événement soumis:', this.event);
        // Ajouter ici la logique pour envoyer l'événement à une API ou le sauvegarder localement
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ton style personnalisé ici */
  </style>
  