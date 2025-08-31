# Bouton de Générosité

Un site web simple avec un bouton rouge élégant pour les donations, optimisé pour le déploiement sur Netlify.

## Fonctionnalités

- **Page minimaliste** : Fond blanc avec un bouton rouge centré
- **Effet de lumière interactif** : Le bouton réagit au mouvement de la souris avec des effets de lumière
- **Intégration Stripe** : Redirection directe vers le lien de paiement Stripe
- **Design responsive** : Optimisé pour tous les appareils
- **Prêt pour Netlify** : Configuration automatique pour le déploiement

## Déploiement sur Netlify

### Option 1 : Déploiement automatique depuis Git

1. Poussez votre code vers un repository GitHub
2. Connectez-vous à [Netlify](https://netlify.com)
3. Cliquez sur "Add new site" > "Import an existing project"
4. Connectez votre repository GitHub
5. Configurez les paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `out`
6. Cliquez sur "Deploy site"

### Option 2 : Déploiement manuel

1. Construisez le projet localement :
   ```bash
   npm run build
   ```

2. Glissez-déposez le dossier `out` sur l'interface Netlify

## Configuration Stripe

Le bouton est configuré pour rediriger vers le lien Stripe fourni :
```
https://buy.stripe.com/14AaEWeCW1MkfKmdKbcV204
```

Price ID : `price_1S27tNBGLhOquLjYPvzRdHTL`

## Installation locale

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## Technologies utilisées

- **Next.js 15** : Framework React pour le développement web
- **Tailwind CSS** : Framework CSS utilitaire
- **TypeScript** : Pour un code plus robuste
- **Stripe** : Traitement des paiements

## Structure du projet

```
├── app/
│   ├── page.tsx          # Page principale avec le bouton
│   ├── layout.tsx        # Layout de base
│   └── globals.css       # Styles globaux
├── public/               # Fichiers statiques
├── next.config.js        # Configuration Next.js
└── package.json          # Dépendances du projet
```
