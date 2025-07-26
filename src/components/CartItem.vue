<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.title" class="cart-item-image" />
    <div class="cart-item-details">
      <h4 class="cart-item-title">{{ item.title }}</h4>
      <p class="cart-item-price">{{ item.price.toFixed(2) }} €</p>
      <div class="cart-item-quantity-controls">
        <button @click="decreaseQuantity(item.id)" class="quantity-btn">-</button>
        <span class="quantity">{{ item.quantity }}</span>
        <button @click="increaseQuantity(item.id)" class="quantity-btn">+</button>
        <button @click="removeItem(item.id)" class="remove-btn">Supprimer</button>
      </div>
    </div>
    <div class="cart-item-total">Total: {{ (item.price * item.quantity).toFixed(2) }} €</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      increaseQuantity: 'increaseCartItemQuantity',
      decreaseQuantity: 'decreaseCartItemQuantity',
      removeItem: 'removeProductFromCart',
    }),
  },
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 1rem;
  border-radius: 4px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.cart-item-price {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.8rem;
}

.cart-item-quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-btn {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.quantity-btn:hover {
  background-color: #e0e0e0;
}

.quantity {
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.cart-item-total {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 1rem;
  color: #42b983;
}
</style>
