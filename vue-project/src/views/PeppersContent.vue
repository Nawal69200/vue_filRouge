<template>
    <div class="container my-5">
      <h1 class="mb-4 text-center">Les Piments : Un Feu de Saveurs</h1>
  
      <!-- Image principale -->
      <div class="mb-4 w-50 col-lg-6 col-md-8 col-sm-10 mx-auto">
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src="@/assets/piments.jpg" class="object-fit-cover w-100 h-auto" alt="Piments rouges" />
        </div>
      </div>
  
      <!-- Description et bienfaits -->
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="bg-light p-4">
            <p>Les piments, ces petits fruits aux mille et une saveurs, ajoutent du piquant à nos plats et à notre santé. Découvrons ensemble leur univers enflammé !</p>
  
            <h2 class="mt-4 mb-3">Types de Piments Populaires</h2>
            <div class="mb-4">
              <p>Jalapeño</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-25"></div>
              </div>
              <p>Habanero</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-25"></div>
              </div>
              <p>Piment d'Espelette</p>
              <div class="nutrient-bar">
                <div class="nutrient-level w-50"></div>
              </div>
            </div>
  
            <h2 class="mt-4 mb-3">Bienfaits des piments</h2>
            <ul class="list-group mb-4">
              <li class="list-group-item"><strong>Boost métabolique :</strong> La capsaïcine, responsable du piquant, peut accélérer le métabolisme.</li>
              <li class="list-group-item"><strong>Riche en vitamine C :</strong> Excellents pour renforcer le système immunitaire.</li>
              <li class="list-group-item"><strong>Propriétés anti-inflammatoires :</strong> Peuvent aider à réduire l'inflammation dans le corps.</li>
              <li class="list-group-item"><strong>Amélioration de la digestion :</strong> Stimulent la production de sucs gastriques.</li>
            </ul>
  
            <h2 class="mt-4 mb-3">Comment Choisir et Conserver des Piments</h2>
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Choisir des piments frais :</h5>
                <p class="card-text">Recherchez des piments avec une peau lisse et brillante. Ils doivent être fermes au toucher et sans taches ou rides.</p>
                <h5 class="card-title mt-3">Conservation :</h5>
                <p class="card-text">Conservez les piments frais au réfrigérateur dans un sac en plastique perforé pendant une à deux semaines. Pour une conservation plus longue, vous pouvez les congeler ou les sécher.</p>
              </div>
            </div>
  
            <h2 class="mt-4 mb-3">Recette Rapide : Sauce Piquante Maison</h2>
            <ol>
              <li>Mixez 5 piments de votre choix (sans les graines pour moins de piquant).</li>
              <li>Ajoutez 2 gousses d'ail, 1/4 d'oignon, le jus d'un citron vert.</li>
              <li>Salez, poivrez, et ajoutez un filet d'huile d'olive.</li>
              <li>Mixez le tout jusqu'à obtenir une consistance lisse.</li>
            </ol>
  
            <div class="alert alert-info mt-4">
              <h4>Attention !</h4>
              <p>La consommation de piments très forts peut causer des irritations. Commencez doucement et augmentez progressivement votre tolérance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PeppersContent'
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
    background-color: #ff6347; /* Couleur correspondant à la thématique des piments */
    border-radius: 5px;
  }
  
  .carousel-img {
    object-fit: cover;
    height: 400px;
  }
  </style>
  