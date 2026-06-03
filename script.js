// Local do conteúdo dos reviews
const gridreview = document.getElementById("tudo")

// Info das reviews
const titulos = [
    "The Binding Of Isaac", 
    "Hollow Knight: Silksong", 
    "Astroneer", 
    "Awaria", 
    "Bopl Battle", 
    "Bloon TD 6", 
    "Doki Doki Literature club", 
    "Marvel Rivals", 
    "Postal 1", 
    "Slinkie Dinkie", 
    "Warframe", 
]
const caminhoimgs = [
    "tboi.png", 
    "silksong.png", 
    "astroneer.png", 
    "awaria.png", 
    "bopl.png", 
    "btd6.png", 
    "ddlc.png", 
    "mr.png", 
    "postal.png", 
    "spg.png", 
    "warframe.png", 
]
const links = [
    "tboi", 
    "silksong", 
    "astroneer", 
    "awaria", 
    "bopl", 
    "btd6", 
    "ddlc", 
    "mr", 
    "postal", 
    "spg", 
    "warframe", 
]
const descricoes = [
    "9/10 - Roguelike MUITO desafiador.",
    "10/10 - Não sei se é um metroidvania ou souls-like, mas é MUITO BOM!", 
    "9/10 - Bem relaxante e ótimo tanto single quanto multiplayer.", 
    "7.5/10 - 2D bem difícil de fases, bem curto porém legal.", 
    "8.5/10 -Jogo 2D de disputa entre amigos, muito divertido e variado.", 
    "9/10 - Tower-defense incrível!", 
    "8/10 - Uma web-novel de escolhas com várias reviravoltas e horror psicológico.", 
    "9/10 - Um ótimo hero-shooter principalmente para fãs da Marvel.", 
    "7/10 - Bem difícil porém simples, estilo antigo.", 
    "8.5/10 - Um jogo para deixar ao lado enquanto se faz outras coisas.", 
    "8/10 - Um jogo com muito conteúdo e coisas pra fazer.", 
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
    window.location.href = "./reviews/reviews.html#"+link;

}