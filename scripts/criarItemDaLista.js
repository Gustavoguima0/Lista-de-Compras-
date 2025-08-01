import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");

export function criarItemDaLista(contador) {
    if (inputItem.value.trim() === "") {
        alert("Por favor, insira um item!");
        return null;
    }

    const dataAtual = gerarDiaDaSemana();
    const itemDaLista = criarItemDaListaComDados(inputItem.value, dataAtual, false, contador);

    inputItem.value = "";

    return itemDaLista;
}

export function criarItemDaListaComDados(texto, dataCompleta, checked, contador) {
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador;
    inputCheckbox.checked = checked;

    const nomeItem = document.createElement("label");
    nomeItem.setAttribute("for", inputCheckbox.id);
    nomeItem.innerText = texto;

    if (checked) {
        nomeItem.style.textDecoration = "line-through";
    }

    inputCheckbox.addEventListener("change", () => {
        nomeItem.style.textDecoration = inputCheckbox.checked ? "line-through" : "none";
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    // Botão remover
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "❌";
    botaoRemover.classList.add("botao-remover");
    containerItemDaLista.appendChild(botaoRemover);

    itemDaLista.appendChild(containerItemDaLista);

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}
