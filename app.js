const categories = [
  { id: "maison", label: "Maison", icon: "🏠", description: "Rangement et organisation" },
  { id: "voiture", label: "Voiture", icon: "🚗", description: "Accessoires pratiques" },
  { id: "cuisine", label: "Cuisine", icon: "🥣", description: "Contenants et entretien" },
  { id: "voyage", label: "Voyage", icon: "🧳", description: "Transport et rangement" },
  { id: "exterieur", label: "Extérieur", icon: "⛺", description: "Camping, jardin, plage" },
  { id: "budget", label: "Petits costauds", icon: "💪", description: "Utiles à petit prix" }
];

const products = [
  {
    id: "box-12l",
    name: "Boîte empilable 12 L",
    category: "maison",
    emoji: "📦",
    price: 14.90,
    material: "Polypropylène",
    capacity: "12 litres",
    cleaning: "Éponge ou rinçage",
    use: "Placard, cellier, chambre",
    description: "Une boîte simple avec couvercle clipsable pour organiser les petits espaces.",
    tags: ["empilable", "moins20", "lavable"],
    badge: "Petit espace",
    strengths: ["Format facile à déplacer", "Couvercle clipsable", "Parois lavables"],
    limits: ["Ne pas utiliser pour des charges très lourdes", "Dimensions à vérifier avant achat"],
    score: 82,
    colors: ["#e6d0b5", "#c9ab85"]
  },
  {
    id: "coffre-auto",
    name: "Organiseur de coffre pliable",
    category: "voiture",
    emoji: "🧰",
    price: 24.90,
    material: "Polyester renforcé",
    capacity: "3 compartiments",
    cleaning: "Chiffon humide",
    use: "Courses, outils, accessoires auto",
    description: "Un organiseur pliable qui évite aux objets de se promener dans le coffre.",
    tags: ["pliable", "moins30", "voiture"],
    badge: "Voiture",
    strengths: ["Se plie à plat", "Poignées latérales", "Compartiments séparés"],
    limits: ["Pas totalement étanche", "Tenue variable selon le revêtement du coffre"],
    score: 88,
    colors: ["#cbd6d2", "#91aaa3"]
  },
  {
    id: "lunch-3",
    name: "Lunch box à 3 compartiments",
    category: "cuisine",
    emoji: "🍱",
    price: 18.50,
    material: "Polypropylène sans BPA",
    capacity: "1,2 litre",
    cleaning: "Lave-vaisselle selon fabricant",
    use: "Repas préparé, travail, sortie",
    description: "Un contenant compartimenté pour séparer le plat, l’accompagnement et la collation.",
    tags: ["moins20", "lavable", "repas"],
    badge: "Repas",
    strengths: ["Trois zones séparées", "Format sac à dos", "Réutilisable"],
    limits: ["Étanchéité à confirmer selon le modèle réel", "Pas destiné aux aliments très liquides sans joint"],
    score: 86,
    colors: ["#e9d7c3", "#d6aa7d"]
  },
  {
    id: "trousse-rigide",
    name: "Trousse de voyage semi-rigide",
    category: "voyage",
    emoji: "🧳",
    price: 19.90,
    material: "EVA moulé",
    capacity: "Format cabine",
    cleaning: "Chiffon humide",
    use: "Câbles, accessoires, toilette",
    description: "Une petite coque semi-rigide pour protéger les accessoires de voyage et les câbles.",
    tags: ["moins20", "rigide", "voyage"],
    badge: "Voyage",
    strengths: ["Coque semi-rigide", "Ouverture complète", "Élastiques intérieurs"],
    limits: ["Résiste aux chocs légers, pas à l’écrasement extrême", "Taille à adapter au contenu"],
    score: 84,
    colors: ["#c8d4d7", "#8ea7ad"]
  },
  {
    id: "seau-pliable",
    name: "Seau pliable en silicone",
    category: "exterieur",
    emoji: "🪣",
    price: 16.90,
    material: "Silicone et plastique",
    capacity: "10 litres",
    cleaning: "Rinçage",
    use: "Camping, voiture, jardin",
    description: "Un seau compact qui se replie pour le rangement et se déploie au besoin.",
    tags: ["moins20", "pliable", "lavable"],
    badge: "Gain de place",
    strengths: ["Très compact une fois plié", "Poignée de transport", "Multi-usage"],
    limits: ["Ne pas poser près d’une forte chaleur", "Stabilité à vérifier sur sol irrégulier"],
    score: 89,
    colors: ["#d8d2bb", "#a9a07f"]
  },
  {
    id: "bac-frigo",
    name: "Bac transparent pour réfrigérateur",
    category: "cuisine",
    emoji: "🥬",
    price: 11.90,
    material: "PET alimentaire",
    capacity: "4 litres",
    cleaning: "Lavage manuel conseillé",
    use: "Réfrigérateur, garde-manger",
    description: "Un bac à poignée frontale pour regrouper les petits aliments et mieux voir les stocks.",
    tags: ["moins20", "transparent", "empilable"],
    badge: "Organisation",
    strengths: ["Contenu visible", "Poignée frontale", "Format rectangulaire"],
    limits: ["Ne pas exposer à une forte chaleur", "Empilage selon le modèle exact"],
    score: 80,
    colors: ["#e3ebe5", "#b4c8ba"]
  },
  {
    id: "poubelle-auto",
    name: "Mini-poubelle de voiture",
    category: "voiture",
    emoji: "🚮",
    price: 9.90,
    material: "ABS",
    capacity: "1,5 litre",
    cleaning: "Rinçage",
    use: "Portière, console, bureau",
    description: "Un petit contenant rigide pour garder papiers et emballages au même endroit.",
    tags: ["moins10", "lavable", "voiture"],
    badge: "Moins de 10 €",
    strengths: ["Petit format", "Couvercle basculant", "Facile à vider"],
    limits: ["Capacité limitée", "Compatibilité à vérifier avec la portière"],
    score: 78,
    colors: ["#d3d6d2", "#9da49d"]
  },
  {
    id: "panier-bain",
    name: "Panier de douche ajouré",
    category: "maison",
    emoji: "🧼",
    price: 13.50,
    material: "Polypropylène",
    capacity: "Produits de toilette",
    cleaning: "Rinçage",
    use: "Salle de bain, buanderie",
    description: "Un panier ajouré avec poignée pour transporter et faire sécher les produits.",
    tags: ["moins20", "lavable", "maison"],
    badge: "Salle de bain",
    strengths: ["Évacuation de l’eau", "Poignée intégrée", "Facile à nettoyer"],
    limits: ["Ne remplace pas une fixation murale", "Charge modérée"],
    score: 81,
    colors: ["#d7e2df", "#a5c0b8"]
  },
  {
    id: "boite-cables",
    name: "Boîte de rangement pour câbles",
    category: "maison",
    emoji: "🔌",
    price: 12.90,
    material: "ABS",
    capacity: "Multiprise et câbles",
    cleaning: "Chiffon sec",
    use: "Bureau, salon",
    description: "Une boîte ventilée qui masque et regroupe une multiprise et ses câbles.",
    tags: ["moins20", "rigide", "bureau"],
    badge: "Bureau",
    strengths: ["Réduit le désordre visuel", "Ouvertures latérales", "Couvercle amovible"],
    limits: ["Ventilation nécessaire", "Ne pas couvrir un appareil qui chauffe fortement"],
    score: 83,
    colors: ["#e4d6c5", "#c2a789"]
  },
  {
    id: "gourde",
    name: "Gourde robuste 750 ml",
    category: "voyage",
    emoji: "🚰",
    price: 17.90,
    material: "Tritan",
    capacity: "750 ml",
    cleaning: "Lavage manuel",
    use: "Travail, voyage, extérieur",
    description: "Une gourde à poignée avec bouchon protégé pour un usage quotidien.",
    tags: ["moins20", "reutilisable", "voyage"],
    badge: "Quotidien",
    strengths: ["Bonne prise en main", "Réutilisable", "Format polyvalent"],
    limits: ["Étanchéité dépend du joint réel", "Ne pas confondre avec une bouteille isotherme"],
    score: 85,
    colors: ["#c6d9d5", "#85b0a7"]
  },
  {
    id: "caisse-pliable",
    name: "Caisse pliable multi-usage",
    category: "exterieur",
    emoji: "🧺",
    price: 27.90,
    material: "Polypropylène renforcé",
    capacity: "32 litres",
    cleaning: "Rinçage",
    use: "Courses, coffre, camping",
    description: "Une caisse qui se replie après usage pour prendre moins de place.",
    tags: ["moins30", "pliable", "exterieur"],
    badge: "Multi-usage",
    strengths: ["Grande capacité", "Poignées", "Se range à plat"],
    limits: ["Charge maximale à vérifier selon fabricant", "Attention aux doigts lors du pliage"],
    score: 90,
    colors: ["#d8ceb3", "#9e906a"]
  },
  {
    id: "boite-etanche",
    name: "Boîte étanche pour petits objets",
    category: "exterieur",
    emoji: "🧭",
    price: 15.90,
    material: "ABS avec joint silicone",
    capacity: "Téléphone et clés",
    cleaning: "Rinçage puis séchage",
    use: "Plage, bateau, camping",
    description: "Une petite boîte rigide avec joint pour protéger des éclaboussures et de la poussière.",
    tags: ["moins20", "etanche", "rigide"],
    badge: "Protection",
    strengths: ["Joint périphérique", "Coque rigide", "Format compact"],
    limits: ["Indice d’étanchéité réel à vérifier", "Un test doit être fait avant immersion"],
    score: 87,
    colors: ["#cbd6cd", "#8aa590"]
  }
];

const state = {
  view: "home",
  previousView: "home",
  category: "all",
  tags: new Set(),
  query: "",
  favorites: new Set(JSON.parse(localStorage.getItem("lcc-favorites") || "[]")),
  compare: new Set(JSON.parse(localStorage.getItem("lcc-compare") || "[]")),
  quizStep: 0,
  quizAnswers: {}
};

const quizQuestions = [
  {
    key: "category",
    title: "Où allez-vous surtout utiliser le produit ?",
    options: [
      ["maison", "À la maison"],
      ["voiture", "Dans la voiture"],
      ["cuisine", "Pour les repas et la cuisine"],
      ["voyage", "En voyage"],
      ["exterieur", "À l’extérieur"]
    ]
  },
  {
    key: "budget",
    title: "Quel budget souhaitez-vous respecter ?",
    options: [
      [10, "Moins de 10 €"],
      [20, "Moins de 20 €"],
      [30, "Moins de 30 €"],
      [999, "Je privilégie surtout l’usage"]
    ]
  },
  {
    key: "priority",
    title: "Votre priorité principale ?",
    options: [
      ["empilable", "Gagner de la place"],
      ["lavable", "Nettoyer facilement"],
      ["rigide", "Protéger le contenu"],
      ["pliable", "Ranger après utilisation"],
      ["reutilisable", "Réutiliser longtemps"]
    ]
  },
  {
    key: "water",
    title: "Le produit doit-il résister à l’eau ?",
    options: [
      ["etanche", "Oui, c’est important"],
      ["lavable", "Il doit surtout être lavable"],
      ["none", "Ce n’est pas prioritaire"]
    ]
  },
  {
    key: "frequency",
    title: "À quelle fréquence allez-vous l’utiliser ?",
    options: [
      [8, "Tous les jours"],
      [4, "Plusieurs fois par semaine"],
      [2, "Occasionnellement"]
    ]
  },
  {
    key: "size",
    title: "Quel format recherchez-vous ?",
    options: [
      ["small", "Compact"],
      ["medium", "Standard"],
      ["large", "Grande capacité"],
      ["any", "Peu importe"]
    ]
  }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function money(value) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
}

function persist() {
  localStorage.setItem("lcc-favorites", JSON.stringify([...state.favorites]));
  localStorage.setItem("lcc-compare", JSON.stringify([...state.compare]));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

function navigate(view, options = {}) {
  if (state.view !== "product") state.previousView = state.view;
  state.view = view;

  $$(".view").forEach((section) => section.classList.toggle("active", section.id === `view-${view}`));
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view));

  if (view === "explore") {
    if (options.category) state.category = options.category;
    if (options.filter === "budget") {
      state.category = "all";
      state.tags = new Set(["moins20"]);
    }
    renderFilters();
    renderProducts();
  }

  if (view === "favorites") renderFavorites();
  if (view === "compare") renderCompare();
  if (view === "quiz") renderQuiz();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function createProductCard(product) {
  const favorite = state.favorites.has(product.id);
  const compared = state.compare.has(product.id);

  const article = document.createElement("article");
  article.className = "product-card";
  article.innerHTML = `
    <div class="product-visual" style="--visual-1:${product.colors[0]};--visual-2:${product.colors[1]}">
      <span class="product-badge">${product.badge}</span>
      <button class="favorite-button ${favorite ? "active" : ""}" data-favorite="${product.id}" aria-label="${favorite ? "Retirer des favoris" : "Ajouter aux favoris"}">${favorite ? "♥" : "♡"}</button>
      <span class="product-emoji" aria-hidden="true">${product.emoji}</span>
    </div>
    <div class="product-body">
      <div class="product-meta">
        <span>${categories.find(c => c.id === product.category)?.label || "Produit"}</span>
        <span>env. ${money(product.price)}</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-tags">${product.tags.slice(0, 3).map(tag => `<span>${tagLabel(tag)}</span>`).join("")}</div>
      <div class="product-actions">
        <button class="view-product-button" data-product="${product.id}">Voir la fiche</button>
        <button class="compare-button ${compared ? "active" : ""}" data-compare="${product.id}">${compared ? "Ajouté" : "Comparer"}</button>
      </div>
    </div>
  `;
  return article;
}

function tagLabel(tag) {
  const labels = {
    moins10: "Moins de 10 €",
    moins20: "Moins de 20 €",
    moins30: "Moins de 30 €",
    lavable: "Facile à laver",
    empilable: "Empilable",
    pliable: "Pliable",
    rigide: "Semi-rigide",
    etanche: "Protégé de l’eau",
    reutilisable: "Réutilisable",
    voiture: "Voiture",
    voyage: "Voyage",
    repas: "Repas",
    transparent: "Transparent",
    maison: "Maison",
    bureau: "Bureau",
    exterieur: "Extérieur"
  };
  return labels[tag] || tag;
}

function renderHome() {
  const homeCategories = $("#homeCategories");
  homeCategories.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "category-card";
    button.innerHTML = `
      <span class="category-icon">${category.icon}</span>
      <strong>${category.label}</strong>
      <small>${category.description}</small>
    `;
    button.addEventListener("click", () => navigate("explore", { category: category.id === "budget" ? "all" : category.id, filter: category.id === "budget" ? "budget" : undefined }));
    homeCategories.appendChild(button);
  });

  const featured = products.filter(product => product.price < 20).slice(0, 5);
  const featuredProducts = $("#featuredProducts");
  featuredProducts.innerHTML = "";
  featured.forEach(product => featuredProducts.appendChild(createProductCard(product)));
  bindProductActions(featuredProducts);
}

function renderFilters() {
  const categoryFilters = $("#categoryFilters");
  categoryFilters.innerHTML = "";

  [{ id: "all", label: "Tout" }, ...categories.filter(c => c.id !== "budget")].forEach(category => {
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
    ["moins20", "Moins de 20 €"],
    ["lavable", "Facile à laver"],
    ["empilable", "Empilable"],
    ["pliable", "Pliable"],
    ["rigide", "Rigide"],
    ["etanche", "Protégé de l’eau"]
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
  const normalized = state.query.trim().toLowerCase();
  return products.filter(product => {
    const categoryMatch = state.category === "all" || product.category === state.category;
    const tagsMatch = [...state.tags].every(tag => product.tags.includes(tag));
    const haystack = `${product.name} ${product.description} ${product.material} ${product.use} ${product.tags.join(" ")}`.toLowerCase();
    const queryMatch = !normalized || haystack.includes(normalized);
    return categoryMatch && tagsMatch && queryMatch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  $("#resultCount").textContent = `${filtered.length} produit${filtered.length > 1 ? "s" : ""}`;
  const grid = $("#productGrid");
  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div>⌕</div>
        <h2>Aucun résultat</h2>
        <p>Essayez une autre catégorie ou retirez un filtre.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(product => grid.appendChild(createProductCard(product)));
  bindProductActions(grid);
}

function bindProductActions(scope = document) {
  $$("[data-favorite]", scope).forEach(button => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.favorite);
    });
  });

  $$("[data-compare]", scope).forEach(button => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleCompare(button.dataset.compare);
    });
  });

  $$("[data-product]", scope).forEach(button => {
    button.addEventListener("click", () => showProduct(button.dataset.product));
  });
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
  if (state.view === "product") showProduct(id, false);
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
  if (state.view === "product") showProduct(id, false);
}

function updateCompareCount() {
  const count = $("#compareCount");
  count.textContent = state.compare.size;
  count.hidden = state.compare.size === 0;
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
    ["Prix indicatif", product => money(product.price)],
    ["Matière", product => product.material],
    ["Capacité", product => product.capacity],
    ["Nettoyage", product => product.cleaning],
    ["Usage conseillé", product => product.use],
    ["Indice de sélection", product => `${product.score}/100`]
  ];

  wrap.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Critère</th>
          ${selected.map(product => `
            <th>
              <div class="compare-product-head">
                <span>${product.emoji}</span>
                <strong>${product.name}</strong>
                <button class="compare-remove" data-remove-compare="${product.id}">Retirer</button>
              </div>
            </th>
          `).join("")}
        </tr>
      </thead>
      <tbody>
        ${rows.map(([label, value]) => `
          <tr>
            <th>${label}</th>
            ${selected.map(product => `<td>${value(product)}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  $$("[data-remove-compare]", wrap).forEach(button => {
    button.addEventListener("click", () => toggleCompare(button.dataset.removeCompare));
  });
}

function showProduct(id, navigateToProduct = true) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const favorite = state.favorites.has(id);
  const compared = state.compare.has(id);

  $("#productDetail").innerHTML = `
    <div class="detail-hero">
      <div class="detail-visual" style="--visual-1:${product.colors[0]};--visual-2:${product.colors[1]}">
        <span>${product.emoji}</span>
      </div>
      <div class="detail-copy">
        <span class="eyebrow">${categories.find(c => c.id === product.category)?.label}</span>
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <div class="detail-price">Prix indicatif : ${money(product.price)}</div>
        <div class="detail-actions">
          <button class="primary-button" data-detail-favorite="${product.id}">${favorite ? "♥ Dans les favoris" : "♡ Ajouter aux favoris"}</button>
          <button class="secondary-button" data-detail-compare="${product.id}">${compared ? "Retirer du comparateur" : "Comparer"}</button>
        </div>
      </div>
    </div>

    <div class="detail-panels">
      <section class="detail-panel">
        <h2>Caractéristiques</h2>
        <ul class="detail-list">
          <li><strong>Matière :</strong>&nbsp;${product.material}</li>
          <li><strong>Capacité :</strong>&nbsp;${product.capacity}</li>
          <li><strong>Entretien :</strong>&nbsp;${product.cleaning}</li>
          <li><strong>Usage :</strong>&nbsp;${product.use}</li>
        </ul>
      </section>

      <section class="detail-panel">
        <h2>Points forts</h2>
        <ul class="detail-list">
          ${product.strengths.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <h2>À vérifier avant achat</h2>
        <ul class="detail-list">
          ${product.limits.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <h2>Indice de sélection</h2>
        <p><strong>${product.score}/100</strong></p>
        <p style="color:var(--muted);line-height:1.5">Indice de démonstration basé sur l’utilité, la facilité d’entretien et la polyvalence. Il ne remplace pas un test réel.</p>
      </section>
    </div>

    <div class="demo-offer">
      Cette fiche est une démonstration. Aucun lien marchand ou affilié n’est actif dans cette version.
    </div>
  `;

  $("[data-detail-favorite]").addEventListener("click", () => toggleFavorite(id));
  $("[data-detail-compare]").addEventListener("click", () => toggleCompare(id));

  if (navigateToProduct) navigate("product");
}

function renderQuiz() {
  const content = $("#quizContent");
  const progress = $("#quizProgress");

  if (state.quizStep >= quizQuestions.length) {
    progress.style.width = "100%";
    const recommendations = getQuizRecommendations();

    content.innerHTML = `
      <div class="quiz-results">
        <span class="eyebrow">Résultat</span>
        <h2>Nos trois suggestions</h2>
        <p>Résultat de démonstration basé sur vos réponses.</p>
        <div class="product-grid" id="quizProductGrid"></div>
        <button class="secondary-button" id="restartQuiz">Recommencer</button>
      </div>
    `;

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
  progress.style.width = `${(state.quizStep / quizQuestions.length) * 100}%`;

  content.innerHTML = `
    <div class="quiz-step">
      <small>Question ${state.quizStep + 1} sur ${quizQuestions.length}</small>
      <h2>${question.title}</h2>
      <div class="quiz-options">
        ${question.options.map(([value, label]) => `<button class="quiz-option" data-quiz-value="${value}">${label}</button>`).join("")}
      </div>
    </div>
  `;

  $$("[data-quiz-value]", content).forEach(button => {
    button.addEventListener("click", () => {
      const raw = button.dataset.quizValue;
      const parsed = !Number.isNaN(Number(raw)) && raw !== "" ? Number(raw) : raw;
      state.quizAnswers[question.key] = parsed;
      state.quizStep += 1;
      renderQuiz();
    });
  });
}

function getQuizRecommendations() {
  const answers = state.quizAnswers;

  return products
    .map(product => {
      let points = product.score / 20;

      if (answers.category && product.category === answers.category) points += 8;
      if (answers.budget && product.price <= answers.budget) points += 5;
      if (answers.priority && product.tags.includes(answers.priority)) points += 4;
      if (answers.water && answers.water !== "none" && product.tags.includes(answers.water)) points += 3;
      if (answers.frequency) points += Math.min(answers.frequency, 8) / 2;

      if (answers.size === "small" && product.capacity.match(/1,5|4 litres|750 ml|Téléphone|câbles/i)) points += 2;
      if (answers.size === "large" && product.capacity.match(/10 litres|12 litres|32 litres|3 compartiments/i)) points += 2;

      return { product, points };
    })
    .sort((a, b) => b.points - a.points)
    .slice(0, 3)
    .map(item => item.product);
}

function bindNavigation() {
  $$("[data-view]").forEach(button => {
    button.addEventListener("click", () => navigate(button.dataset.view, { filter: button.dataset.filter }));
  });

  $("#searchInput").addEventListener("input", (event) => {
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
}

let deferredInstallPrompt = null;

const installBtn = $("#installBtn");
const installHelp = $("#installHelp");
const installHelpClose = $("#installHelpClose");
const installHelpOk = $("#installHelpOk");

function isStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
}

function openInstallHelp() {
  installHelp.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeInstallHelp() {
  installHelp.hidden = true;
  document.body.style.overflow = "";
}

function refreshInstallButton() {
  if (isStandaloneMode()) {
    installBtn.hidden = true;
    return;
  }

  // Le bouton apparaît toujours hors mode installé.
  // Si le prompt natif n'est pas disponible, un guide manuel s'affiche.
  installBtn.hidden = false;
}

window.addEventListener("beforeinstallprompt", (event) => {
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
    openInstallHelp();
    return;
  }

  try {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;

    if (choice.outcome === "accepted") {
      showToast("Installation lancée");
      installBtn.hidden = true;
    } else {
      showToast("Installation annulée");
    }
  } catch (error) {
    console.error("Échec du prompt d'installation :", error);
    openInstallHelp();
  } finally {
    deferredInstallPrompt = null;
  }
});

installHelpClose.addEventListener("click", closeInstallHelp);
installHelpOk.addEventListener("click", closeInstallHelp);
installHelp.addEventListener("click", (event) => {
  if (event.target === installHelp) closeInstallHelp();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !installHelp.hidden) closeInstallHelp();
});

window.addEventListener("load", () => {
  window.setTimeout(refreshInstallButton, 600);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
}

renderHome();
renderFilters();
renderProducts();
renderFavorites();
renderCompare();
renderQuiz();
updateCompareCount();
bindNavigation();
