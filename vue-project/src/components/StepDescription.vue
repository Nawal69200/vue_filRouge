<template>
  <div class="card">
    <div class="card-body">
      <h3 class="mb-3 text-center">Préparation</h3>
      <div v-for="(step, index) in steps" :key="index" class="mb-4">
        <h5>{{ step.title }}</h5>
        <p>{{ step.description }}</p>
      </div>
    </div>
    </div>
      
</template>

<script>
export default {
  name: 'StepDescription',
  props: {
    steps: {
      type: Array,
      required: true,
      default: () => [
        { title: 'Étape 1 : Préparer les ingrédients', description: 'Commencez par préparer tous les ingrédients. Coupez les oignons en fines rondelles, tranchez les tomates et préparez les feuilles de laitue. Assurez-vous que la viande hachée soit à température ambiante.' },
        { title: 'Étape 2 : Préparer les galettes de bœuf', description: 'Formez des galettes avec la viande hachée, assaisonnez-les avec du sel et du poivre. Faites chauffer un peu d\'huile dans une poêle à feu moyen et faites cuire les galettes jusqu\'à ce qu\'elles soient bien dorées de chaque côté.' },
        { title: 'Étape 3 : Cuisson des oignons', description: 'Dans la même poêle, ajoutez un peu d\'huile si nécessaire et faites revenir les rondelles d\'oignon jusqu\'à ce qu\'elles soient tendres et légèrement caramélisées.' },
        { title: 'Étape 4 : Assembler les burgers', description: 'Faites griller légèrement les pains à burger. Étalez une fine couche de mayonnaise sur chaque moitié de pain. Placez une feuille de laitue, une tranche de tomate et une galette de bœuf sur la moitié inférieure du pain. Ajoutez quelques rondelles d\'oignon caramélisé et une tranche de fromage si désiré.' },
        { title: 'Étape 5 : Servir', description: 'Recouvrez avec la moitié supérieure du pain à burger. Servez immédiatement avec des frites maison ou une salade verte.' },
        { title: 'Étape 6 : Conseils et variantes', description: 'Pour varier les saveurs, vous pouvez ajouter des pickles, du bacon croustillant ou une sauce barbecue. Pour une option végétarienne, remplacez la galette de bœuf par une galette de légumes.' }
      ]
    }
  }
};
</script>

<style scoped>
</style>
