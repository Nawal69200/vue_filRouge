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
  
    }
  }
};
</script>

<style scoped>
</style>
