🛍️ Mini E-commerce en Vue.js

Un projet de démonstration de site e-commerce simplifié, axé sur la gestion du catalogue de produits et un panier d'achats fonctionnel, construit avec Vue 3, Vuex et Axios.

🚀 Fonctionnalités

    Catalogue de Produits : Affiche une liste de produits récupérés depuis une API factice.

    Détails des Produits : Chaque produit affiche son nom, prix, image et un stock simulé.

    Panier d'Achats :

        Ajout de produits au panier.

        Augmentation/diminution de la quantité d'un produit dans le panier.

        Suppression complète d'un produit du panier.

        Calcul du total du panier en temps réel.

    Gestion de Stock Simulée : Le stock des produits est décrémenté lors de l'ajout au panier et incrémenté lors du retrait.

    Navigation : Utilise Vue Router pour basculer entre la page des produits et la page du panier.

    Gestion d'État Centralisée : Tous les états de l'application (produits, panier, chargement, erreurs) sont gérés par Vuex.

    Requêtes API : Utilise Axios pour communiquer avec une API REST factice.

🛠️ Technologies Utilisées

    Vue.js 3 : Le framework JavaScript progressif pour construire les interfaces utilisateur.

    Vuex : Bibliothèque de gestion d'état centralisée pour Vue.js.

    Vue Router : Le routeur officiel pour Vue.js.

    Vite : Un outil de build nouvelle génération pour un développement frontal rapide.

    Axios : Un client HTTP basé sur des promesses pour le navigateur et Node.js.

    Fake Store API : Utilisée pour récupérer des données de produits simulées.

⚙️ Installation et Démarrage

Suis ces étapes pour configurer et lancer le projet sur ta machine locale.

Prérequis

    Node.js (version 16 ou supérieure recommandée)

    npm (normalement inclus avec Node.js)

Étapes

    Clone le dépôt :
    Bash

git clone https://github.com/ton-utilisateur/ton-repo.git
cd ton-repo # Navigue dans le dossier de ton projet

(N'oublie pas de remplacer ton-utilisateur/ton-repo.git par l'URL réelle de ton dépôt GitHub)

Installe les dépendances :
Bash

npm install

Lance le serveur de développement :
Bash

npm run dev

L'application sera accessible dans ton navigateur à l'adresse http://localhost:5173/ (ou un autre port si le 5173 est déjà utilisé).

Construire pour la production (Optionnel) :
Pour générer une version optimisée de l'application pour la production :
Bash

    npm run build

    Les fichiers de build seront générés dans le dossier dist/.

📂 Structure du Projet

vue-ecommerce/
├── public/                 # Fichiers statiques
├── src/
│   ├── assets/             # Styles globaux, images
│   │   └── main.css
│   ├── components/         # Composants réutilisables (ProductCard, CartItem, Navbar)
│   │   ├── CartItem.vue
│   │   ├── Navbar.vue
│   │   └── ProductCard.vue
│   ├── router/             # Configuration de Vue Router
│   │   └── index.js
│   ├── store/              # Configuration de Vuex (état global de l'application)
│   │   └── index.js
│   ├── views/              # Pages/Vues principales (ProductList, CartPage)
│   │   ├── CartPage.vue
│   │   └── ProductList.vue
│   ├── App.vue             # Composant racine de l'application
│   └── main.js             # Point d'entrée de l'application Vue
├── .gitignore              # Fichiers à ignorer par Git
├── index.html              # Fichier HTML principal
├── package.json            # Dépendances et scripts du projet
└── README.md               # Ce fichier !

🤝 Contribution

Les contributions sont les bienvenues ! Si tu as des suggestions ou des améliorations :

    Fork le dépôt.

    Crée une nouvelle branche (git checkout -b feature/nouvelle-fonctionnalite).

    Effectue tes changements et commit-les (git commit -m 'feat: ajoute une nouvelle fonctionnalité').

    Push vers ta branche (git push origin feature/nouvelle-fonctionnalite).

    Ouvre une Pull Request.
