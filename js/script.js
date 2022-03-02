// Ativar o menu, indicando qual página está ativada.

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

/* ---- FIM DE ATIVAR LINKS DO MENU ---- */

// Ativar Itens do Orçamento.
const parametros = new URLSearchParams(location.search);

function ativarProduto(paramentro) {
  const elemento = document.getElementById(paramentro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

/* ---- FIM DE ATIVAR ITENS DO ORÇAMENTO ---- */

/* Perguntas Frequentes */

const perguntas = document.querySelectorAll(".perguntas button");

function mostrar(id) {
  if (document.getElementById(id).style.display !== "none") {
    document.getElementById(id).style.display = "none";
    return;
  }
  Array.from(document.getElementsByClassName("hidden")).forEach(
    (dd) => (dd.style.display = "none")
  );
  document.getElementById(id).style.display = "block";
}

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

/* ---- FIM DE PERGUNTAS FREQUENTES ---- */

/* Galeria de Bicicletas */

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

/* ---- FIM DE GALERIA DE BICICLETAS ---- */

/* Plugin - Animação */

if (window.SimpleAnime) {
  new SimpleAnime();
}
