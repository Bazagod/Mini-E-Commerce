import { createStore } from 'vuex'
import axios from 'axios' // Importe Axios

const store = createStore({
  state() {
    return {
      products: [],
      cart: [],
      loading: false,
      error: null,
    }
  },
  mutations: {
    // Met à jour la liste des produits
    setProducts(state, products) {
      state.products = products
    },
    // Ajoute ou met à jour un produit dans le panier
    addToCart(state, { product, quantity }) {
      const item = state.cart.find((item) => item.id === product.id)
      if (item) {
        item.quantity += quantity
      } else {
        state.cart.push({ ...product, quantity })
      }
    },
    // Retire un produit du panier
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
    },
    // Incrémente la quantité d'un produit dans le panier
    incrementItemQuantity(state, productId) {
      const item = state.cart.find((item) => item.id === productId)
      if (item) {
        item.quantity++
      }
    },
    // Décrémente la quantité d'un produit dans le panier
    decrementItemQuantity(state, productId) {
      const item = state.cart.find((item) => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
      } else if (item && item.quantity === 1) {
        // Si la quantité est 1, on le retire complètement du panier
        state.cart = state.cart.filter((item) => item.id !== productId)
      }
    },

    setLoading(state, status) {
      state.loading = status
    },

    setError(state, error) {
      state.error = error
    },
  },
  actions: {
    // Récupère les produits depuis l'API
    async fetchProducts({ commit }) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        // Simule un stock initial pour chaque produit
        const productsWithStock = response.data.map((product) => ({
          ...product,
          stock: Math.floor(Math.random() * 10) + 5, // Stock entre 5 et 14
        }))
        commit('setProducts', productsWithStock)
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error)
        commit('setError', 'Impossible de charger les produits. Veuillez réessayer plus tard.')
      } finally {
        commit('setLoading', false)
      }
    },

    addProductToCart({ commit, state }, productToAdd) {
      const productInStore = state.products.find((p) => p.id === productToAdd.id)

      if (productInStore && productInStore.stock > 0) {
        commit('addToCart', { product: productToAdd, quantity: 1 })
        const updatedProducts = state.products.map((p) =>
          p.id === productToAdd.id ? { ...p, stock: p.stock - 1 } : p,
        )
        commit('setProducts', updatedProducts)
      } else {
        alert('Produit en rupture de stock!')
      }
    },

    removeProductFromCart({ commit, state }, productId) {
      const cartItem = state.cart.find((item) => item.id === productId)
      if (cartItem) {
        commit('removeFromCart', productId)

        const updatedProducts = state.products.map((p) =>
          p.id === productId ? { ...p, stock: p.stock + cartItem.quantity } : p,
        )
        commit('setProducts', updatedProducts)
      }
    },

    increaseCartItemQuantity({ commit, state }, productId) {
      const productInStore = state.products.find((p) => p.id === productId)
      if (productInStore && productInStore.stock > 0) {
        commit('incrementItemQuantity', productId)

        const updatedProducts = state.products.map((p) =>
          p.id === productId ? { ...p, stock: p.stock - 1 } : p,
        )
        commit('setProducts', updatedProducts)
      } else {
        alert('Stock insuffisant pour ajouter plus de ce produit.')
      }
    },

    decreaseCartItemQuantity({ commit, state }, productId) {
      const cartItem = state.cart.find((item) => item.id === productId)
      if (cartItem && cartItem.quantity > 0) {
        commit('decrementItemQuantity', productId)

        const updatedProducts = state.products.map((p) =>
          p.id === productId ? { ...p, stock: p.stock + 1 } : p,
        )
        commit('setProducts', updatedProducts)
      }
    },
  },
  getters: {
    // Retourne tous les produits
    allProducts: (state) => state.products,
    // Retourne les produits dans le panier avec tous leurs détails
    cartItems: (state) => {
      return state.cart.map((cartItem) => {
        const product = state.products.find((p) => p.id === cartItem.id)
        return { ...product, quantity: cartItem.quantity }
      })
    },
    // Calcule le total du panier
    cartTotal: (state, getters) => {
      return getters.cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)
    },
    // Nombre total d'articles dans le panier (pour l'icône)
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    },
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },
})

export default store
