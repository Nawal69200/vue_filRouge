<template>
    <div class="container my-5">
      <h1 class="mb-4 text-center">Les Noix : Petits Trésors Nutritifs</h1>
  
      <!-- Image principale -->
      <div class="mb-4 w-50 col-lg-6 col-md-8 col-sm-10 mx-auto">
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src="@/assets/noix.jpg" class="object-fit-cover w-100 h-auto" alt="Différents types de noix" />
        </div>
      </div>
  
      <!-- Description et bienfaits -->
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="bg-light p-4">
            <p>Les noix sont de véritables concentrés de bienfaits pour notre santé. Riches en nutriments essentiels, elles méritent une place de choix dans notre alimentation quotidienne.</p>
  
            <h2 class="mt-4 mb-3">Pourquoi devrions-nous manger davantage de noix ?</h2>
            <div class="mb-4">
              <p>Oméga-3</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-75"></div>
              </div>
              <p class="mb-0">Antioxydants</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-75"></div>
              </div>
              <p>Protéines</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-25"></div>
              </div>
            </div>
  
            <h2 class="mt-4 mb-3">Bienfaits pour la Santé</h2>
            <ul class="list-group mb-4">
              <li class="list-group-item"><strong>Santé cardiaque :</strong> Riches en acides gras oméga-3, elles contribuent à réduire le risque de maladies cardiovasculaires.</li>
              <li class="list-group-item"><strong>Fonction cognitive :</strong> Les antioxydants présents dans les noix peuvent améliorer les performances cérébrales.</li>
              <li class="list-group-item"><strong>Santé osseuse :</strong> Contiennent du calcium, du magnésium et du phosphore, essentiels pour des os solides.</li>
              <li class="list-group-item"><strong>Absorption des nutriments :</strong> Aide à l'absorption de certaines vitamines liposolubles.</li>
              <li class="list-group-item"><strong>Source de protéines :</strong> Excellentes pour les végétariens et végétaliens comme source de protéines végétales.</li>
            </ul>
  
            <h2 class="mt-4 mb-3">Comment Intégrer les Noix dans Votre Alimentation</h2>
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Ajoutez des Noix à Vos Repas Quotidiens :</h5>
                <p class="card-text">Ajoutez des amandes ou des noix de cajou à vos salades pour du croquant et des nutriments. Saupoudrez des noix concassées sur vos plats de pâtes ou de riz pour plus de saveur et de bienfaits.</p>
                <h5 class="card-title mt-3">Intégrez les Noix dans Vos Collations :</h5>
                <p class="card-text">Les noix sont parfaites pour des collations rapides et saines. Mélangez diverses noix avec des fruits secs pour une collation énergétique et équilibrée à tout moment de la journée.</p>
              </div>
            </div>
  
            <h2 class="mt-4 mb-3">Recette Rapide : Granola aux Noix Maison</h2>
            <ul class="list-unstyled">
              <li>✓ 2 tasses de flocons d'avoine</li>
              <li>✓ 1 tasse de noix mixtes hachées (amandes, noix de Grenoble, noisettes)</li>
              <li>✓ 1/4 tasse de miel</li>
              <li>✓ 2 cuillères à soupe d'huile de coco</li>
              <li>✓ 1 cuillère à café de cannelle</li>
            </ul>
  
            <h5>Instructions :</h5>
            <ol>
              <li>Préchauffez le four à 150°C.</li>
              <li>Mélangez tous les ingrédients dans un grand bol.</li>
              <li>Étalez le mélange sur une plaque de cuisson.</li>
              <li>Enfournez pour 20-25 minutes, en remuant à mi-cuisson.</li>
              <li>Laissez refroidir avant de déguster avec du yaourt ou du lait.</li>
            </ol>
  
            <div class="alert alert-info mt-4">
              <h4>Astuce :</h4>
              <p>Pour conserver vos noix plus longtemps et préserver leur saveur, stockez-les dans un récipient hermétique au réfrigérateur. Cela aide à éviter le rancissement des graisses naturelles qu'elles contiennent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NutContent'
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
  