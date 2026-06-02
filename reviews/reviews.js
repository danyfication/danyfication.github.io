//pega os containers
const gameContainer = document.getElementById("game")
const descContainer = document.getElementById("desc")


// conteúdo q vai ir na page
const reviewConteudo = {
    tboi: {
        title: "The Binding Of Isaac",
        subtitle: "Roguelike MUITO desafiador",
        score: "9/10",
        image: "../imgs/tboi.png",
        gameHtml: `
            <div id="tboiTitDiv"><h1 id="tboiTit">The Binding Of Isaac</h1></div>
            <img id="Img" src="../imgs/tboi.png" alt="The Binding Of Isaac" />
            <h2 id="Nota"><strong>Nota:</strong> 9/10</h2>
            <h3 id="Desc1">Roguelike com ação rápida, itens caóticos e uma curva de dificuldade pesada.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    },

    silksong: {
        title: "Hollow Knight: Silksong",
        subtitle: "Metroidvania / Souls-like incrível",
        score: "10/10",
        image: "../imgs/silksong.png",
        gameHtml: `
            <div id="silksongTitDiv"><h1 id="silksongTit">Hollow Knight: Silksong</h1></div>
            <img id="Img" src="../imgs/silksong.png" alt="Hollow Knight: Silksong" />
            <h2 id="Nota"><strong>Nota:</strong> 10/10</h2>
            <h3 id="Desc1">Metroidvania com foco em exploração, combate preciso e uma atmosfera única.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    },


}

//pegar url pra saber qual review mostrar :)
function getPageKey() {
    const page = window.location.hash
    return page ? page.replace("#", "") : ""
}

//define qual review é pra mostrar
function qualReview() {
    const pageKey = getPageKey()
    const review = reviewConteudo[pageKey]

    //caso dê erro...
    if (!review) {
        gameContainer.innerHTML = `<h1>Página não encontrada</h1><p>Review inválida.</p>`
        descContainer.innerHTML = "Tente acessar uma review válida lá né"
        return
    }

    //colocar as paradas
    gameContainer.innerHTML = review.gameHtml
    descContainer.innerHTML = review.descHtml
}

qualReview()
