const categories = [
  { id: "maison", label: "Maison", icon: "home", description: "Rangement et quotidien" },
  { id: "voiture", label: "Voiture", icon: "car", description: "Coffre et déplacements" },
  { id: "camping", label: "Camping", icon: "tent", description: "Plein air et voyage" },
  { id: "bricolage", label: "Bricolage", icon: "tools", description: "Outils utiles et fiables" },
  { id: "cuisine", label: "Cuisine", icon: "bowl", description: "Repas et conservation" },
  { id: "sport", label: "Sport", icon: "sport", description: "Entraînement et transport" }
];

const products = [
  {
    id: "boite-empilable",
    name: "Boîte de rangement empilable 12 à 15 L",
    shortName: "Boîte empilable 12–15 L",
    category: "maison",
    emoji: "📦",
    budget: "10 à 25 €",
    budgetMax: 25,
    material: "Polypropylène épais",
    capacity: "12 à 15 litres",
    cleaning: "Éponge ou rinçage",
    use: "Placard, cellier, chambre",
    format: "Standard et empilable",
    description: "Un format polyvalent pour regrouper les petits objets sans transformer le rangement en pile instable.",
    tags: ["moins25", "empilable", "lavable", "reutilisable"],
    badge: "Petit espace",
    strengths: ["Couvercle clipsable", "Poignées moulées", "Parois faciles à nettoyer"],
    checks: ["Mesurer l’étagère avant l’achat", "Vérifier que le fond ne se déforme pas", "Choisir des couvercles vendus séparément si besoin"],
    avoid: "Les parois très fines et les boîtes qui se verrouillent seulement par pression.",
    searchTerm: "boîte de rangement empilable solide 15 litres",
    colors: ["#e6d0b5", "#c9ab85"]
  },
  {
    id: "panier-douche",
    name: "Panier de douche ajouré avec poignée",
    shortName: "Panier de douche ajouré",
    category: "maison",
    emoji: "🧼",
    budget: "8 à 20 €",
    budgetMax: 20,
    material: "Polypropylène ou silicone épais",
    capacity: "Produits de toilette",
    cleaning: "Rinçage et séchage",
    use: "Salle de bain, buanderie, piscine",
    format: "Compact et transportable",
    description: "Une solution simple pour transporter les produits et laisser l’eau s’évacuer après usage.",
    tags: ["moins25", "lavable", "compact", "reutilisable"],
    badge: "Salle de bain",
    strengths: ["Fond ajouré", "Poignée intégrée", "Aucun montage nécessaire"],
    checks: ["Vérifier l’absence d’arêtes coupantes", "Tester la rigidité de la poignée", "Choisir des ouvertures assez larges pour sécher"],
    avoid: "Les paniers fermés qui retiennent l’eau et les poignées simplement collées.",
    searchTerm: "panier de douche ajouré solide poignée",
    colors: ["#d7e2df", "#a5c0b8"]
  },
  {
    id: "cache-cables",
    name: "Boîte cache-câbles ventilée",
    shortName: "Boîte cache-câbles",
    category: "maison",
    emoji: "🔌",
    budget: "12 à 30 €",
    budgetMax: 30,
    material: "ABS ou métal ventilé",
    capacity: "Multiprise et chargeurs",
    cleaning: "Chiffon sec",
    use: "Bureau, salon, chambre",
    format: "Rigide",
    description: "Elle regroupe la multiprise et les câbles tout en gardant des ouvertures pour la circulation de l’air.",
    tags: ["moins40", "rigide", "compact"],
    badge: "Bureau",
    strengths: ["Réduit le désordre visuel", "Ouvertures latérales", "Couvercle amovible"],
    checks: ["Mesurer la multiprise", "Vérifier la ventilation", "Laisser les transformateurs qui chauffent à l’air libre"],
    avoid: "Les boîtes totalement fermées autour d’appareils qui dégagent de la chaleur.",
    searchTerm: "boîte cache câbles ventilée multiprise solide",
    colors: ["#e4d6c5", "#c2a789"]
  },
  {
    id: "organiseur-coffre",
    name: "Organiseur de coffre pliable renforcé",
    shortName: "Organiseur de coffre",
    category: "voiture",
    emoji: "🧰",
    budget: "20 à 40 €",
    budgetMax: 40,
    material: "Polyester 600D ou panneaux rigides",
    capacity: "2 à 3 compartiments",
    cleaning: "Chiffon humide",
    use: "Courses, outils, accessoires auto",
    format: "Pliable",
    description: "Il évite aux objets de se déplacer dans le coffre et se replie quand il n’est pas utilisé.",
    tags: ["moins40", "pliable", "rigide", "reutilisable"],
    badge: "Coffre rangé",
    strengths: ["Poignées cousues", "Séparateurs amovibles", "Base antidérapante"],
    checks: ["Contrôler la largeur du coffre", "Préférer des coutures doublées", "Vérifier la présence de sangles ou de velcro"],
    avoid: "Les modèles sans renfort de fond qui s’affaissent dès qu’ils sont chargés.",
    searchTerm: "organiseur coffre voiture pliable renforcé antidérapant",
    colors: ["#cbd6d2", "#91aaa3"]
  },
  {
    id: "poubelle-voiture",
    name: "Mini-poubelle de voiture lavable",
    shortName: "Mini-poubelle voiture",
    category: "voiture",
    emoji: "🚮",
    budget: "7 à 18 €",
    budgetMax: 18,
    material: "ABS ou silicone",
    capacity: "1 à 2 litres",
    cleaning: "Rinçage",
    use: "Portière, console, bureau",
    format: "Compact",
    description: "Un petit contenant rigide qui garde papiers et emballages au même endroit pendant les trajets.",
    tags: ["moins25", "lavable", "compact", "reutilisable"],
    badge: "Moins de déchets",
    strengths: ["Couvercle basculant", "Se vide rapidement", "Peu encombrante"],
    checks: ["Mesurer le vide-poche", "Vérifier que le couvercle s’enlève", "Choisir une surface intérieure lisse"],
    avoid: "Les modèles qui bloquent une commande ou gênent la fermeture de la portière.",
    searchTerm: "mini poubelle voiture lavable couvercle",
    colors: ["#d3d6d2", "#9da49d"]
  },
  {
    id: "compresseur-12v",
    name: "Compresseur portable 12 V avec arrêt automatique",
    shortName: "Compresseur portable 12 V",
    category: "voiture",
    emoji: "🛞",
    budget: "30 à 70 €",
    budgetMax: 70,
    material: "Boîtier ABS renforcé ou métal",
    capacity: "Pneus auto, vélo et ballons selon embouts",
    cleaning: "Chiffon sec",
    use: "Contrôle et appoint de pression",
    format: "Compact avec câble",
    description: "Un appareil d’appoint utile pour remettre un pneu à la bonne pression avant de rejoindre un professionnel.",
    tags: ["rigide", "compact", "reutilisable"],
    badge: "Dépannage",
    strengths: ["Arrêt à la pression choisie", "Écran lisible", "Rangement du câble"],
    checks: ["Vérifier la pression maximale", "Lire le temps d’utilisation continue", "Contrôler la longueur du câble et du flexible"],
    avoid: "L’utiliser sur un pneu endommagé ou comme remplacement d’une réparation professionnelle.",
    searchTerm: "compresseur voiture 12v arrêt automatique solide",
    colors: ["#d8c9c2", "#a88374"]
  },
  {
    id: "seau-pliable",
    name: "Seau pliable 10 L à cerclage rigide",
    shortName: "Seau pliable 10 L",
    category: "camping",
    emoji: "🪣",
    budget: "12 à 25 €",
    budgetMax: 25,
    material: "Silicone épais et polypropylène",
    capacity: "Environ 10 litres",
    cleaning: "Rinçage",
    use: "Camping, voiture, jardin",
    format: "Pliable",
    description: "Il se range à plat mais conserve une base et un bord rigides pour rester stable une fois déployé.",
    tags: ["moins25", "pliable", "lavable", "reutilisable"],
    badge: "Gain de place",
    strengths: ["Faible épaisseur repliée", "Poignée de transport", "Multi-usage"],
    checks: ["Vérifier l’épaisseur des plis", "Tester le verrouillage en position ouverte", "Contrôler la fixation de la poignée"],
    avoid: "La proximité d’une flamme, d’une plaque chaude ou d’un objet coupant.",
    searchTerm: "seau pliable 10 litres silicone solide camping",
    colors: ["#d8d2bb", "#a9a07f"]
  },
  {
    id: "caisse-pliable",
    name: "Caisse pliable multi-usage 30 L",
    shortName: "Caisse pliable 30 L",
    category: "camping",
    emoji: "🧺",
    budget: "20 à 40 €",
    budgetMax: 40,
    material: "Polypropylène renforcé",
    capacity: "25 à 35 litres",
    cleaning: "Rinçage",
    use: "Courses, coffre, camping",
    format: "Pliable et empilable",
    description: "Une caisse rigide lorsqu’elle est ouverte et presque plate une fois rangée.",
    tags: ["moins40", "pliable", "empilable", "lavable"],
    badge: "Multi-usage",
    strengths: ["Poignées latérales", "Bonne visibilité du contenu", "Rangement à plat"],
    checks: ["Vérifier la charge maximale", "Observer les charnières", "Contrôler le verrouillage des côtés"],
    avoid: "Mettre les doigts dans les articulations pendant le pliage.",
    searchTerm: "caisse pliable renforcée 30 litres camping courses",
    colors: ["#d8ceb3", "#9e906a"]
  },
  {
    id: "lampe-camping",
    name: "Lampe de camping rechargeable protégée des éclaboussures",
    shortName: "Lampe camping rechargeable",
    category: "camping",
    emoji: "🏮",
    budget: "20 à 50 €",
    budgetMax: 50,
    material: "ABS avec diffuseur protégé",
    capacity: "Éclairage de tente ou de table",
    cleaning: "Chiffon légèrement humide",
    use: "Camping, coupure de courant, terrasse",
    format: "Compact avec poignée",
    description: "Une lampe rechargeable avec plusieurs intensités, poignée de suspension et autonomie clairement annoncée.",
    tags: ["rechargeable", "compact", "reutilisable", "etanche"],
    badge: "Éclairage",
    strengths: ["Plusieurs intensités", "Recharge USB", "Suspension facile"],
    checks: ["Chercher un indice de protection indiqué", "Comparer l’autonomie à luminosité moyenne", "Vérifier le type de batterie"],
    avoid: "Les autonomies annoncées sans préciser le niveau de luminosité utilisé.",
    searchTerm: "lampe camping rechargeable IPX4 autonomie longue",
    colors: ["#ead9a9", "#c99b43"]
  },
  {
    id: "tournevis-embouts",
    name: "Tournevis à cliquet avec embouts standards",
    shortName: "Tournevis à embouts",
    category: "bricolage",
    emoji: "🪛",
    budget: "15 à 35 €",
    budgetMax: 35,
    material: "Acier chrome-vanadium",
    capacity: "Embouts plats, cruciformes et Torx",
    cleaning: "Chiffon sec",
    use: "Petites réparations et montage de meubles",
    format: "Compact",
    description: "Un manche unique et des embouts courants pour éviter d’accumuler des outils peu utilisés.",
    tags: ["moins40", "compact", "rigide", "reutilisable"],
    badge: "Essentiel",
    strengths: ["Embouts remplaçables", "Cliquet réversible", "Rangement compact"],
    checks: ["Vérifier la liste des embouts", "Préférer des embouts marqués", "Tester le jeu dans le porte-embout"],
    avoid: "Forcer avec un embout mal adapté, ce qui abîme la vis et l’outil.",
    searchTerm: "tournevis cliquet embouts acier chrome vanadium",
    colors: ["#d7c9bd", "#9e7c62"]
  },
  {
    id: "boite-outils",
    name: "Boîte à outils compacte à charnières renforcées",
    shortName: "Boîte à outils compacte",
    category: "bricolage",
    emoji: "🧰",
    budget: "20 à 50 €",
    budgetMax: 50,
    material: "Polypropylène épais ou métal",
    capacity: "Outils de base",
    cleaning: "Chiffon humide",
    use: "Maison, voiture, atelier léger",
    format: "Rigide et transportable",
    description: "Une boîte simple avec plateau amovible pour garder les outils courants accessibles et protégés.",
    tags: ["rigide", "reutilisable", "lavable"],
    badge: "Organisation",
    strengths: ["Poignée pleine", "Fermetures remplaçables ou robustes", "Plateau intérieur"],
    checks: ["Inspecter les charnières", "Vérifier la charge supportée par la poignée", "Contrôler les fermetures"],
    avoid: "Les coffrets trop grands pour le contenu réel, qui deviennent lourds et difficiles à ranger.",
    searchTerm: "boîte à outils compacte charnières renforcées",
    colors: ["#cfd5d2", "#899892"]
  },
  {
    id: "metre-ruban",
    name: "Mètre ruban 5 m à boîtier renforcé",
    shortName: "Mètre ruban 5 m",
    category: "bricolage",
    emoji: "📏",
    budget: "8 à 25 €",
    budgetMax: 25,
    material: "Ruban acier et boîtier ABS gainé",
    capacity: "5 mètres",
    cleaning: "Chiffon sec",
    use: "Mesures domestiques et bricolage",
    format: "Compact avec clip",
    description: "Un outil simple, lisible et suffisamment robuste pour les mesures du quotidien.",
    tags: ["moins25", "compact", "rigide", "reutilisable"],
    badge: "Toujours utile",
    strengths: ["Blocage du ruban", "Graduation lisible", "Dragonne ou clip"],
    checks: ["Vérifier le retour sans à-coup", "Contrôler le crochet riveté", "Choisir une graduation nette des deux côtés si utile"],
    avoid: "Laisser le ruban rentrer brutalement, ce qui fatigue le ressort et le crochet.",
    searchTerm: "mètre ruban 5m boîtier renforcé solide",
    colors: ["#e4d5a8", "#b99b43"]
  },
  {
    id: "lunch-box",
    name: "Lunch box compartimentée avec joint amovible",
    shortName: "Lunch box compartimentée",
    category: "cuisine",
    emoji: "🍱",
    budget: "15 à 35 €",
    budgetMax: 35,
    material: "Polypropylène alimentaire ou inox",
    capacity: "1 à 1,5 litre",
    cleaning: "Selon fabricant, joint retiré",
    use: "Repas préparé, travail, sortie",
    format: "Standard",
    description: "Un contenant réutilisable qui sépare le plat et les accompagnements sans multiplier les petites boîtes.",
    tags: ["moins40", "lavable", "reutilisable", "compact"],
    badge: "Repas",
    strengths: ["Compartiments utiles", "Joint remplaçable ou amovible", "Fermetures latérales"],
    checks: ["Vérifier la compatibilité micro-ondes", "Contrôler si les séparations sont étanches", "Lire les consignes de lavage"],
    avoid: "Transporter une soupe si le fabricant ne garantit pas l’étanchéité aux liquides.",
    searchTerm: "lunch box compartimentée joint amovible solide",
    colors: ["#e9d7c3", "#d6aa7d"]
  },
  {
    id: "bac-frigo",
    name: "Bac transparent pour réfrigérateur avec poignée",
    shortName: "Bac transparent frigo",
    category: "cuisine",
    emoji: "🥬",
    budget: "8 à 20 €",
    budgetMax: 20,
    material: "PET alimentaire épais",
    capacity: "3 à 5 litres",
    cleaning: "Lavage manuel conseillé",
    use: "Réfrigérateur, garde-manger",
    format: "Empilable selon modèle",
    description: "Il regroupe les petits aliments et permet de voir rapidement ce qu’il reste.",
    tags: ["moins25", "empilable", "lavable", "compact"],
    badge: "Stocks visibles",
    strengths: ["Poignée frontale", "Parois transparentes", "Format rectangulaire"],
    checks: ["Mesurer la profondeur du réfrigérateur", "Vérifier la température maximale", "Contrôler les règles d’empilage"],
    avoid: "Le lave-vaisselle ou la chaleur si le fabricant ne les autorise pas.",
    searchTerm: "bac rangement frigo transparent poignée solide",
    colors: ["#e3ebe5", "#b4c8ba"]
  },
  {
    id: "bocal-verre",
    name: "Bocal en verre à joint remplaçable",
    shortName: "Bocal verre hermétique",
    category: "cuisine",
    emoji: "🫙",
    budget: "6 à 20 €",
    budgetMax: 20,
    material: "Verre épais et joint silicone",
    capacity: "0,75 à 1,5 litre",
    cleaning: "Verre lavable, joint retiré",
    use: "Pâtes, riz, farine, café",
    format: "Rigide et réutilisable",
    description: "Un contenant durable dont le joint peut être retiré, nettoyé et idéalement remplacé.",
    tags: ["moins25", "lavable", "rigide", "reutilisable"],
    badge: "Longue durée",
    strengths: ["Contenu visible", "Pas d’odeur persistante", "Joint démontable"],
    checks: ["Vérifier la disponibilité des joints", "Contrôler la stabilité du fond", "Choisir une ouverture assez large"],
    avoid: "Les chocs thermiques et l’empilage non prévu par le fabricant.",
    searchTerm: "bocal verre hermétique joint remplaçable solide",
    colors: ["#e7ded0", "#bca88c"]
  },
  {
    id: "gourde-robuste",
    name: "Gourde robuste 750 ml à bouchon protégé",
    shortName: "Gourde robuste 750 ml",
    category: "sport",
    emoji: "🚰",
    budget: "15 à 35 €",
    budgetMax: 35,
    material: "Tritan épais ou inox",
    capacity: "700 à 800 ml",
    cleaning: "Bouchon démontable",
    use: "Sport, travail, voyage",
    format: "Standard avec poignée",
    description: "Un format polyvalent, assez grand pour l’entraînement mais encore facile à transporter.",
    tags: ["moins40", "lavable", "reutilisable", "compact"],
    badge: "Quotidien",
    strengths: ["Bouchon protégé", "Poignée intégrée", "Pièces démontables"],
    checks: ["Chercher un joint remplaçable", "Vérifier le diamètre du porte-gourde", "Lire les consignes pour boissons chaudes"],
    avoid: "Confondre résistance aux chocs, étanchéité et isolation thermique : ce sont trois critères différents.",
    searchTerm: "gourde robuste 750 ml bouchon protégé sport",
    colors: ["#c6d9d5", "#85b0a7"]
  },
  {
    id: "serviette-microfibre",
    name: "Serviette microfibre à boucle de suspension",
    shortName: "Serviette microfibre",
    category: "sport",
    emoji: "🧻",
    budget: "10 à 25 €",
    budgetMax: 25,
    material: "Microfibre à tissage dense",
    capacity: "Corps ou douche selon taille",
    cleaning: "Machine selon étiquette",
    use: "Salle de sport, piscine, voyage",
    format: "Pliable et légère",
    description: "Elle prend peu de place et sèche rapidement lorsqu’elle est suspendue après usage.",
    tags: ["moins25", "pliable", "lavable", "reutilisable"],
    badge: "Séchage rapide",
    strengths: ["Boucle de suspension", "Housse respirante", "Faible encombrement"],
    checks: ["Comparer la taille réelle", "Choisir une housse ajourée", "Vérifier les consignes d’adoucissant"],
    avoid: "La laisser humide dans une housse fermée pendant plusieurs heures.",
    searchTerm: "serviette microfibre sport boucle suspension housse",
    colors: ["#d1d8e1", "#8b9db1"]
  },
  {
    id: "sac-sport",
    name: "Sac de sport avec compartiment chaussures ventilé",
    shortName: "Sac sport compartimenté",
    category: "sport",
    emoji: "🎒",
    budget: "25 à 60 €",
    budgetMax: 60,
    material: "Polyester renforcé avec fond enduit",
    capacity: "30 à 45 litres",
    cleaning: "Chiffon humide",
    use: "Salle de sport, danse, week-end",
    format: "Souple avec fond renforcé",
    description: "Il sépare les chaussures du linge propre et garde les petits accessoires accessibles.",
    tags: ["reutilisable", "lavable", "rigide"],
    badge: "Bien séparé",
    strengths: ["Compartiment ventilé", "Fond protégé", "Bandoulière amovible"],
    checks: ["Observer les coutures des poignées", "Vérifier la longueur des fermetures", "Contrôler la ventilation du compartiment"],
    avoid: "Surcharger le compartiment chaussures au point de déformer tout le sac.",
    searchTerm: "sac sport compartiment chaussures ventilé renforcé",
    colors: ["#d4cbdc", "#9785a7"]
  }
];

const merchantDirectory = {
  amazon: { label: "Amazon", domain: "amazon.fr", icon: "A" },
  cdiscount: { label: "Cdiscount", domain: "cdiscount.com", icon: "C" },
  ikea: { label: "IKEA", domain: "ikea.com/fr/fr", icon: "I" },
  leroymerlin: { label: "Leroy Merlin", domain: "leroymerlin.fr", icon: "L" },
  castorama: { label: "Castorama", domain: "castorama.fr", icon: "C" },
  manomano: { label: "ManoMano", domain: "manomano.fr", icon: "M" },
  decathlon: { label: "Decathlon", domain: "decathlon.fr", icon: "D" },
  intersport: { label: "Intersport", domain: "intersport.fr", icon: "I" },
  norauto: { label: "Norauto", domain: "norauto.fr", icon: "N" },
  feuvert: { label: "Feu Vert", domain: "feuvert.fr", icon: "F" }
};

const categoryMerchants = {
  maison: ["ikea", "leroymerlin", "amazon", "cdiscount"],
  voiture: ["norauto", "feuvert", "amazon", "cdiscount"],
  camping: ["decathlon", "manomano", "amazon", "cdiscount"],
  bricolage: ["leroymerlin", "castorama", "manomano", "amazon"],
  cuisine: ["ikea", "amazon", "cdiscount", "leroymerlin"],
  sport: ["decathlon", "intersport", "amazon", "cdiscount"]
};

function storedSet(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return new Set(Array.isArray(value) ? value.filter(id => products.some(product => product.id === id)) : []);
  } catch {
    return new Set();
  }
}

const state = {
  view: "home",
  previousView: "home",
  category: "all",
  tags: new Set(),
  query: "",
  favorites: storedSet("lcc-favorites"),
  compare: storedSet("lcc-compare"),
  quizStep: 0,
  quizAnswers: {},
  activeProductId: null,
  buyProductId: null
};

const quizQuestions = [
  {
    key: "category",
    title: "Dans quel univers cherchez-vous une solution ?",
    options: categories.map(category => [category.id, category.label])
  },
  {
    key: "priority",
    title: "Qu’est-ce qui compte le plus pour vous ?",
    options: [["compact", "Gagner de la place"], ["lavable", "Nettoyer facilement"], ["rigide", "Protéger le contenu"], ["pliable", "Ranger après usage"], ["reutilisable", "Le garder longtemps"]]
  },
  {
    key: "budget",
    title: "Quel budget maximum souhaitez-vous viser ?",
    options: [[20, "Moins de 20 €"], [30, "Moins de 30 €"], [50, "Moins de 50 €"], [999, "Le besoin passe avant le prix"]]
  },
  {
    key: "size",
    title: "Quel format vous conviendrait le mieux ?",
    options: [["small", "Compact"], ["medium", "Standard"], ["large", "Grande capacité"], ["any", "Peu importe"]]
  }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const productIconMap = {
  "boite-empilable": "box",
  "panier-douche": "basket",
  "cache-cables": "plug",
  "organiseur-coffre": "organizer",
  "poubelle-voiture": "bin",
  "compresseur-12v": "gauge",
  "seau-pliable": "bucket",
  "caisse-pliable": "crate",
  "lampe-camping": "lamp",
  "tournevis-embouts": "screwdriver",
  "boite-outils": "toolbox",
  "metre-ruban": "measure",
  "lunch-box": "lunch",
  "bac-frigo": "tray",
  "bocal-verre": "jar",
  "gourde-robuste": "bottle",
  "serviette-microfibre": "towel",
  "sac-sport": "bag"
};

const icons = {
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 10.5 12 3.8l8.5 6.7"/><path d="M5.5 9.2V20h13V9.2"/><path d="M9.5 20v-6h5v6"/></svg>',
  car: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 15 1.8-5.2A2 2 0 0 1 8.7 8.5h6.6a2 2 0 0 1 1.9 1.3L19 15"/><path d="M4 15h16v4H4z"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg>',
  tent: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 20 9-16 9 16Z"/><path d="m12 4 4 16M12 4 8 20M9 20l3-5 3 5"/></svg>',
  tools: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6.5 3-3 3 3-3 3"/><path d="m13 8 3 3-8.7 8.7a2.1 2.1 0 0 1-3-3Z"/><path d="m5 4 4 4M4 5l2-2 4 4-2 2Z"/></svg>',
  bowl: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16a8 8 0 0 1-16 0Z"/><path d="M8 5c0 1-1 1.5-1 2.5M12 4c0 1-1 1.5-1 2.5M16 5c0 1-1 1.5-1 2.5"/></svg>',
  sport: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="2"/><path d="m10 8-2.5 4 3 2 1.5 6M14 8l2 4 3 1M10.5 14l-4.5 5M14 11l-2.5 3"/></svg>',
  box: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 8-4 8 4-8 4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10"/><path d="m8 5 8 4"/></svg>',
  basket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h16l-1.5 11h-13Z"/><path d="m8 9 4-6 4 6M8 13v3M12 13v3M16 13v3"/></svg>',
  plug: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v5M16 3v5M6 8h12v2a6 6 0 0 1-6 6v5"/><path d="M9 21h6"/></svg>',
  organizer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18v13H3z"/><path d="M3 12h18M9 7v13M15 7v13"/><path d="M7 4h10v3"/></svg>',
  bin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg>',
  gauge: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18a8 8 0 1 1 14 0"/><path d="m12 14 4-4"/><circle cx="12" cy="14" r="1.5"/><path d="M8 18h8"/></svg>',
  bucket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1.5 12h-11Z"/><path d="M7 8a5 5 0 0 1 10 0M9 12h6"/></svg>',
  crate: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18v13H3zM6 7V4h12v3M7 11h10M7 15h10"/></svg>',
  lamp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9h8l2 10H6Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3M9 19h6M10 13h4"/></svg>',
  screwdriver: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 3 7 7-3 3-7-7Z"/><path d="m12 8-8 8a2.8 2.8 0 0 0 4 4l8-8"/></svg>',
  toolbox: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8h18v12H3z"/><path d="M8 8V5h8v3M3 12h18M10 12v3h4v-3"/></svg>',
  measure: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M7 10v4M10 10v2M13 10v4M16 10v2"/></svg>',
  lunch: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M8 6V4h8v2M3 11h18M12 11v9"/></svg>',
  tray: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v15H4zM4 10h16M9 10v10"/><path d="M7 7h4"/></svg>',
  jar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h10M8 5v3a3 3 0 0 0-1 2v8a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-8a3 3 0 0 0-1-2V5"/><path d="M8 12h8"/></svg>',
  bottle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6v4l2 3v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9l2-3Z"/><path d="M9 7h6M8 13h8"/></svg>',
  towel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z"/><path d="M8 4v16M12 8h4M12 12h4"/></svg>',
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16l-1 12H5Z"/><path d="M8 8a4 4 0 0 1 8 0M4 12h16M15 12v8"/></svg>'
};

function iconSvg(name) {
  return icons[name] || icons.box;
}


function persist() {
  try {
    localStorage.setItem("lcc-favorites", JSON.stringify([...state.favorites]));
    localStorage.setItem("lcc-compare", JSON.stringify([...state.compare]));
  } catch {
    // L’application reste utilisable si le navigateur bloque le stockage local.
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2300);
}

function categoryLabel(id) {
  return categories.find(category => category.id === id)?.label || "Produit";
}

function tagLabel(tag) {
  const labels = {
    moins25: "Moins de 25 €",
    moins40: "Moins de 40 €",
    lavable: "Facile à laver",
    empilable: "Empilable",
    pliable: "Pliable",
    compact: "Compact",
    rigide: "Structure renforcée",
    etanche: "Protégé de l’eau",
    rechargeable: "Rechargeable",
    reutilisable: "Réutilisable"
  };
  return labels[tag] || tag;
}

function updateHash(view, productId = null) {
  const nextHash = productId ? `#product/${productId}` : `#${view}`;
  if (window.location.hash !== nextHash) history.pushState(null, "", nextHash);
}

function navigate(view, options = {}, syncHash = true) {
  if (state.view !== "product" && view === "product") state.previousView = state.view;
  if (state.view === "product" && view !== "product") state.activeProductId = null;
  state.view = view;
  $(".app-shell")?.classList.toggle("focus-mode", view === "quiz" || view === "product");

  $$(".view").forEach(section => section.classList.toggle("active", section.id === `view-${view}`));
  $$(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === view));

  if (view === "explore") {
    if (options.category) state.category = options.category;
    if (options.filter === "budget") {
      state.category = "all";
      state.tags = new Set(["moins25"]);
    }
    renderFilters();
    renderProducts();
  }

  if (view === "favorites") renderFavorites();
  if (view === "compare") renderCompare();
  if (view === "quiz") renderQuiz();

  updateCompareCount();
  if (syncHash) updateHash(view, view === "product" ? state.activeProductId : null);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function routeFromHash() {
  const raw = window.location.hash.replace(/^#/, "");
  if (raw.startsWith("product/")) {
    const id = raw.split("/")[1];
    if (products.some(product => product.id === id)) {
      showProduct(id, true, false);
      return;
    }
  }

  const allowed = ["home", "explore", "quiz", "favorites", "compare"];
  navigate(allowed.includes(raw) ? raw : "home", {}, false);
}

function createProductCard(product) {
  const favorite = state.favorites.has(product.id);
  const article = document.createElement("article");
  article.className = "product-card";
  article.innerHTML = `
    <div class="product-visual" style="--visual-1:${product.colors[0]};--visual-2:${product.colors[1]}">
      <span class="product-badge">${product.badge}</span>
      <span class="icon-art" aria-hidden="true">${iconSvg(productIconMap[product.id] || product.category)}</span>
    </div>
    <div class="product-body">
      <button class="favorite-button ${favorite ? "active" : ""}" data-favorite="${product.id}" aria-label="${favorite ? "Retirer des favoris" : "Ajouter aux favoris"}">${favorite ? "♥" : "♡"}</button>
      <div class="product-meta">
        <span>${categoryLabel(product.category)}</span>
        <span>${product.budget}</span>
      </div>
      <h3>${product.shortName}</h3>
      <p>${product.description}</p>
      <div class="product-tags">${product.tags.slice(0, 2).map(tag => `<span>${tagLabel(tag)}</span>`).join("")}</div>
      <div class="product-actions">
        <button class="view-product-button" data-product="${product.id}">Voir le choix →</button>
      </div>
    </div>`;
  return article;
}

function createFeaturedCard(product) {
  const button = document.createElement("button");
  button.className = "featured-card";
  button.style.setProperty("--visual-1", product.colors[0]);
  button.style.setProperty("--visual-2", product.colors[1]);
  button.innerHTML = `
    <span class="featured-icon" aria-hidden="true">${iconSvg(productIconMap[product.id] || product.category)}</span>
    <span class="featured-copy"><small>${categoryLabel(product.category)}</small><strong>${product.shortName}</strong><span>${product.budget}</span></span>
    <span class="featured-arrow" aria-hidden="true">→</span>`;
  button.addEventListener("click", () => showProduct(product.id));
  return button;
}

function renderHome() {
  const homeCategories = $("#homeCategories");
  homeCategories.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category-card";
    button.innerHTML = `<span class="category-icon" aria-hidden="true">${iconSvg(category.icon)}</span><strong>${category.label}</strong><small>${category.description}</small>`;
    button.addEventListener("click", () => navigate("explore", { category: category.id }));
    homeCategories.appendChild(button);
  });

  const featuredIds = ["boite-empilable", "organiseur-coffre", "gourde-robuste"];
  const featured = featuredIds.map(id => products.find(product => product.id === id)).filter(Boolean);
  const featuredProducts = $("#featuredProducts");
  featuredProducts.innerHTML = "";
  featured.forEach(product => featuredProducts.appendChild(createFeaturedCard(product)));
}

function renderFilters() {
  const categoryFilters = $("#categoryFilters");
  categoryFilters.innerHTML = "";
  [{ id: "all", label: "Tout" }, ...categories].forEach(category => {
    const button = document.createElement("button");
    button.className = `filter-chip ${state.category === category.id ? "active" : ""}`;
    button.textContent = category.label;
    button.addEventListener("click", () => {
      state.category = category.id;
      renderFilters();
      renderProducts();
    });
    categoryFilters.appendChild(button);
  });

  const availableTags = [
    ["moins25", "Moins de 25 €"], ["lavable", "Lavable"], ["compact", "Compact"],
    ["pliable", "Pliable"], ["rigide", "Renforcé"], ["reutilisable", "Réutilisable"]
  ];
  const tagFilters = $("#tagFilters");
  tagFilters.innerHTML = "";
  availableTags.forEach(([id, label]) => {
    const button = document.createElement("button");
    button.className = `filter-chip ${state.tags.has(id) ? "active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", () => {
      state.tags.has(id) ? state.tags.delete(id) : state.tags.add(id);
      renderFilters();
      renderProducts();
    });
    tagFilters.appendChild(button);
  });
}

function getFilteredProducts() {
  const normalized = state.query.trim().toLocaleLowerCase("fr");
  return products.filter(product => {
    const categoryMatch = state.category === "all" || product.category === state.category;
    const tagsMatch = [...state.tags].every(tag => product.tags.includes(tag));
    const haystack = `${product.name} ${product.description} ${product.material} ${product.use} ${product.strengths.join(" ")} ${product.tags.join(" ")}`.toLocaleLowerCase("fr");
    return categoryMatch && tagsMatch && (!normalized || haystack.includes(normalized));
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  $("#resultCount").textContent = `${filtered.length} choix`;
  const grid = $("#productGrid");
  grid.innerHTML = "";
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><div>⌕</div><h2>Aucun résultat</h2><p>Essayez une autre catégorie ou retirez un filtre.</p></div>`;
    return;
  }
  filtered.forEach(product => grid.appendChild(createProductCard(product)));
  bindProductActions(grid);
}

function bindProductActions(scope = document) {
  $$("[data-favorite]", scope).forEach(button => button.addEventListener("click", event => {
    event.stopPropagation();
    toggleFavorite(button.dataset.favorite);
  }));
  $$("[data-compare]", scope).forEach(button => button.addEventListener("click", event => {
    event.stopPropagation();
    toggleCompare(button.dataset.compare);
  }));
  $$("[data-product]", scope).forEach(button => button.addEventListener("click", () => showProduct(button.dataset.product)));
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast("Retiré des favoris");
  } else {
    state.favorites.add(id);
    showToast("Ajouté aux favoris");
  }
  persist();
  renderHome();
  if (state.view === "explore") renderProducts();
  if (state.view === "favorites") renderFavorites();
  if (state.view === "product") showProduct(id, false, false);
}

function toggleCompare(id) {
  if (state.compare.has(id)) {
    state.compare.delete(id);
    showToast("Retiré du comparateur");
  } else {
    if (state.compare.size >= 3) {
      showToast("Maximum : 3 produits");
      return;
    }
    state.compare.add(id);
    showToast("Ajouté au comparateur");
  }
  persist();
  updateCompareCount();
  renderHome();
  if (state.view === "explore") renderProducts();
  if (state.view === "compare") renderCompare();
  if (state.view === "product") showProduct(id, false, false);
}

function updateCompareCount() {
  const count = $("#compareCount");
  const tray = $("#compareTray");
  if (count) count.textContent = state.compare.size;
  if (tray) tray.hidden = state.compare.size === 0 || state.view === "compare";
}

function renderFavorites() {
  const selected = products.filter(product => state.favorites.has(product.id));
  $("#favoritesEmpty").style.display = selected.length ? "none" : "grid";
  const grid = $("#favoritesGrid");
  grid.innerHTML = "";
  selected.forEach(product => grid.appendChild(createProductCard(product)));
  bindProductActions(grid);
}

function renderCompare() {
  const selected = products.filter(product => state.compare.has(product.id));
  $("#compareEmpty").style.display = selected.length ? "none" : "grid";
  const wrap = $("#compareWrap");
  if (!selected.length) {
    wrap.innerHTML = "";
    return;
  }
  const rows = [
    ["Budget indicatif", product => product.budget],
    ["Matière à viser", product => product.material],
    ["Capacité", product => product.capacity],
    ["Entretien", product => product.cleaning],
    ["Usage", product => product.use],
    ["Format", product => product.format]
  ];
  wrap.innerHTML = `
    <table class="compare-table">
      <thead><tr><th>Critère</th>${selected.map(product => `<th><div class="compare-product-head"><span class="compare-mini-icon" aria-hidden="true">${iconSvg(productIconMap[product.id] || product.category)}</span><strong>${product.shortName}</strong><button class="compare-remove" data-remove-compare="${product.id}">Retirer</button></div></th>`).join("")}</tr></thead>
      <tbody>${rows.map(([label, value]) => `<tr><th>${label}</th>${selected.map(product => `<td>${value(product)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`;
  $$('[data-remove-compare]', wrap).forEach(button => button.addEventListener("click", () => toggleCompare(button.dataset.removeCompare)));
}

function showProduct(id, navigateToProduct = true, syncHash = true) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  state.activeProductId = id;
  const favorite = state.favorites.has(id);
  const compared = state.compare.has(id);
  $("#productDetail").innerHTML = `
    <div class="detail-hero">
      <div class="detail-visual" style="--visual-1:${product.colors[0]};--visual-2:${product.colors[1]}">
        <span class="detail-icon" aria-hidden="true">${iconSvg(productIconMap[product.id] || product.category)}</span>
      </div>
      <div class="detail-copy">
        <span class="eyebrow">${categoryLabel(product.category)} · ${product.badge}</span>
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <div class="detail-price">Budget indicatif : ${product.budget}</div>
        <div class="detail-actions detail-actions-main">
          <button class="primary-button" data-buy-product="${product.id}">Chercher un modèle →</button>
          <button class="secondary-button" data-share-product="${product.id}" aria-label="Partager cette fiche">Partager</button>
        </div>
        <div class="detail-actions detail-actions-secondary">
          <button class="soft-button" data-detail-favorite="${product.id}">${favorite ? "♥ Enregistré" : "♡ Enregistrer"}</button>
          <button class="soft-button" data-detail-compare="${product.id}">${compared ? "✓ Dans le comparateur" : "⇄ Ajouter au comparateur"}</button>
        </div>
      </div>
    </div>

    <div class="detail-keyfacts">
      <div class="keyfact"><small>Matière à viser</small><strong>${product.material}</strong></div>
      <div class="keyfact"><small>Usage</small><strong>${product.use}</strong></div>
      <div class="keyfact"><small>Entretien</small><strong>${product.cleaning}</strong></div>
      <div class="keyfact"><small>Format</small><strong>${product.format}</strong></div>
    </div>

    <div class="detail-panels">
      <section class="detail-panel priority-panel"><h2>À vérifier avant d’acheter</h2><ul class="detail-list">${product.checks.map(item => `<li>${item}</li>`).join("")}</ul></section>
      <section class="detail-panel"><h2>Ce qui fait la différence</h2><ul class="detail-list">${product.strengths.map(item => `<li>${item}</li>`).join("")}</ul></section>
      <section class="detail-panel"><h2>Le bon profil</h2><ul class="detail-list"><li><strong>Capacité :</strong>&nbsp;${product.capacity}</li><li><strong>Usage :</strong>&nbsp;${product.use}</li><li><strong>Format :</strong>&nbsp;${product.format}</li></ul></section>
      <section class="detail-panel warning-panel"><h2>À éviter</h2><p>${product.avoid}</p></section>
    </div>

    <div class="public-offer"><strong>Bon réflexe :</strong> comparez deux vendeurs, vérifiez les dimensions complètes et lisez les conditions de retour avant de commander.</div>`;

  $("[data-buy-product]").addEventListener("click", () => openBuyModal(id));
  $("[data-share-product]").addEventListener("click", () => shareProduct(id));
  $("[data-detail-favorite]").addEventListener("click", () => toggleFavorite(id));
  $("[data-detail-compare]").addEventListener("click", () => toggleCompare(id));
  if (navigateToProduct) navigate("product", {}, syncHash);
}

function siteSearchUrl(domain, query) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${query} site:${domain}`)}`;
}

function openBuyModal(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  state.buyProductId = id;
  $("#buyModalTitle").textContent = product.shortName;
  $("#buyModalText").textContent = `Comparez les caractéristiques réelles avec notre fiche avant de choisir un modèle.`;
  const grid = $("#merchantGrid");
  grid.innerHTML = "";
  categoryMerchants[product.category].forEach(key => {
    const merchant = merchantDirectory[key];
    const link = document.createElement("a");
    link.className = "merchant-link";
    link.href = siteSearchUrl(merchant.domain, product.searchTerm);
    link.target = "_blank";
    link.rel = "noopener noreferrer nofollow";
    link.innerHTML = `<span>${merchant.icon}</span><strong>Chercher chez ${merchant.label}</strong><small>Recherche externe ↗</small>`;
    grid.appendChild(link);
  });
  openModal("buyModal");
}

async function copyProductName() {
  const product = products.find(item => item.id === state.buyProductId);
  if (!product) return;
  try {
    await navigator.clipboard.writeText(product.searchTerm);
    showToast("Nom copié");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = product.searchTerm;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("Nom copié");
  }
}

async function shareProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  const url = `${window.location.href.split("#")[0]}#product/${product.id}`;
  const shareData = { title: product.name, text: `${product.name} — les points à vérifier avant d’acheter.`, url };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(url);
      showToast("Lien copié");
    }
  } catch (error) {
    if (error?.name !== "AbortError") showToast("Partage indisponible");
  }
}

function renderQuiz() {
  const content = $("#quizContent");
  const progress = $("#quizProgress");
  if (state.quizStep >= quizQuestions.length) {
    progress.style.width = "100%";
    const recommendations = getQuizRecommendations();
    content.innerHTML = `<div class="quiz-results"><span class="eyebrow">Votre sélection</span><h2>Voici les trois pistes les plus cohérentes</h2><p>Commencez par la première, puis ouvrez les fiches pour vérifier les critères importants.</p><div class="product-grid" id="quizProductGrid"></div><button class="secondary-button" id="restartQuiz">Recommencer</button></div>`;
    const grid = $("#quizProductGrid");
    recommendations.forEach(product => grid.appendChild(createProductCard(product)));
    bindProductActions(grid);
    $("#restartQuiz").addEventListener("click", () => {
      state.quizStep = 0;
      state.quizAnswers = {};
      renderQuiz();
    });
    return;
  }

  const question = quizQuestions[state.quizStep];
  progress.style.width = `${((state.quizStep + 1) / quizQuestions.length) * 100}%`;
  const options = question.options.map(([value, label]) => {
    const category = question.key === "category" ? categories.find(item => item.id === value) : null;
    const icon = category ? `<span class="quiz-option-icon" aria-hidden="true">${iconSvg(category.icon)}</span>` : "";
    return `<button class="quiz-option" data-quiz-value="${value}">${icon}<span>${label}</span></button>`;
  }).join("");
  content.innerHTML = `<div class="quiz-step"><small>Étape ${state.quizStep + 1} sur ${quizQuestions.length}</small><h2>${question.title}</h2><div class="quiz-options">${options}</div>${state.quizStep > 0 ? '<button class="quiz-back" id="quizBack">← Revenir à la question précédente</button>' : ""}</div>`;
  $$('[data-quiz-value]', content).forEach(button => button.addEventListener("click", () => {
    const raw = button.dataset.quizValue;
    state.quizAnswers[question.key] = raw !== "" && !Number.isNaN(Number(raw)) ? Number(raw) : raw;
    state.quizStep += 1;
    renderQuiz();
  }));
  $("#quizBack")?.addEventListener("click", () => {
    state.quizStep = Math.max(0, state.quizStep - 1);
    renderQuiz();
  });
}

function getQuizRecommendations() {
  const answers = state.quizAnswers;
  return products.map(product => {
    let points = 0;
    if (answers.category && product.category === answers.category) points += 25;
    if (answers.budget && product.budgetMax <= answers.budget) points += 5;
    if (answers.priority && product.tags.includes(answers.priority)) points += 5;
    if (answers.size === "small" && product.tags.includes("compact")) points += 4;
    if (answers.size === "large" && /30|35|40|45|outils|compartiments/i.test(product.capacity)) points += 4;
    if (answers.size === "medium" && !product.tags.includes("compact")) points += 2;
    if (answers.size === "any") points += 1;
    return { product, points };
  }).sort((a, b) => b.points - a.points || a.product.budgetMax - b.product.budgetMax).slice(0, 3).map(item => item.product);
}

function openModal(id) {
  $("#toast")?.classList.remove("show");
  const modal = $(`#${id}`);
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => modal.querySelector("button, a")?.focus(), 20);
}

function closeModal(id) {
  const modal = $(`#${id}`);
  modal.hidden = true;
  if ($$(".modal-layer:not([hidden])").length === 0) document.body.style.overflow = "";
}

function bindNavigation() {
  $$("[data-view]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view, { filter: button.dataset.filter })));
  $("#searchInput").addEventListener("input", event => {
    state.query = event.target.value;
    renderProducts();
  });
  $("#resetFilters").addEventListener("click", () => {
    state.category = "all";
    state.tags.clear();
    state.query = "";
    $("#searchInput").value = "";
    renderFilters();
    renderProducts();
  });
  $("#productBack").addEventListener("click", () => navigate(state.previousView || "explore"));
  $("#infoBtn").addEventListener("click", () => openModal("infoModal"));
  $("#homeInfoBtn").addEventListener("click", () => openModal("infoModal"));
  $("#copyProductName").addEventListener("click", copyProductName);
  $$("[data-close-modal]").forEach(button => button.addEventListener("click", () => closeModal(button.dataset.closeModal)));
  $$(".modal-layer").forEach(layer => layer.addEventListener("click", event => {
    if (event.target === layer) closeModal(layer.id);
  }));
  window.addEventListener("hashchange", routeFromHash);
  window.addEventListener("popstate", routeFromHash);
  window.addEventListener("keydown", event => {
    if (event.key === "Escape") $$(".modal-layer:not([hidden])").forEach(layer => closeModal(layer.id));
  });
}

let deferredInstallPrompt = null;
const installBtn = $("#installBtn");

function isStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function configureInstallHelp() {
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isFirefox = /firefox/i.test(navigator.userAgent);
  const intro = $("#installHelpIntro");
  const steps = $("#installSteps");
  if (isIOS) {
    intro.textContent = "Sur iPhone ou iPad, l’installation se fait depuis Safari.";
    steps.innerHTML = "<li>Appuyez sur le bouton <strong>Partager</strong> de Safari.</li><li>Choisissez <strong>Sur l’écran d’accueil</strong>, puis <strong>Ajouter</strong>.</li>";
  } else if (isFirefox) {
    intro.textContent = "Selon la version de Firefox, l’installation peut ne pas être proposée.";
    steps.innerHTML = "<li>Ouvrez cette page dans Chrome ou Edge.</li><li>Utilisez ensuite <strong>Installer l’application</strong> dans le menu.</li>";
  } else {
    intro.textContent = "Le bouton automatique n’est pas encore disponible dans ce navigateur.";
    steps.innerHTML = "<li>Ouvrez le menu du navigateur.</li><li>Choisissez <strong>Installer l’application</strong> ou <strong>Ajouter à l’écran d’accueil</strong>.</li>";
  }
}

function refreshInstallButton() {
  installBtn.hidden = isStandaloneMode();
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  refreshInstallButton();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installBtn.hidden = true;
  showToast("Application installée");
});

installBtn.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    configureInstallHelp();
    openModal("installHelp");
    return;
  }
  try {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    showToast(choice.outcome === "accepted" ? "Installation lancée" : "Installation annulée");
    if (choice.outcome === "accepted") installBtn.hidden = true;
  } catch {
    configureInstallHelp();
    openModal("installHelp");
  } finally {
    deferredInstallPrompt = null;
  }
});

$("#installHelpClose").addEventListener("click", () => closeModal("installHelp"));
$("#installHelpOk").addEventListener("click", () => closeModal("installHelp"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(error => console.error("Service worker:", error)));
}

renderHome();
renderFilters();
renderProducts();
renderFavorites();
renderCompare();
renderQuiz();
updateCompareCount();
bindNavigation();
refreshInstallButton();
routeFromHash();
