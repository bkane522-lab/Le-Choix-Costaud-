# Le Choix Costaud — édition publique UX/UI

PWA mobile-first prête à être publiée comme guide d’achat indépendant.

## Expérience utilisateur

- un objectif principal dès l’accueil : trouver un choix adapté en moins d’une minute
- questionnaire réduit à 4 questions
- 3 recommandations dans l’univers choisi
- navigation principale limitée à 3 entrées : Accueil, Explorer et Favoris
- comparateur visible uniquement lorsqu’un produit y est ajouté
- écrans Questionnaire et Fiche produit sans barre de navigation pour éviter les distractions
- cartes compactes, informations essentielles lisibles immédiatement et boutons adaptés au tactile
- illustrations vectorielles cohérentes, sans dépendance externe

## Contenu

- 6 univers : Maison, Voiture, Camping, Bricolage, Cuisine et Sport
- 18 fiches pratiques, soit 3 choix par univers
- recherche par mot-clé, catégories et filtres secondaires
- favoris enregistrés sur le téléphone
- comparateur jusqu’à 3 choix
- partage direct des fiches
- recherches directes sur les sites des enseignes, sans lien affilié
- installation sur l’écran d’accueil
- fonctionnement hors ligne après une première ouverture

## Positionnement transparent

Les fiches décrivent des types de produits et les critères à vérifier avant de choisir un modèle précis. Les budgets sont indicatifs. L’application ne vend aucun produit, ne garantit ni les prix ni les stocks et ne reçoit aucune commission dans cette édition.

## Mise en ligne sur Vercel

1. Créer un nouveau projet Vercel.
2. Importer le dossier complet ou le dépôt GitHub contenant ces fichiers.
3. Ne sélectionner aucun framework.
4. Laisser la commande de build vide, puis déployer.

Tous les fichiers doivent rester ensemble à la racine :

- `index.html`
- `style.css`
- `app.js`
- `manifest.json`
- `sw.js`
- dossier `icons`

Le cache actuel est nommé `le-choix-costaud-public-v5-ikea` dans `sw.js`. Il faudra modifier ce nom lors d’une prochaine mise à jour importante pour forcer le rafraîchissement sur les appareils déjà installés.

## Vérifications réalisées

- syntaxe JavaScript et service worker valides
- manifeste JSON valide
- tests sans erreur de console sur 320 × 720, 390 × 844, 768 × 900 et 1280 × 900
- aucune largeur de page dépassant l’écran sur les vues principales
- 6 catégories et 18 fiches fonctionnelles
- chaque fiche affiche 4 informations clés et 4 blocs de contrôle
- recherche, filtres et réinitialisation fonctionnels
- favoris et comparateur fonctionnels, limité à 3 choix
- questionnaire complet : chaque univers renvoie bien ses 3 recommandations
- fenêtres d’information, d’installation et de recherche marchande fonctionnelles


## Correctif recherche marchande

- suppression des recherches Google trop longues avec `site:`
- ouverture directe du moteur de recherche de chaque enseigne
- mots-clés raccourcis pour obtenir davantage de résultats utiles
- enseignes adaptées à chaque produit ; par exemple, le panier de douche ne renvoie plus vers IKEA
- aucun changement de design ou de parcours utilisateur


## Correctif IKEA

- les recherches des autres enseignes restent inchangées
- le bouton IKEA lance désormais une recherche Google ciblée avec « IKEA + nom du produit »
- aucune restriction `site:` n’est utilisée, afin d’éviter les pages sans résultat
- aucun changement de design, de navigation ou de contenu produit


## Mentions légales et confidentialité

- liens visibles en pied de page : Mentions légales, Confidentialité et À propos
- éditeur et contact affichés
- coordonnées officielles de l’hébergeur Vercel affichées
- fonctionnement du stockage local expliqué
- absence actuelle d’analytics, de publicité, de formulaire et de lien affilié indiquée
- cache renouvelé : `le-choix-costaud-public-v6-legal`
