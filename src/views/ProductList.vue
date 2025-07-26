<template>
  <div class="product-list-page">
    <h2>Nos Produits</h2>
    <p v-if="isLoading" class="loading-message">Chargement des produits...</p>
    <p v-if="hasError" class="error-message">{{ hasError }}</p>
    <div v-else class="product-grid">
      <ProductCard v-for="product in allProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(['allProducts', 'isLoading', 'hasError']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  created() {
    // Récupère les produits dès que le composant est créé
    this.fetchProducts()
  },
}
</script>

<style scoped>
.product-list-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.loading-message,
.error-message {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}

.error-message {
  color: red;
  font-weight: bold;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
