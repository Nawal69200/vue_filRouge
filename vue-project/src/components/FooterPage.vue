<template>
  <footer>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <p class="mt-3">© 2024 Recettes X. Tous droits réservés.</p>
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mb-3">
            <!-- Utilisation de router-link pour la navigation interne -->
            <router-link to="/politique-de-confidentialite" class="footer-link">Politique de Confidentialité</router-link>
            <!-- Ajout de la classe 'separator' pour espacement autour du '|' -->
            <span class="separator">|</span>
            <router-link to="/conditions-utilisation" class="footer-link">Conditions d'Utilisation</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage"
};
</script>

<style scoped>
.footer-link {
  text-decoration: none;   
  color: #333;             
}

.footer-link:hover {
  color: #FFFFFF;          
  text-decoration: none; 
}

.separator {
  margin: 0 10px;  
}
</style>
