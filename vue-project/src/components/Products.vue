<script>
    import axios from 'axios';

    export default {
    data() {
        return {
        products: [],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
        try {
            const response = await axios.get('data.json');
            this.products = response.data;
        } catch (error) {
            console.error(error);
        }
        },
    },
    };
</script>

<template>
    <div>
      <h2>Produits</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }}€
        </li>
      </ul>
    </div>
</template>

