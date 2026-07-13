const categories = [
  {id:"maison",label:"Maison",description:"Rangement et organisation"},
  {id:"voiture",label:"Voiture",description:"Accessoires pratiques"},
  {id:"cuisine",label:"Cuisine",description:"Contenants et entretien"},
  {id:"voyage",label:"Voyage",description:"Transport et rangement"},
  {id:"exterieur",label:"Extérieur",description:"Camping, jardin, plage"},
  {id:"budget",label:"Petits costauds",description:"Utiles à petit prix"}
];

let products = [];

const state = {
  view:"home",
  previousView:"home",
  category:"all",
  tags:new Set(),
  query:"",
  favorites:new Set(JSON.parse(localStorage.getItem("lcc-favorites") || "[]")),
  compare:new Set(JSON.parse(localStorage.getItem("lcc-compare") || "[]")),
  quizStep:Number(localStorage.getItem("lcc-quiz-step") || 0),
  quizAnswers:JSON.parse(localStorage.getItem("lcc-quiz-answers") || "{}")
};

const quizQuestions = [
  {key:"category",title:"Où allez-vous surtout utiliser le produit ?",options:[["maison","À la maison"],["voiture","Dans la voiture"],["cuisine","Pour les repas et la cuisine"],["voyage","En voyage"],["exterieur","À l’extérieur"]]},
  {key:"budget",title:"Quel budget souhaitez-vous respecter ?",options:[[10,"Moins de 10 €"],[20,"Moins de 20 €"],[30,"Moins de 30 €"],[999,"Je privilégie surtout l’usage"]]},
  {key:"priority",title:"Votre priorité principale ?",options:[["empilable","Gagner de la place"],["lavable","Nettoyer facilement"],["rigide","Protéger le contenu"],["pliable","Ranger après utilisation"],["reutilisable","Réutiliser longtemps"]]},
  {key:"water",title:"Le produit doit-il résister à l’eau ?",options:[["etanche","Oui, c’est important"],["lavable","Il doit surtout être lavable"],["none","Ce n’est pas prioritaire"]]},
  {key:"frequency",title:"À quelle fréquence allez-vous l’utiliser ?",options:[[8,"Tous les jours"],[4,"Plusieurs fois par semaine"],[2,"Occasionnellement"]]},
  {key:"size",title:"Quel format recherchez-vous ?",options:[["small","Compact"],["medium","Standard"],["large","Grande capacité"],["any","Peu importe"]]}
];

const $=(s,scope=document)=>scope.querySelector(s);
const $$=(s,scope=document)=>[...scope.querySelectorAll(s)];

function money(v){return new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(v)}
function persist(){
  localStorage.setItem("lcc-favorites",JSON.stringify([...state.favorites]));
  localStorage.setItem("lcc-compare",JSON.stringify([...state.compare]));
  localStorage.setItem("lcc-quiz-step",String(state.quizStep));
  localStorage.setItem("lcc-quiz-answers",JSON.stringify(state.quizAnswers));
}
function track(name,id=""){
  const data=JSON.parse(localStorage.getItem("lcc-local-stats")||"{}");
  const key=id?`${name}:${id}`:name;
  data[key]=(data[key]||0)+1;
  localStorage.setItem("lcc-local-stats",JSON.stringify(data));
}
function showToast(message){
  const toast=$("#toast");toast.textContent=message;toast.classList.add("show");
  clearTimeout(showToast.timeout);showToast.timeout=setTimeout(()=>toast.classList.remove("show"),2200);
}
function iconSvg(id){
  const common='viewBox="0 0 24 24" aria-hidden="true"';
  const map={
    maison:`<svg ${common}><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V21h13V10.5"/><path d="M9.5 21v-6h5v6"/></svg>`,
    voiture:`<svg ${common}><path d="M4 15h16l-2-6H6l-2 6Z"/><path d="M6 15v3M18 15v3"/><circle cx="7" cy="16" r="1.5"/><circle cx="17" cy="16" r="1.5"/></svg>`,
    cuisine:`<svg ${common}><path d="M4 8h16"/><path d="M6 8v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8"/><path d="M9 4v4M15 4v4"/></svg>`,
    voyage:`<svg ${common}><rect x="6" y="5" width="12" height="16" rx="2"/><path d="M9 5V3h6v2M10 9v8M14 9v8"/></svg>`,
    exterieur:`<svg ${common}><path d="m4 20 8-16 8 16H4Z"/><path d="m12 4 2 16M12 4 8 20"/></svg>`,
    budget:`<svg ${common}><path d="M7 13c0-2 1-4 3-5l1 3h3l1-5c3 2 4 5 4 8 0 4-3 7-7 7S5 18 5 15c0-1 1-2 2-2Z"/><path d="M11 15h3"/></svg>`
  };
  return map[id]||map.maison;
}
function tagLabel(tag){
  const labels={moins10:"Moins de 10 €",moins20:"Moins de 20 €",moins30:"Moins de 30 €",lavable:"Facile à laver",empilable:"Empilable",pliable:"Pliable",rigide:"Semi-rigide",etanche:"Protégé de l’eau",reutilisable:"Réutilisable",voiture:"Voiture",voyage:"Voyage",repas:"Repas",transparent:"Transparent",maison:"Maison",bureau:"Bureau",exterieur:"Extérieur"};
  return labels[tag]||tag;
}
function navigate(view,options={}){
  if(state.view!=="product")state.previousView=state.view;
  state.view=view;
  $$(".view").forEach(s=>s.classList.toggle("active",s.id===`view-${view}`));
  $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  if(view==="explore"){
    if(options.category)state.category=options.category;
    if(options.filter==="budget"){state.category="all";state.tags=new Set(["moins20"])}
    renderFilters();renderProducts();
  }
  if(view==="favorites")renderFavorites();
  if(view==="compare")renderCompare();
  if(view==="quiz")renderQuiz();
  track("view",view);
  window.scrollTo({top:0,behavior:"smooth"});
}
function createProductCard(p){
  const fav=state.favorites.has(p.id),comp=state.compare.has(p.id);
  const a=document.createElement("article");a.className="product-card";
  a.innerHTML=`
    <div class="product-visual">
      <img src="${p.image}" alt="Illustration de démonstration : ${p.name}" loading="lazy">
      <span class="product-badge">${p.badge}</span>
      <button class="favorite-button ${fav?"active":""}" data-favorite="${p.id}" aria-label="${fav?"Retirer des favoris":"Ajouter aux favoris"}">${fav?"♥":"♡"}</button>
    </div>
    <div class="product-body">
      <div class="product-meta"><span>${categories.find(c=>c.id===p.category)?.label||"Produit"}</span><span>env. ${money(p.price)}</span></div>
      <h3>${p.name}</h3><p>${p.description}</p>
      <div class="product-tags">${p.tags.slice(0,3).map(t=>`<span>${tagLabel(t)}</span>`).join("")}</div>
      <div class="product-actions">
        <button class="view-product-button" data-product="${p.id}">Voir la fiche</button>
        <button class="compare-button ${comp?"active":""}" data-compare="${p.id}">${comp?"Ajouté":"Comparer"}</button>
      </div>
    </div>`;
  return a;
}
function bindProductActions(scope=document){
  $$("[data-favorite]",scope).forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();toggleFavorite(b.dataset.favorite)}));
  $$("[data-compare]",scope).forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();toggleCompare(b.dataset.compare)}));
  $$("[data-product]",scope).forEach(b=>b.addEventListener("click",()=>showProduct(b.dataset.product)));
}
function renderHome(){
  const c=$("#homeCategories");c.innerHTML="";
  categories.forEach(cat=>{
    const b=document.createElement("button");b.className="category-card";
    b.innerHTML=`<span class="category-icon">${iconSvg(cat.id)}</span><strong>${cat.label}</strong><small>${cat.description}</small>`;
    b.addEventListener("click",()=>navigate("explore",{category:cat.id==="budget"?"all":cat.id,filter:cat.id==="budget"?"budget":undefined}));
    c.appendChild(b);
  });
  const edits=[
    {title:"Les objets résistants à moins de 20 €",desc:"Une sélection pour commencer sans dépasser son budget.",filter:"budget"},
    {title:"Organiser sa voiture sans l’encombrer",desc:"Rangements pliables et petits accessoires utiles.",category:"voiture"},
    {title:"Gagner de la place au quotidien",desc:"Objets pliables, empilables ou faciles à ranger.",tag:"pliable"}
  ];
  const eg=$("#editorialGrid");eg.innerHTML="";
  edits.forEach((e,i)=>{
    const b=document.createElement("button");b.className="editorial-card";
    b.innerHTML=`<span>Guide ${String(i+1).padStart(2,"0")}</span><strong>${e.title}</strong><small>${e.desc}</small>`;
    b.addEventListener("click",()=>{
      if(e.tag){state.tags=new Set([e.tag]);state.category="all"}
      navigate("explore",{category:e.category,filter:e.filter});
    });eg.appendChild(b);
  });
  const f=$("#featuredProducts");f.innerHTML="";
  products.filter(p=>p.price<20).slice(0,5).forEach(p=>f.appendChild(createProductCard(p)));
  bindProductActions(f);
}
function renderFilters(){
  const cf=$("#categoryFilters");cf.innerHTML="";
  [{id:"all",label:"Tout"},...categories.filter(c=>c.id!=="budget")].forEach(cat=>{
    const b=document.createElement("button");b.className=`filter-chip ${state.category===cat.id?"active":""}`;b.textContent=cat.label;
    b.addEventListener("click",()=>{state.category=cat.id;renderFilters();renderProducts()});cf.appendChild(b);
  });
  const tags=[["moins20","Moins de 20 €"],["lavable","Facile à laver"],["empilable","Empilable"],["pliable","Pliable"],["rigide","Rigide"],["etanche","Protégé de l’eau"]];
  const tf=$("#tagFilters");tf.innerHTML="";
  tags.forEach(([id,label])=>{
    const b=document.createElement("button");b.className=`filter-chip ${state.tags.has(id)?"active":""}`;b.textContent=label;
    b.addEventListener("click",()=>{state.tags.has(id)?state.tags.delete(id):state.tags.add(id);renderFilters();renderProducts()});tf.appendChild(b);
  });
}
function getFilteredProducts(){
  const q=state.query.trim().toLowerCase();
  return products.filter(p=>{
    const cm=state.category==="all"||p.category===state.category;
    const tm=[...state.tags].every(t=>p.tags.includes(t));
    const hay=`${p.name} ${p.description} ${p.material} ${p.use} ${p.tags.join(" ")}`.toLowerCase();
    return cm&&tm&&(!q||hay.includes(q));
  });
}
function renderProducts(){
  const list=getFilteredProducts();$("#resultCount").textContent=`${list.length} produit${list.length>1?"s":""}`;
  const g=$("#productGrid");g.innerHTML="";
  if(!list.length){g.innerHTML=`<div class="empty-state"><div>⌕</div><h2>Aucun résultat</h2><p>Essayez une autre catégorie ou retirez un filtre.</p></div>`;return}
  list.forEach(p=>g.appendChild(createProductCard(p)));bindProductActions(g);
}
function toggleFavorite(id){
  if(state.favorites.has(id)){state.favorites.delete(id);showToast("Retiré des favoris")}else{state.favorites.add(id);showToast("Ajouté aux favoris")}
  persist();renderHome();if(state.view==="explore")renderProducts();if(state.view==="favorites")renderFavorites();if(state.view==="product")showProduct(id,false);track("favorite",id);
}
function toggleCompare(id){
  if(state.compare.has(id)){state.compare.delete(id);showToast("Retiré du comparateur")}
  else{if(state.compare.size>=3){showToast("Maximum : 3 produits");return}state.compare.add(id);showToast("Ajouté au comparateur")}
  persist();updateCompareCount();renderHome();if(state.view==="explore")renderProducts();if(state.view==="compare")renderCompare();if(state.view==="product")showProduct(id,false);track("compare",id);
}
function updateCompareCount(){const c=$("#compareCount");c.textContent=state.compare.size;c.hidden=state.compare.size===0}
function renderFavorites(){
  const list=products.filter(p=>state.favorites.has(p.id));$("#favoritesEmpty").style.display=list.length?"none":"grid";
  const g=$("#favoritesGrid");g.innerHTML="";list.forEach(p=>g.appendChild(createProductCard(p)));bindProductActions(g);
}
function renderCompare(){
  const list=products.filter(p=>state.compare.has(p.id));
  $("#compareEmpty").style.display=list.length?"none":"grid";
  const w=$("#compareWrap");

  if(!list.length){
    w.innerHTML="";
    return;
  }

  const rows=[
    ["Prix indicatif",p=>money(p.price)],
    ["Matière",p=>p.material],
    ["Dimensions",p=>p.dimensions],
    ["Capacité",p=>p.capacity],
    ["Nettoyage",p=>p.cleaning],
    ["Usage conseillé",p=>p.use],
    ["Indice de sélection",p=>`${p.score}/100`]
  ];

  const mobileCards=`
    <div class="compare-mobile-list">
      ${list.map(p=>`
        <article class="compare-mobile-card">
          <div class="compare-mobile-head">
            <img src="${p.image}" alt="Illustration : ${p.name}">
            <div>
              <span>${categories.find(c=>c.id===p.category)?.label||"Produit"}</span>
              <h2>${p.name}</h2>
              <button class="compare-remove" data-remove-compare="${p.id}">Retirer</button>
            </div>
          </div>
          <dl class="compare-mobile-values">
            ${rows.map(([label,value])=>`
              <div>
                <dt>${label}</dt>
                <dd>${value(p)}</dd>
              </div>
            `).join("")}
          </dl>
          <button class="view-compare-product" data-product="${p.id}">Voir la fiche complète</button>
        </article>
      `).join("")}
    </div>`;

  const desktopTable=`
    <div class="compare-desktop-table">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Critère</th>
            ${list.map(p=>`
              <th>
                <div class="compare-product-head">
                  <img src="${p.image}" alt="">
                  <strong>${p.name}</strong>
                  <button class="compare-remove" data-remove-compare="${p.id}">Retirer</button>
                </div>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows.map(([label,value])=>`
            <tr>
              <th>${label}</th>
              ${list.map(p=>`<td>${value(p)}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>`;

  w.innerHTML=mobileCards+desktopTable;

  $$("[data-remove-compare]",w).forEach(b=>{
    b.addEventListener("click",()=>toggleCompare(b.dataset.removeCompare));
  });

  $$("[data-product]",w).forEach(b=>{
    b.addEventListener("click",()=>showProduct(b.dataset.product));
  });
}
function showProduct(id,go=true){
  const p=products.find(x=>x.id===id);if(!p)return;
  const fav=state.favorites.has(id),comp=state.compare.has(id);
  $("#productDetail").innerHTML=`
    <div class="detail-hero">
      <div class="detail-visual"><img src="${p.image}" alt="Illustration de démonstration : ${p.name}"></div>
      <div class="detail-copy">
        <span class="eyebrow">${categories.find(c=>c.id===p.category)?.label}</span>
        <h1>${p.name}</h1><p>${p.description}</p>
        <div class="detail-price">Prix indicatif : ${money(p.price)}</div>
        <div class="detail-actions">
          <button class="primary-button" data-detail-favorite="${p.id}">${fav?"♥ Dans les favoris":"♡ Ajouter aux favoris"}</button>
          <button class="secondary-button" data-detail-compare="${p.id}">${comp?"Retirer du comparateur":"Comparer"}</button>
        </div>
      </div>
    </div>
    <div class="detail-panels">
      <section class="detail-panel"><h2>Pourquoi ce choix ?</h2><p>${p.why}</p></section>
      <section class="detail-panel"><h2>Caractéristiques</h2><ul class="detail-list"><li><strong>Matière :</strong>&nbsp;${p.material}</li><li><strong>Dimensions :</strong>&nbsp;${p.dimensions}</li><li><strong>Capacité :</strong>&nbsp;${p.capacity}</li><li><strong>Entretien :</strong>&nbsp;${p.cleaning}</li></ul></section>
      <section class="detail-panel"><h2>Points forts</h2><ul class="detail-list">${p.strengths.map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="detail-panel"><h2>À vérifier avant achat</h2><ul class="detail-list">${p.limits.map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="detail-panel"><h2>À qui convient-il ?</h2><ul class="detail-list">${p.whoFor.map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="detail-panel"><h2>Moins adapté pour</h2><ul class="detail-list">${p.notFor.map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="detail-panel"><h2>Indice de sélection</h2><p><strong>${p.score}/100</strong></p><p>Indice de démonstration basé sur l’utilité, l’entretien et la polyvalence. Il ne remplace pas un test réel.</p></section>
    </div>
    <section class="offer-panel"><h2>Offre bientôt disponible</h2><p>La version actuelle ne contient aucun lien marchand ou affilié.</p><button class="offer-button" disabled>Voir l’offre</button><div class="offer-meta">Dernière vérification de la fiche : ${p.lastVerified}</div></section>`;
  $("[data-detail-favorite]").addEventListener("click",()=>toggleFavorite(id));
  $("[data-detail-compare]").addEventListener("click",()=>toggleCompare(id));
  track("product",id);if(go)navigate("product");
}
function saveQuiz(){persist()}
function resetQuiz(){
  state.quizStep=0;state.quizAnswers={};saveQuiz();renderQuiz();showToast("Questionnaire réinitialisé");
}
function renderQuiz(){
  const content=$("#quizContent"),progress=$("#quizProgress");
  if(state.quizStep>=quizQuestions.length){
    progress.style.width="100%";const recs=getQuizRecommendations();
    content.innerHTML=`<div class="quiz-results"><span class="eyebrow">Résultat</span><h2>Nos trois suggestions</h2><p>Résultat de démonstration basé sur vos réponses.</p><div class="product-grid" id="quizProductGrid"></div><div class="quiz-footer"><button class="quiz-back" id="quizResultBack">← Modifier</button><button class="quiz-reset" id="restartQuiz">Recommencer</button></div></div>`;
    const g=$("#quizProductGrid");recs.forEach(p=>g.appendChild(createProductCard(p)));bindProductActions(g);
    $("#restartQuiz").addEventListener("click",resetQuiz);
    $("#quizResultBack").addEventListener("click",()=>{state.quizStep=quizQuestions.length-1;saveQuiz();renderQuiz()});
    track("quiz_complete");return;
  }
  const q=quizQuestions[state.quizStep];progress.style.width=`${(state.quizStep/quizQuestions.length)*100}%`;
  content.innerHTML=`<div class="quiz-step"><small>Question ${state.quizStep+1} sur ${quizQuestions.length}</small><h2>${q.title}</h2><div class="quiz-options">${q.options.map(([v,l])=>`<button class="quiz-option" data-quiz-value="${v}">${l}</button>`).join("")}</div><div class="quiz-footer">${state.quizStep>0?'<button class="quiz-back" id="quizBack">← Question précédente</button>':'<span></span>'}<button class="quiz-reset" id="quizReset">Recommencer</button></div></div>`;
  $$("[data-quiz-value]",content).forEach(b=>b.addEventListener("click",()=>{const raw=b.dataset.quizValue;const val=!Number.isNaN(Number(raw))&&raw!==""?Number(raw):raw;state.quizAnswers[q.key]=val;state.quizStep++;saveQuiz();renderQuiz()}));
  $("#quizReset").addEventListener("click",resetQuiz);
  if($("#quizBack"))$("#quizBack").addEventListener("click",()=>{state.quizStep=Math.max(0,state.quizStep-1);saveQuiz();renderQuiz()});
}
function getQuizRecommendations(){
  const a=state.quizAnswers;
  return products.map(p=>{
    let pts=p.score/20;if(a.category&&p.category===a.category)pts+=8;if(a.budget&&p.price<=a.budget)pts+=5;
    if(a.priority&&p.tags.includes(a.priority))pts+=4;if(a.water&&a.water!=="none"&&p.tags.includes(a.water))pts+=3;if(a.frequency)pts+=Math.min(a.frequency,8)/2;
    if(a.size==="small"&&p.capacity.match(/1,5|4 litres|750 ml|Téléphone|câbles/i))pts+=2;
    if(a.size==="large"&&p.capacity.match(/10 litres|12 litres|32 litres|3 compartiments/i))pts+=2;
    return {p,pts};
  }).sort((x,y)=>y.pts-x.pts).slice(0,3).map(x=>x.p);
}
function bindNavigation(){
  $$("[data-view]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.view,{filter:b.dataset.filter})));
  $("#searchInput").addEventListener("input",e=>{state.query=e.target.value;renderProducts()});
  $("#resetFilters").addEventListener("click",()=>{state.category="all";state.tags.clear();state.query="";$("#searchInput").value="";renderFilters();renderProducts()});
  $("#productBack").addEventListener("click",()=>navigate(state.previousView||"explore"));
}
let deferredInstallPrompt=null;
const installBtn=$("#installBtn"),installHelp=$("#installHelp");
function isStandalone(){return matchMedia("(display-mode: standalone)").matches||navigator.standalone===true}
function openHelp(){installHelp.hidden=false;document.body.style.overflow="hidden"}
function closeHelp(){installHelp.hidden=true;document.body.style.overflow=""}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;installBtn.hidden=false});
window.addEventListener("appinstalled",()=>{deferredInstallPrompt=null;installBtn.hidden=true;showToast("Application installée")});
installBtn.addEventListener("click",async()=>{
  if(isStandalone()){showToast("L’application est déjà installée");return}
  if(!deferredInstallPrompt){openHelp();return}
  try{deferredInstallPrompt.prompt();const choice=await deferredInstallPrompt.userChoice;if(choice.outcome==="accepted"){showToast("Installation lancée");installBtn.hidden=true}else showToast("Installation annulée")}
  catch(e){console.error(e);openHelp()}finally{deferredInstallPrompt=null}
});
$("#installHelpClose").addEventListener("click",closeHelp);$("#installHelpOk").addEventListener("click",closeHelp);
installHelp.addEventListener("click",e=>{if(e.target===installHelp)closeHelp()});
window.addEventListener("keydown",e=>{if(e.key==="Escape"&&!installHelp.hidden)closeHelp()});
async function init(){
  try{
    const response=await fetch("products-v21.json",{cache:"no-store"});
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    products=await response.json();
  }catch(error){
    console.error("Impossible de charger products.json",error);
    document.body.innerHTML=`<main style="padding:30px;font-family:sans-serif"><h1>Chargement impossible</h1><p>Vérifiez que le fichier products.json est bien présent à la racine.</p></main>`;
    return;
  }
  renderHome();renderFilters();renderProducts();renderFavorites();renderCompare();renderQuiz();updateCompareCount();bindNavigation();
}
if("serviceWorker"in navigator){
  window.addEventListener("load",async()=>{
    try{
      const registration=await navigator.serviceWorker.register("sw-v21.js");
      await registration.update();

      navigator.serviceWorker.addEventListener("controllerchange",()=>{
        if(sessionStorage.getItem("lcc-v21-reloaded")==="1")return;
        sessionStorage.setItem("lcc-v21-reloaded","1");
        window.location.reload();
      });
    }catch(error){
      console.error("Service worker V2.1 :",error);
    }
  });
}
init();
