<template>
  <div class="comment-form-section mt-5">
    <h3 class="text-center mb-4">Ajouter un commentaire</h3>
    <form @submit.prevent="submitForm" class="bg-light p-4 mx-auto col-11 col-md-8 col-lg-6">
      <div class="mb-3">
        <label for="username" class="form-label">Nom d'utilisateur</label>
        <input
          v-model="form.username"
          type="text"
          class="form-control"
          id="username"
          name="username"
          autocomplete="username"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Adresse e-mail</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="email"
          name="email"
          autocomplete="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          v-model="form.password"
          type="password"
          class="form-control"
          id="password"
          name="password"
          autocomplete="new-password"
          required
        />
      </div>
      <div class="mb-3">
        <label for="rating" class="form-label">Note</label>
        <select
          v-model="form.rating"
          class="form-select"
          id="rating"
          name="rating"
          autocomplete="off"
          required
        >
          <option value="">Choisir une note</option>
          <option value="5">5 étoiles</option>
          <option value="4">4 étoiles</option>
          <option value="3">3 étoiles</option>
          <option value="2">2 étoiles</option>
          <option value="1">1 étoile</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="comment" class="form-label">Votre commentaire</label>
        <textarea
          v-model="form.comment"
          class="form-control"
          id="comment"
          name="comment"
          rows="5"
          autocomplete="off"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100">Envoyer le commentaire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        rating: '',
        comment: ''
      }
    };
  },
  methods: {
    submitForm() {
      const newComment = {
        ...this.form,
        date: new Date().toLocaleString(),
        id: Date.now()
      };
      this.$emit('comment-submitted', newComment);

      // Réinitialisation du formulaire
      this.form = {
        username: '',
        email: '',
        password: '',
        rating: '',
        comment: ''
      };
    }
  }
};
</script>

<style scoped>
h3 {
    color: #FF6F61;
    font-family: 'Playfair Display', serif;
}
.custom-form-style {
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.6);
    background-color: #FFFFFF;
}
</style>
