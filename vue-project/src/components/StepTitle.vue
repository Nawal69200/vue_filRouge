<!-- StepTitle.vue -->
<template>
    <h5>{{ title }}</h5>
  </template>
  
  <script>
  export default {
    name: 'StepTitle',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
 
  