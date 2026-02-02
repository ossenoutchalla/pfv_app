# 🚀 GUIDE DE DÉMARRAGE RAPIDE - PFV APP

## ⚡ Installation en 5 minutes

### 📋 Pré-requis
- Un compte GitHub (gratuit)
- Chrome sur votre téléphone Android
- Les fichiers PFV (déjà prêts!)

---

## 🎯 ÉTAPE 1: Créer le repository GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Nom du repository: `pfv-app` (ou ce que vous voulez)
5. Sélectionnez **"Public"**
6. ✅ Cochez **"Add a README file"**
7. Cliquez sur **"Create repository"**

---

## 📤 ÉTAPE 2: Upload des fichiers

### Option A: Via l'interface web (Plus simple)

1. Dans votre nouveau repository, cliquez sur **"Add file"** → **"Upload files"**
2. Glissez-déposez TOUS les fichiers suivants:
   ```
   ✓ index.html
   ✓ styles.css
   ✓ app.js
   ✓ manifest.json
   ✓ service-worker.js
   ✓ .gitignore
   ```
3. Écrivez un message: "Initial commit PFV v1.0"
4. Cliquez sur **"Commit changes"**

### Option B: Via Git (Pour développeurs)

```bash
# Cloner le repo
git clone https://github.com/VOTRE-USERNAME/pfv-app.git
cd pfv-app

# Copier tous les fichiers PFV dans ce dossier

# Ajouter et commit
git add .
git commit -m "Initial commit PFV v1.0"
git push
```

---

## 🌐 ÉTAPE 3: Activer GitHub Pages

1. Dans votre repository, cliquez sur **"Settings"** (⚙️)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Sous "Source":
   - Branch: Sélectionnez **"main"**
   - Folder: Laissez **"/ (root)"**
4. Cliquez sur **"Save"**
5. ⏳ Attendez 2-3 minutes

Une fois prêt, vous verrez:
```
✅ Your site is live at https://VOTRE-USERNAME.github.io/pfv-app/
```

---

## 📱 ÉTAPE 4: Installer sur Android

1. **Ouvrez Chrome** sur votre téléphone Android
2. Visitez votre URL: `https://VOTRE-USERNAME.github.io/pfv-app/`
3. Vous verrez une notification **"Ajouter PFV à l'écran d'accueil"**
4. Appuyez sur **"Installer"** ou **"Ajouter"**

**OU**

1. Appuyez sur le menu **⋮** (3 points) en haut à droite
2. Sélectionnez **"Installer l'application"**
3. Confirmez

🎉 **L'icône PFV apparaît sur votre écran d'accueil!**

---

## 🎨 ÉTAPE 5: Créer les icônes (Optionnel)

Les icônes donnent une meilleure apparence à votre app:

1. Ouvrez `generate-icons.html` dans Chrome (sur PC)
2. Vous verrez 2 canvas avec le logo PFV
3. **Canvas 1 (192x192):**
   - Clic droit → "Enregistrer l'image sous..."
   - Nom: `icon-192.png`
4. **Canvas 2 (512x512):**
   - Clic droit → "Enregistrer l'image sous..."
   - Nom: `icon-512.png`
5. Uploadez ces 2 fichiers PNG sur GitHub (dans votre repository)
6. Attendez 2-3 minutes que GitHub Pages se mette à jour

---

## ✅ VÉRIFICATION

Votre app fonctionne si vous pouvez:

- ✅ Voir le tableau de bord
- ✅ Ajouter un affilié
- ✅ Voir la liste des affiliés
- ✅ Exporter en CSV
- ✅ L'utiliser HORS LIGNE (mode avion)

---

## 🆘 PROBLÈMES COURANTS

### ❌ "404 - Page non trouvée"
**Solution:** Attendez 5 minutes après avoir activé GitHub Pages

### ❌ "L'app ne s'installe pas"
**Solution:** 
- Utilisez Chrome (pas Firefox ou autre)
- Vérifiez que l'URL commence par `https://`
- Rechargez la page (F5)

### ❌ "Les données disparaissent"
**Solution:**
- Ne videz PAS le cache de Chrome
- Les données sont locales (pas dans le cloud)

### ❌ "Mode hors-ligne ne fonctionne pas"
**Solution:**
- Visitez l'app AU MOINS UNE FOIS avec Internet
- Le Service Worker doit se charger d'abord
- Ensuite, activez le mode avion et testez

---

## 📞 PREMIERS PAS DANS L'APP

### 1️⃣ Ajouter votre premier affilié

1. Ouvrez le menu ☰
2. Cliquez sur **"Ajouter affilié"**
3. Remplissez:
   - Nom: Jean Dupont
   - Contact: +225 0701020304
   - Affilié à: Vous
4. Cliquez sur **"Ajouter l'affilié"**

✅ Vous verrez une notification verte de succès!

### 2️⃣ Voir vos statistiques

1. Menu ☰ → **"Tableau de bord"**
2. Vous verrez:
   - Total affiliés: 1
   - Gains totaux: 80 FCFA
   - Affiliés directs: 1/2
   - Niveau: 1

### 3️⃣ Exporter vos données

1. Menu ☰ → **"Export données"**
2. Choisissez:
   - **CSV** → Pour Excel/Google Sheets
   - **TXT** → Règles officielles
   - **Rapport** → Statistiques complètes

---

## 🎯 ASTUCES PRO

### 💡 Partager l'app
Envoyez simplement votre URL:
```
https://VOTRE-USERNAME.github.io/pfv-app/
```

### 💡 Faire une mise à jour
1. Modifiez les fichiers sur votre PC
2. Uploadez-les sur GitHub (écrase les anciens)
3. Attendez 2-3 minutes
4. Rechargez l'app sur Android

### 💡 Sauvegarder vos données
1. Export → CSV
2. Envoyez le CSV à vous-même par email
3. Si besoin, importez-le plus tard

### 💡 Utiliser sur plusieurs appareils
L'app fonctionne sur:
- ✅ Android (Chrome)
- ✅ iPhone/iPad (Safari)
- ✅ Ordinateur (Chrome, Edge, Firefox)

---

## 📊 RÈGLES PFV - RAPPEL

- **2 affiliés directs maximum** par personne
- **80 FCFA** par affilié dans votre réseau
- Structure **binaire** stricte
- Plafond: **16,384 affiliés**

---

## 🎉 FÉLICITATIONS!

Vous avez maintenant votre propre app PFV professionnelle!

**Prochaines étapes:**
1. ✅ Ajoutez vos premiers affiliés
2. ✅ Partagez l'app avec votre réseau
3. ✅ Suivez vos gains en temps réel

**Besoin d'aide?** Consultez le `README.md` complet

---

**Version:** 1.0
**Statut:** ✅ Prêt pour production
**Support:** GitHub Issues sur votre repository

🚀 **Bon succès avec PFV!**
