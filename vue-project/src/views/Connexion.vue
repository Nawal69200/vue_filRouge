<template>
  <div class="connexion-form">
    <h2>Connexion</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Adresse e-mail</label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>
    <p class="mt-3">
      Pas encore de compte ? <router-link to="/inscription">Inscrivez-vous ici</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Connexion", // Le nom du composant a été mis à jour
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log("Connexion avec", this.email, this.password);
      // Ici, tu pourrais ajouter la logique de connexion (par exemple, appeler une API)
    }
  }
};
</script>

<style scoped>
.connexion-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
