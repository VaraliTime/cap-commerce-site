# Guide de Déploiement Permanent sur GitHub Pages

Votre site a été amélioré et configuré pour un déploiement permanent. Voici comment mettre en ligne vos modifications sur votre dépôt GitHub.

## 1. Préparer les fichiers
J'ai déjà configuré les fichiers suivants dans votre projet :
- `.github/workflows/deploy.yml` : Automatisation du déploiement.
- `vite.config.ts` : Configuration pour GitHub Pages.
- `client/public/` : Inclusion des données (content.json, quiz.json).

## 2. Envoyer les modifications sur GitHub
Ouvrez votre terminal dans le dossier du projet et exécutez les commandes suivantes :

```bash
# Ajouter tous les nouveaux fichiers
git add .

# Enregistrer les modifications
git commit -m "Amélioration du site : ajout quiz, recherche, sidebar et config déploiement"

# Envoyer sur GitHub
git push origin main
```

## 3. Activer GitHub Pages
Une fois les fichiers envoyés :
1. Allez sur votre dépôt GitHub sur le web.
2. Cliquez sur l'onglet **Settings** (Paramètres).
3. Dans le menu de gauche, cliquez sur **Pages**.
4. Sous **Build and deployment** > **Source**, assurez-vous que **GitHub Actions** est sélectionné.

## 4. Vérifier le déploiement
1. Allez dans l'onglet **Actions** de votre dépôt.
2. Vous verrez un workflow nommé "Deploy to GitHub Pages" en cours d'exécution.
3. Une fois terminé (vert), votre site sera accessible à l'adresse : `https://votre-nom-utilisateur.github.io/cap-commerce-site/`

---
*Note : Si vous avez besoin d'aide pour l'une de ces étapes, n'hésitez pas à me demander !*
