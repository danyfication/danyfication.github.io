const gridreview = document.getElementById("tudo")

const titulos = [
    "The Binding Of Isaac", 
    "Hollow Knight: Silksong", 
]
const caminhoimgs = [
    "tboi.webp", 
    "silksong.jpeg", 
]
const links = [
    "tboi", 
    "silksong", 
]
const descricoes = [
    "a",
    "b", 
]

for (let index = 0; index < titulos.length; index++) {
    const titulo = titulos[index];
    const img = caminhoimgs[index];
    const link = links[index];
    const desc = descricoes[index];

    gridreview.innerHTML+=`
        <button id="bloco" onclick="jogopag('${link}')">
            <h3 id="tit">${titulo}</h3>
            <img src="./imgs/${img}" id="img">
            <p id="textin">${desc}</p>
        </button>
    `
}

function jogopag(link){
    window.location.href = "./reviews/"+link+".html";

}