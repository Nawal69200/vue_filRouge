<template>
  <main>
    <div class="my-5">
      <h1 class="text-center">Rejoignez notre communauté</h1>

      <div class="custom-form-style bg-light p-4 mx-auto col-10 col-md-6 col-lg-4">
        <form @submit.prevent="handleSubmit" id="inscriptionForm">
          <div class="mb-3">
            <label for="username" class="form-label">Nom d'utilisateur</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              name="username"
              required
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Adresse e-mail</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              name="email"
              required
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Mot de passe</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              name="password"
              required
            />
          </div>

          <div class="mb-3">
            <label for="confirm-password" class="form-label">Confirmer le mot de passe</label>
            <input
              type="password"
              class="form-control"
              id="confirm-password"
              v-model="confirmPassword"
              name="confirm-password"
              required
            />
          </div>

          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="newsletter"
              v-model="newsletter"
              name="newsletter"
            />
            <label class="form-check-label" for="newsletter">
              Je souhaite recevoir la newsletter
            </label>
          </div>

          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="terms"
              v-model="termsAccepted"
              name="terms"
              required
            />
            <label class="form-check-label" for="terms">
              J'accepte les <router-link to="/conditions-utilisation">conditions d'utilisation</router-link> et la
              <router-link to="/politique-de-confidentialite">politique de confidentialité</router-link>
            </label>
          </div>

          <div>
            <button type="submit" class="btn btn-danger btn-lg w-100">S'inscrire</button>
          </div>
        </form>

        <hr class="my-4" />

        <p class="text-center">
          Vous avez déjà un compte ? <router-link to="/connexion">Connectez-vous ici</router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Inscription", 
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      newsletter: false,
      termsAccepted: false,
    };
  },
  methods: {
    handleSubmit() {
      if (this.password !== this.confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }

      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
        newsletter: this.newsletter,
        termsAccepted: this.termsAccepted,
      };

      console.log("Données d'inscription:", userData);
    },
  },
};
</script>

<style scoped>
.custom-form-style {
  max-width: 500px;
  margin: 0 auto;
}
</style>
