<template>
    <div class="container my-5">
      <h1 class="mb-4 text-center">L'Avocat : Le Fruit Vert de la Santé</h1>
      
      <!-- Image principale -->
      <div class="mb-4 w-50 col-lg-6 col-md-8 col-sm-10 mx-auto">
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src="@/assets/avocats.jpg" class="object-fit-cover w-100 h-auto" alt="Avocats entiers et coupés en deux" />
        </div>
      </div>
  
      <!-- Description et bienfaits -->
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="bg-light p-4">
            <p>L'avocat, souvent considéré comme un super-aliment, est un fruit polyvalent riche en nutriments essentiels. Découvrons ensemble ses bienfaits et comment l'intégrer dans notre alimentation.</p>
            
            <h2 class="mt-4 mb-3">Profil Nutritionnel</h2>
            <div class="mb-4">
              <p>Graisses saines (pour 100g)</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-75"></div>
              </div>
              <p>Fibres</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-25"></div>
              </div>
              <p>Potassium</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-50"></div>
              </div>
            </div>
  
            <h2 class="mt-4 mb-3">Bienfaits pour la Santé</h2>
            <ul class="list-group mb-4">
              <li class="list-group-item"><strong>Santé cardiaque :</strong> Riche en graisses monoinsaturées, bonnes pour le cœur.</li>
              <li class="list-group-item"><strong>Antioxydants :</strong> Contient des composés qui protègent contre le stress oxydatif.</li>
              <li class="list-group-item"><strong>Santé digestive :</strong> Source de fibres favorisant une bonne digestion.</li>
              <li class="list-group-item"><strong>Contrôle du poids :</strong> Procure un sentiment de satiété durable.</li>
              <li class="list-group-item"><strong>Absorption des nutriments :</strong> Aide à l'absorption de certaines vitamines liposolubles.</li>
            </ul>
  
            <h2 class="mt-4 mb-3">Comment Choisir et Conserver un Avocat</h2>
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Choisir un avocat mûr :</h5>
                <p class="card-text">Appuyez doucement sur la peau. Si elle cède légèrement, l'avocat est prêt à être consommé.</p>
                <h5 class="card-title mt-3">Conservation :</h5>
                <p class="card-text">Conservez les avocats mûrs au réfrigérateur jusqu'à 3 jours. Pour accélérer le mûrissement, placez-les dans un sac en papier avec une pomme ou une banane.</p>
              </div>
            </div>
  
            <h2 class="mt-4 mb-3">Recette Rapide : Guacamole Maison</h2>
            <ol>
              <li>Écrasez la chair de 2 avocats mûrs.</li>
              <li>Ajoutez le jus d'un citron vert, 1/2 oignon finement haché, 1 tomate coupée en dés.</li>
              <li>Incorporez une poignée de coriandre ciselée.</li>
              <li>Salez, poivrez, et ajoutez un piment jalapeño haché (facultatif).</li>
              <li>Mélangez délicatement et servez frais avec des chips de maïs.</li>
            </ol>
  
            <div class="alert alert-info mt-4">
              <h4>Astuce :</h4>
              <p>Pour éviter que votre guacamole ne brunisse, laissez le noyau dans la préparation et couvrez d'un film plastique au contact avant de réfrigérer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AvocadoContent'
  }
  </script>
  
  <style scoped>
  .nutrient-bar {
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .nutrient-level {
    height: 100%;
    background-color: #4caf50;
    border-radius: 5px;
  }
  
  .carousel-img {
    object-fit: cover;
    height: 400px;
  }
  </style>
  