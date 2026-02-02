# 🔧 CONFIGURATION GITHUB PAGES - PFV APP

## 📋 Checklist complète

### ✅ ÉTAPE 1: Créer le repository

- [ ] Aller sur github.com
- [ ] Cliquer sur "New repository"
- [ ] Nom: `pfv-app` (ou votre choix)
- [ ] Visibilité: **Public** (obligatoire pour GitHub Pages gratuit)
- [ ] Cocher "Add a README file"
- [ ] Cliquer "Create repository"

---

### ✅ ÉTAPE 2: Upload des fichiers

**Fichiers OBLIGATOIRES à uploader:**

```
📄 index.html           ← Page principale (REQUIS)
📄 styles.css           ← Design de l'app (REQUIS)
📄 app.js              ← Logique JavaScript (REQUIS)
📄 manifest.json       ← Configuration PWA (REQUIS)
📄 service-worker.js   ← Mode hors-ligne (REQUIS)
```

**Fichiers RECOMMANDÉS:**

```
📄 README.md           ← Documentation
📄 GUIDE_RAPIDE.md     ← Guide utilisateur
📄 .gitignore          ← Fichiers à ignorer
📄 deploy.sh           ← Script de déploiement
📄 icon.svg            ← Icône source
📄 generate-icons.html ← Générateur d'icônes
```

**Fichiers À CRÉER (optionnel mais recommandé):**

```
📄 icon-192.png        ← Icône 192x192 (pour Android)
📄 icon-512.png        ← Icône 512x512 (pour Android)
```

---

### ✅ ÉTAPE 3: Configurer GitHub Pages

1. **Accéder aux settings:**
   ```
   Repository → Settings (en haut) → Pages (menu gauche)
   ```

2. **Configuration Source:**
   ```
   Build and deployment
   └─ Source: Deploy from a branch
   └─ Branch: main
   └─ Folder: / (root)
   └─ Cliquez "Save"
   ```

3. **Attendre le déploiement:**
   - ⏳ Temps: 2-5 minutes
   - 🔄 Statut visible en haut de la page Settings → Pages
   - ✅ Quand prêt: "Your site is published at..."

---

### ✅ ÉTAPE 4: Vérifier le déploiement

1. **URL de votre app:**
   ```
   https://[VOTRE-USERNAME].github.io/pfv-app/
   ```

2. **Tests à faire:**
   - [ ] La page s'affiche correctement
   - [ ] Le menu fonctionne
   - [ ] Vous pouvez ajouter un affilié test
   - [ ] L'export CSV fonctionne
   - [ ] Le mode hors-ligne fonctionne (après 1 visite)

---

### ✅ ÉTAPE 5: Installer sur Android

1. **Sur votre téléphone Android:**
   - Ouvrir Chrome
   - Visiter votre URL
   - Notification "Ajouter à l'écran d'accueil" apparaît
   - Cliquer "Installer"

2. **Si la notification n'apparaît pas:**
   - Menu Chrome (⋮) → "Installer l'application"
   - Ou: "Ajouter à l'écran d'accueil"

3. **Vérifier l'installation:**
   - [ ] Icône PFV visible sur écran d'accueil
   - [ ] L'app s'ouvre en plein écran (sans barre Chrome)
   - [ ] Fonctionne en mode avion

---

## 🔍 RÉSOLUTION DE PROBLÈMES

### ❌ Problème: "404 - Page non trouvée"

**Causes possibles:**
1. GitHub Pages n'est pas encore activé
2. Le déploiement est en cours
3. L'URL est incorrecte

**Solutions:**
```bash
1. Vérifier Settings → Pages → Status
2. Attendre 5 minutes supplémentaires
3. Vérifier l'URL (doit être: username.github.io/repo-name/)
4. Essayer en navigation privée (cache)
```

---

### ❌ Problème: "Fichiers CSS/JS ne chargent pas"

**Cause:** Chemins de fichiers incorrects

**Solution:**
```
Vérifier dans index.html:
✅ CORRECT:   <link rel="stylesheet" href="styles.css">
❌ INCORRECT: <link rel="stylesheet" href="/styles.css">
❌ INCORRECT: <link rel="stylesheet" href="./styles.css">

Les chemins doivent être RELATIFS sans / au début
```

---

### ❌ Problème: "PWA ne s'installe pas"

**Causes possibles:**
1. Pas de HTTPS (GitHub Pages a HTTPS par défaut)
2. manifest.json manquant ou incorrect
3. Service Worker non chargé

**Solutions:**
```bash
1. Vérifier que l'URL commence par https://
2. Ouvrir DevTools (F12) → Console → Vérifier les erreurs
3. Application tab → Manifest → Vérifier qu'il est détecté
4. Application tab → Service Workers → Vérifier le status
5. Recharger la page (F5) et attendre 10 secondes
```

---

### ❌ Problème: "Mode hors-ligne ne fonctionne pas"

**Solution:**
```bash
1. Visiter l'app AU MOINS UNE FOIS avec Internet
2. Attendre que le Service Worker s'installe (10-30 sec)
3. Vérifier dans DevTools → Application → Service Workers
   └─ Status doit être "activated and is running"
4. ENSUITE activer le mode avion
5. Recharger la page
```

---

## 🚀 OPTIMISATIONS (Optionnel)

### 📱 Améliorer l'installation PWA

1. **Créer les icônes PNG:**
   - Ouvrir `generate-icons.html`
   - Sauvegarder les 2 canvas en PNG
   - Uploader sur GitHub

2. **Ajouter un screenshot:**
   - Prendre une capture d'écran de l'app
   - Dimension: 540x720 pixels
   - Nom: `screenshot.png`
   - Uploader sur GitHub

---

### ⚡ Améliorer les performances

1. **Minimiser les fichiers (optionnel):**
   ```bash
   # Utiliser un outil en ligne:
   - CSS: cssnano.co
   - JS: javascript-minifier.com
   ```

2. **Activer la compression:**
   - GitHub Pages compresse automatiquement avec gzip
   - Rien à faire de votre côté!

---

### 🔒 Sécurité

**Déjà inclus:**
- ✅ HTTPS automatique (GitHub Pages)
- ✅ Content Security Policy dans HTML
- ✅ Validation côté client
- ✅ Pas de backend = pas de faille serveur

**Recommandations:**
- Sauvegarder régulièrement (Export CSV)
- Ne pas partager votre URL avec trop de monde
- Les données restent sur l'appareil de chaque utilisateur

---

## 📊 MONITORING

### Statistiques GitHub Pages

1. **Accès:**
   ```
   Repository → Insights → Traffic
   ```

2. **Métriques disponibles:**
   - Nombre de visiteurs
   - Pages vues
   - Référents
   - Appareils utilisés

---

## 🔄 MISES À JOUR

### Comment mettre à jour l'app:

1. **Modifier les fichiers localement**
2. **Re-uploader sur GitHub** (écrase les anciens)
3. **Attendre 2-3 minutes**
4. **Sur Android:**
   - Ouvrir l'app
   - Pull vers le bas pour rafraîchir
   - Le nouveau Service Worker se charge automatiquement

### Versioning:

```bash
# Dans manifest.json, changer:
"name": "PFV v1.1"

# Dans app.js, changer:
const APP_VERSION = "1.1";

# Commit avec message:
git commit -m "Version 1.1 - Ajout de [fonctionnalité]"
```

---

## 📞 SUPPORT

### Ressources utiles:

- 📖 [Documentation GitHub Pages](https://docs.github.com/pages)
- 📖 [PWA Guide](https://web.dev/progressive-web-apps/)
- 📖 [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

### Debug:

```javascript
// Dans la console Chrome (F12):
console.log('Version:', navigator.userAgent);
console.log('Service Worker:', navigator.serviceWorker);
console.log('Storage:', localStorage.getItem('pfv_affiliates'));
```

---

## ✅ CHECKLIST FINALE

Avant de partager l'app:

- [ ] L'app charge en < 3 secondes
- [ ] Tous les menus fonctionnent
- [ ] Ajout d'affilié fonctionne
- [ ] Calculs de gains corrects (80 FCFA × affiliés)
- [ ] Export CSV fonctionne
- [ ] Mode hors-ligne fonctionne
- [ ] S'installe sur Android
- [ ] Icônes affichées correctement
- [ ] Aucune erreur dans la console (F12)

---

## 🎉 SUCCÈS!

Si tous les points ci-dessus sont ✅, votre app PFV est prête!

**URL à partager:**
```
https://[VOTRE-USERNAME].github.io/pfv-app/
```

**Promotion:**
- WhatsApp: Envoyez le lien
- SMS: Envoyez le lien
- Imprimé: Créez un QR code (qr-code-generator.com)

---

**Créé pour PFV v1.0**
**Système verrouillé et prêt pour production** 🚀
