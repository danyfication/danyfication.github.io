// Local do conteúdo dos reviews
const gridreview = document.getElementById("tudo")

// Info das reviews
const titulos = [
    "The Binding Of Isaac", 
    "Hollow Knight: Silksong", 
]
const caminhoimgs = [
    "tboi.png", 
    "silksong.png", 
]
const links = [
    "tboi", 
    "silksong", 
]
const descricoes = [
    "9/10 - Roguelike MUITO desafiador.",
    "10/10 - não sei se é um metroidvania ou souls-like, mas é MUITO BOM!", 
]

// Gerar os blocos das reviews
for (let index = 0; index < titulos.length; index++) {
    const titulo = titulos[index];
    const img = caminhoimgs[index];
    const link = links[index];
    const desc = descricoes[index];

    gridreview.innerHTML+=`
        <button id="blocoR" onclick="jogopage('${link}')">
            <h3 id="tit">${titulo}</h3>
            <img src="./imgs/${img}" id="img">
            <p id="textin">${desc}</p>
        </button>
    `
}

// Redirecionar para a página do review
function jogopage(link){
    window.location.href = "./reviews/"+link+".html";

}