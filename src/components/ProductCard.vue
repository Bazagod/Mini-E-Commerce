<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-price">{{ product.price.toFixed(2) }} €</p>
    <p
      class="product-stock"
      :class="{
        'low-stock': product.stock < 5 && product.stock > 0,
        'out-of-stock': product.stock === 0,
      }"
    >
      Stock: {{ product.stock }}
    </p>
    <button
      @click="addProductToCart(product)"
      :disabled="product.stock === 0"
      class="add-to-cart-btn"
      :class="{ 'disabled-btn': product.stock === 0 }"
    >
      {{ product.stock === 0 ? 'Rupture de stock' : 'Ajouter au panier' }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['addProductToCart']),
  },
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  max-width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.product-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price {
  font-size: 1.2rem;
  color: #42b983;
  font-weight: bold;
  margin-bottom: 1rem;
}

.product-stock {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
}

.low-stock {
  color: orange;
  font-weight: bold;
}

.out-of-stock {
  color: red;
  font-weight: bold;
}

.add-to-cart-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover:not(:disabled) {
  background-color: #36a473;
}

.disabled-btn {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
