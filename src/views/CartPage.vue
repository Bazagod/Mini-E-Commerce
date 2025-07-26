<template>
  <div class="cart-page">
    <h2>Votre Panier</h2>
    <div v-if="cartItems.length === 0" class="empty-cart-message">
      <p>Votre panier est vide.</p>
      <router-link to="/" class="continue-shopping-btn">Continuer vos achats</router-link>
    </div>
    <div v-else class="cart-content">
      <div class="cart-items-list">
        <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
      </div>
      <div class="cart-summary">
        <h3>Résumé du Panier</h3>
        <p class="total">
          Total: <span>{{ cartTotal }} €</span>
        </p>
        <button class="checkout-btn" @click="checkout">Payer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from '../components/CartItem.vue'

export default {
  name: 'CartPage',
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
  },
  methods: {
    checkout() {
      alert(`Procédure de paiement lancée pour un total de ${this.cartTotal} € ! (Non implémenté)`)
    },
  },
}
</script>

<style scoped>
.cart-page {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.empty-cart-message {
  text-align: center;
  padding: 3rem;
  border: 1px dashed #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.empty-cart-message p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.continue-shopping-btn {
  background-color: #42b983;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.continue-shopping-btn:hover {
  background-color: #36a473;
}

.cart-content {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.cart-items-list {
  flex: 3;
  min-width: 300px;
}

.cart-summary {
  flex: 1;
  min-width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
}

.cart-summary h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  text-align: center;
}

.cart-summary .total {
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.cart-summary .total span {
  color: #42b983;
}

.checkout-btn {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .cart-content {
    flex-direction: column;
  }
  .cart-summary {
    width: 100%;
    margin-top: 2rem;
  }
}
</style>
