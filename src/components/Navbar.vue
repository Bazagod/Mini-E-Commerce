<template>
    <nav class="navbar">
        <router-link to="/" class="navbar-brand">Mini E-Commerce</router-link>
        <div class="navbar-links">
            <router-link to="/">Produits</router-link>
            <router-link to="/cart" class="cart-link">
                Panier ({{ cartItemCount }})
            </router-link>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Navbar',
    computed: {
        ...mapGetters(['cartItemCount'])
    }
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #2c3e50;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
}

.navbar-links a {
    color: white;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.navbar-links a:hover {
    color: #42b983;
}

.cart-link {
    background-color: #42b983;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    font-weight: bold;
}
</style>