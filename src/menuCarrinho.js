function abrirCarrinho() {
    document.getElementById("Carrinho").classList.add("right-[0px]");
    document.getElementById("Carrinho").classList.remove("right-[-360px]");
}
function fecharCarrinho() {
    document.getElementById("Carrinho").classList.remove("right-[0px]");
    document.getElementById("Carrinho").classList.add("right-[-360px]");
}
export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho"); 
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click",fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click",abrirCarrinho);
}

 export function adicionarAoCarrinho() {
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">

    <button id="fechar-carrinho" class=" absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>

    <img src="./assets/iimg/produto-1.jpeg" 
         alt="colar de pedras" class="h-24 rounded-lg">
   <div class="py-2 m-2">
    <p class="text-slate-900 text-sm">colar de pedra cristal</p>
    <p class="text-slate-900 text-xs">com ponto de de pedra vermelha</p>
    <p class="text-green-400">tamanho unico</p>
    <p class="text-green-700">$ 89,90</p>
  </div>
  </article>`
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}