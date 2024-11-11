<template>
  <div class="my-5">
    <h2 class="text-center mb-4">Envoyez-nous un message</h2>
    
    <!-- Formulaire de contact -->
    <form @submit.prevent="handleSubmit" class="custom-form-style bg-light p-4 mx-auto col-10 col-md-8 col-lg-10" autocomplete="on">
      
      <!-- Champ Nom d'utilisateur -->
      <div class="mb-3">
        <label for="name" class="form-label">Nom d'utilisateur <span class="required">*</span></label>
        <input v-model="form.name" type="text" class="form-control" id="name" name="name" autocomplete="name" required />
      </div>
      
      <!-- Champ Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email <span class="required">*</span></label>
        <input v-model="form.email" type="email" class="form-control" id="email" name="email" autocomplete="email" required />
      </div>
      
      <!-- Champ Sujet -->
      <div class="mb-3">
        <label for="subject" class="form-label">Sujet <span class="required">*</span></label>
        <input v-model="form.subject" type="text" class="form-control" id="subject" name="subject" autocomplete="off" required />
      </div>
      
      <!-- Champ Message -->
      <div class="mb-3">
        <label for="message" class="form-label">Message <span class="required">*</span></label>
        <textarea v-model="form.message" class="form-control" id="message" name="message" rows="5" autocomplete="off" required></textarea>
      </div>
      
      <!-- Bouton de soumission -->
      <!-- Bouton de soumission -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary btn-lg custom-btn w-100">Envoyer</button>
      </div>

    </form>
    
    <!-- Affichage des messages d'erreur -->
    <div v-if="errorMessages.length" class="text-danger text-center mt-3">
      <ul>
        <li v-for="(message, index) in errorMessages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errorMessages: []
    };
  },
  methods: {
    handleSubmit() {
      // Réinitialisation des erreurs précédentes
      this.errorMessages = [];

      // Validation simple des champs
      if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
        this.errorMessages.push('Tous les champs sont obligatoires.');
      }

      // Vérification de l'email (format simple)
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (this.form.email && !emailPattern.test(this.form.email)) {
        this.errorMessages.push('Veuillez entrer un email valide.');
      }

      // Si des erreurs existent, on ne soumet pas le formulaire
      if (this.errorMessages.length > 0) {
        return;
      }

      // Simuler l'envoi des données (exemple)
      console.log('Formulaire soumis:', this.form);

      // Réinitialisation du formulaire
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
/* Styles personnalisés pour le formulaire */
.custom-form-style {
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

/* Ajustement de la hauteur du bouton */
.custom-btn {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.text-center {
  text-align: center;
}

.text-danger {
  color: red;
}

.text-danger ul {
  list-style-type: none;
  padding-left: 0;
}

.text-danger li {
  font-size: 14px;
}

/* Style pour l'astérisque rouge */
.required {
  color: red;
  font-weight: bold;
}
</style>
