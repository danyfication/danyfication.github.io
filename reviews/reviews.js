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
        subtitle: "Metroidvania / Souls-like incrível!",
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

    astroneer: {
        title: "Astroneer",
        subtitle: "Quando se começa a jogar, é difícil parar, muito satisfatório",
        score: "9/10",
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

    awaria: {
        title: "Awaria",
        subtitle: "Um jogo de fases curto, porém com alta dificuldade e PUDIM",
        score: "7.5/10",
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

    bopl: {
        title: "Bopl Battle",
        subtitle: "Muito divertido com amigos e alta competitividade e combinações",
        score: "8.5/10",
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

    btd6: {
        title: "bloons TD 6",
        subtitle: "O melhor do gênero tower-defense",
        score: "9/10",
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

    ddlc: {
        title: "Doki Doki Literature Club",
        subtitle: "Web-novel, jogo de escolhas com reviravoltas",
        score: "8/10",
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

    mr: {
        title: "Marvel Rivals",
        subtitle: "Hero-shooter com seus personagens favoritos da Marvel",
        score: "9/10",
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

    postal: {
        title: "Postal 1",
        subtitle: "Shooter visto de cima, bem difícil",
        score: "7/10",
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

    spg: {
        title: "Slinkie Dinkie",
        subtitle: "Jogo de bicho virtual, relaxante",
        score: "8.5/10",
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

    warframe: {
        title: "Warframe",
        subtitle: "RPG e farm, bem satisfatório",
        score: "8/10",
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
