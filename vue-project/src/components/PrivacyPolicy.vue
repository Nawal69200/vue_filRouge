<template>
    <main>
      <div class="row my-5">
        <div class="col-lg-8 mx-auto">
          <div class="bg-light p-4 rounded shadow-sm">
            <h1 class="text-center mb-4 bg-secondary">Politique de Confidentialité</h1>
            <p>Bienvenue sur le site Recettes X. Nous attachons une grande importance à la confidentialité de vos informations personnelles et cet avis décrit nos pratiques en matière de confidentialité.</p>
  
            <h2>Collecte des Informations</h2>
            <p>Nous collectons des informations lorsque vous vous inscrivez sur notre site, passez une commande, vous abonnez à notre newsletter ou remplissez un formulaire.</p>
  
            <h2>Utilisation des Informations</h2>
            <p>Toutes les informations que nous collectons auprès de vous peuvent être utilisées pour :</p>
            <ul>
              <li>Personnaliser votre expérience</li>
              <li>Améliorer notre site web</li>
              <li>Améliorer le service client</li>
              <li>Vous envoyer des emails périodiques</li>
            </ul>
  
            <h2>Protection des Informations</h2>
            <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.</p>
  
            <h2>Divulgation à des Tiers</h2>
            <p>Nous ne vendons, n'échangeons ni ne transférons vos informations personnellement identifiables à des tiers. Cela n'inclut pas les tiers de confiance qui nous aident à exploiter notre site Web, tant que ces parties conviennent de garder ces informations confidentielles.</p>
  
            <h2>Consentement</h2>
            <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
  
            <p>Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter via notre 
              <router-link to="/contact" class="text-decoration-none">formulaire de contact</router-link>.
            </p>
  
            <!-- Ajouter le formulaire de contact ici, si nécessaire -->
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  
  export default {
    name: 'PrivacyPolicy',
  };
  </script>
  
  <style scoped>
  </style>
  