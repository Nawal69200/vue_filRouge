<template>
  <div class="card mt-3"> 
    <div class="card-body">
      <h3 class="mb-3">Ingrédients</h3>
      <ul class="list-unstyled">
        <li v-for="ingredient in ingredients" :key="ingredient">
          <i class="bi bi-check-circle me-2"></i>{{ ingredient }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeIngredient',
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
};
</script>
