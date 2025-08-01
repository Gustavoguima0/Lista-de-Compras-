import { criarItemDaLista, criarItemDaListaComDados } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

let contador = 0;

// Salvar lista no localStorage
function salvarLista() {
    const itens = listaDeCompras.querySelectorAll("li");
    const listaParaSalvar = [];

    itens.forEach(li => {
        const texto = li.querySelector("label").innerText;
        const data = li.querySelector(".texto-data").innerText;
        const checked = li.querySelector("input[type=checkbox]").checked;
        listaParaSalvar.push({ texto, data, checked });
    });

    localStorage.setItem("listaDeCompras", JSON.stringify(listaParaSalvar));
}

// Carregar lista do localStorage
function carregarLista() {
    const listaSalva = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
    listaSalva.forEach(item => {
        const li = criarItemDaListaComDados(item.texto, item.data, item.checked, contador++);
        listaDeCompras.appendChild(li);
    });
    verificarListaVazia(listaDeCompras);
}

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(contador++);
    if (itemDaLista) {
        listaDeCompras.appendChild(itemDaLista);
        salvarLista();
        verificarListaVazia(listaDeCompras);
    }
});

listaDeCompras.addEventListener("change", (evento) => {
    if (evento.target.type === "checkbox") {
        salvarLista();
    }
});

listaDeCompras.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("botao-remover")) {
        const li = evento.target.closest("li");
        if (li) {
            li.remove();
            salvarLista();
            verificarListaVazia(listaDeCompras);
        }
    }
});

carregarLista();