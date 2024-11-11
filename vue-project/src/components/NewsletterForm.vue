<template>
  <form
    method="GET"
    action=""
    class="custom-form-style my-5 bg-light p-4 text-center mx-auto col-11 col-md-10 col-lg-8"
    @submit.prevent="handleSubmit"
    autocomplete="on"  
  >
    <h4 class="text-primary">Abonnez-vous à notre newsletter</h4>
    <label for="email" class="form-label">
      Recevez nos dernières recettes directement dans votre boîte mail.
    </label>
    <div class="input-group mb-3">
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="email"
        placeholder="Entrez votre email"
        required
        autocomplete="email"  
      />
      <button
        id="submit-button"
        class="btn btn-primary"
        type="submit"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
      </button>
    </div>
    <div v-if="message" class="mt-3">{{ message }}</div>
  </form>
</template>

<script>
export default {
  name: 'NewsletterForm',
  data() {
    return {
      email: '',
      message: '',
      isSubmitting: false, // État pour désactiver le bouton
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      if (this.validateEmail(this.email)) {
        // Simuler une requête d'envoi
        setTimeout(() => {
          this.message = 'Merci pour votre abonnement !';
          this.email = '';
          this.isSubmitting = false; // Réactiver le bouton après l'envoi
        }, 1000); // Simulation d'une requête réseau
      } else {
        this.message = 'Veuillez entrer une adresse e-mail valide.';
        this.isSubmitting = false;
      }
    },
    validateEmail(email) {
      // Expression régulière simple pour valider l'adresse email
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  }
};
</script>

<style scoped>
</style>
