# PFV - Plan Financier de Vie

Une Progressive Web App (PWA) moderne pour gérer votre réseau d'affiliés selon les règles officielles PFV.

## 🚀 Fonctionnalités

- ✅ **Gestion d'affiliés** - Ajoutez et gérez vos affiliés facilement
- 📊 **Tableau de bord** - Visualisez vos statistiques en temps réel
- 💰 **Calcul automatique** - Les gains sont calculés automatiquement (80 FCFA/affilié)
- 🌳 **Visualisation du réseau** - Arborescence de votre réseau binaire
- 📱 **Mode hors-ligne** - Fonctionne même sans connexion Internet
- 💾 **Export de données** - CSV, TXT, et rapports détaillés
- 🔒 **Règles verrouillées** - Système conforme aux règles officielles PFV v1.0

## 📱 Installation sur Android

### Méthode 1: Via GitHub Pages (Recommandé)

1. **Déployez sur GitHub Pages:**
   - Créez un nouveau repository sur GitHub
   - Uploadez tous les fichiers de ce projet
   - Allez dans Settings → Pages
   - Sélectionnez la branche `main` et le dossier `/root`
   - Cliquez sur Save

2. **Accédez à l'app:**
   - Ouvrez Chrome sur Android
   - Visitez `https://votre-username.github.io/pfv-app`

3. **Installez la PWA:**
   - Chrome affichera une bannière "Ajouter à l'écran d'accueil"
   - Ou appuyez sur ⋮ (menu) → "Installer l'application"
   - L'icône PFV apparaîtra sur votre écran d'accueil

### Méthode 2: Test local

1. **Serveur local:**
   ```bash
   # Si vous avez Python installé
   python -m http.server 8000
   
   # Ou avec Node.js
   npx serve
   ```

2. **Accédez depuis Android:**
   - Trouvez l'adresse IP de votre ordinateur
   - Sur Android, ouvrez Chrome
   - Visitez `http://[VOTRE-IP]:8000`

## 🛠️ Développement

### Structure du projet

```
pfv-app/
├── index.html          # Page principale
├── styles.css          # Styles (thème cyber/fintech)
├── app.js             # Logique applicative
├── manifest.json      # Configuration PWA
├── service-worker.js  # Cache et mode hors-ligne
├── README.md          # Documentation
└── generate-icons.html # Générateur d'icônes
```

### Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec gradients et animations
- **Vanilla JavaScript** - Logique pure sans dépendances
- **Service Workers** - Cache et fonctionnalité hors-ligne
- **LocalStorage** - Persistance des données

## 📋 Règles PFV (Version 1.0)

### Structure
- Maximum **2 affiliés directs** par membre
- Croissance binaire: 1, 2, 4, 8, 16... jusqu'à 16,384

### Gains
- **80 FCFA** par affilié dans votre réseau
- Calcul automatique: `Total affiliés × 80 FCFA`

### Limites
- Plafond: **16,384 affiliés** par réseau
- Pas de comptes fictifs
- Chaque affilié doit avoir un ID unique

## 🎨 Design

L'application utilise un thème **cyber/fintech** distinctif avec:
- Palette de couleurs: Bleu cyan (#06b6d4) et Violet (#8b5cf6)
- Typographie: **Orbitron** (titres) + **IBM Plex Sans** (corps)
- Animations fluides et micro-interactions
- Fond avec grille animée
- Effets de glow et gradients

## 📊 Utilisation

1. **Ajouter un affilié:**
   - Allez dans "Ajouter affilié"
   - Remplissez nom, contact, et parent
   - Le système vérifie automatiquement les limites

2. **Voir vos affiliés:**
   - Menu "Mes affiliés"
   - Recherche en temps réel
   - Détails des gains pour chaque membre

3. **Exporter les données:**
   - CSV pour tableur
   - TXT pour les règles
   - Rapport complet avec statistiques

## 🔐 Sécurité

- Données stockées localement (LocalStorage)
- Pas de serveur backend requis
- Validation stricte des règles PFV
- Prévention des doublons

## 🚀 Déploiement GitHub Pages

```bash
# 1. Initialisez Git (si ce n'est pas déjà fait)
git init

# 2. Ajoutez tous les fichiers
git add .

# 3. Commit
git commit -m "Initial commit - PFV App v1.0"

# 4. Créez un repo sur GitHub et liez-le
git remote add origin https://github.com/VOTRE-USERNAME/pfv-app.git

# 5. Push
git push -u origin main
```

Ensuite, activez GitHub Pages dans les settings du repository.

## 📱 Générer les icônes

1. Ouvrez `generate-icons.html` dans un navigateur
2. Faites un clic droit sur chaque canvas
3. "Enregistrer l'image sous..."
4. Sauvegardez comme `icon-192.png` et `icon-512.png`

## 🐛 Dépannage

**L'app ne s'installe pas:**
- Vérifiez que vous utilisez HTTPS (requis pour PWA)
- GitHub Pages fournit HTTPS automatiquement

**Les données disparaissent:**
- Ne videz pas le cache du navigateur
- Les données sont dans LocalStorage

**L'app ne fonctionne pas hors-ligne:**
- Visitez l'app au moins une fois en ligne
- Le Service Worker doit se charger d'abord

## 📄 Licence

Ce projet respecte les règles officielles PFV v1.0.
Système verrouillé - Modifications non autorisées invalident le système.

## 👨‍💻 Développeur

Développé avec ❤️ pour le système PFV
Version: 1.0
Status: Verrouillé

---

**Note importante:** Cette application respecte strictement les règles PFV. Toute modification de la logique binaire ou des calculs de gains invalide le système officiel.
