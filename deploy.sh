#!/bin/bash

# Script de déploiement PFV sur GitHub Pages
# Usage: ./deploy.sh

echo "🚀 Déploiement PFV sur GitHub Pages"
echo "======================================"

# Vérifier si Git est initialisé
if [ ! -d .git ]; then
    echo "📦 Initialisation de Git..."
    git init
    echo "✅ Git initialisé"
fi

# Ajouter tous les fichiers
echo "📝 Ajout des fichiers..."
git add .

# Demander le message de commit
echo ""
read -p "💬 Message de commit (ou Entrée pour message par défaut): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Mise à jour PFV v1.0 - $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Commit
echo "💾 Commit des changements..."
git commit -m "$commit_msg"

# Demander l'URL du repository si pas configuré
if ! git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "🔗 Configuration du repository GitHub"
    read -p "URL du repository (ex: https://github.com/username/pfv-app.git): " repo_url
    git remote add origin "$repo_url"
    echo "✅ Repository configuré"
fi

# Push vers GitHub
echo "⬆️  Upload vers GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✨ Déploiement terminé!"
echo ""
echo "📱 Étapes suivantes:"
echo "1. Allez sur GitHub → Settings → Pages"
echo "2. Sélectionnez 'main' branch et '/root' folder"
echo "3. Cliquez sur 'Save'"
echo "4. Attendez quelques minutes"
echo "5. Votre app sera disponible sur: https://username.github.io/pfv-app"
echo ""
echo "🎉 Merci d'utiliser PFV!"
