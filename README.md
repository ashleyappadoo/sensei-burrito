# sensei-burrito
# Sensei Burrito Website

Ce projet est le site officiel de **Sensei Burrito**, réalisé en React avec TailwindCSS par ONA.

## 🚀 Fonctionnalités
- Header avec logo dynamique :
  - Logo blanc par défaut
  - Logo noir et header shrink + fond noir avec fade-in/fade-out lors du scroll
- Vidéo de fond en Hero Section
- Sections : Valeurs, Menu, Histoire, Footer
- Design premium et responsive avec TailwindCSS

## 📦 Installation

Clonez le dépôt puis installez les dépendances :

```bash
git clone https://github.com/votre-utilisateur/sensei-burrito.git
cd sensei-burrito
npm install
```

## 🖥️ Développement local

Lancez le projet en mode développement :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`.

## 🌍 Déploiement

### Option 1 : Vercel (recommandé)
1. Poussez le code sur GitHub.
2. Connectez votre dépôt à [Vercel](https://vercel.com/).
3. Vercel déploiera automatiquement le site et vous donnera une URL.

### Option 2 : Netlify
1. Poussez le code sur GitHub.
2. Connectez votre dépôt à [Netlify](https://www.netlify.com/).
3. Définissez la commande de build : `npm run build` et le dossier de publication : `dist` ou `.next` selon votre configuration.

### Option 3 : GitHub Pages
1. Ajoutez le package `gh-pages` :
   ```bash
   npm install gh-pages --save-dev
   ```
2. Ajoutez ces scripts à `package.json` :
   ```json
   "homepage": "https://votre-utilisateur.github.io/sensei-burrito",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Déployez avec :
   ```bash
   npm run deploy
   ```

## 📂 Structure du projet
- `SenseiBurrito.jsx` : composant principal du site
- `/public` : ressources statiques (logos, vidéos, images)
- `tailwind.config.js` : configuration TailwindCSS

## 📝 Licence
Projet propriétaire – © 2025 Sensei Burrito. Tous droits réservés.
