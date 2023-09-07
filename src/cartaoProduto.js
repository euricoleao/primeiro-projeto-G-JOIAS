
import { catalogo } from "./ultilidades";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="  border-sky-500  w-48 m-2 flex flex-col pb-2 justify-betweeen shadow-xl shadow-scale-500 rounded-lg group  "id="cards-produto-${produtoCatalogo.id}">
    <img src="./assets/iimg/${produtoCatalogo.Imagem}" 
    alt="produto-1 da Gjoia" class='group-hover:scale-110 duration-300 my-3 rounded-lg'
    />
    <p class="text-sm">${produtoCatalogo.marca}</p>
    <p class="text-sm">${produtoCatalogo.nome} </p>
    <p class="text-sm">$ ${produtoCatalogo.preço}</p>
    <button id="adicionar-${produtoCatalogo.id} " class="bg-slate-950 hover:bg-slate-700 text-slate-200">
    <i class="fa-solid fa-cart-plus"></i></button>
    </div>`;
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }
}





