import { conectaApi } from "./conecta-api.js";
import constroiCard from "./mostra-videos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDeBusca = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscarVideo(dadosDeBusca);
    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class"mensagem__titulo">Não existem videos com o termpo ${dadosDeBusca}!`;
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisar]")

botaoPesquisa.addEventListener("click", evento => buscarVideo(evento))