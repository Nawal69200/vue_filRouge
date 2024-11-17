<template>
  <div class="card my-3">
    <div class="card-body">
      <!-- Étapes de préparation -->
      <h3 class="mb-3 text-center">Préparation</h3>
      <div v-for="(step, index) in steps" :key="index" class="mb-4">
        <h5>{{ step.title }}</h5>
        <p>{{ step.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeDescription',
  props: {
    steps: {
      type: Array,
      required: true, // Les étapes sont toujours nécessaires
    }
  }
};
</script>

<style scoped>

</style>
