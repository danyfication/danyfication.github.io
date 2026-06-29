// Containers onde a review vai ser montada
const gameContainer = document.getElementById("game")
const descContainer = document.getElementById("desc")

// Dados de cada review usada na página detalhada
const reviewConteudo = {
    tboi: {
        gameHtml: `
            <div id="tboiTitDiv" class="titles"><h1 id="tboiTit">The Binding Of Isaac</h1></div>
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
        gameHtml: `
            <div id="silksongTitDiv" class="titles"><h1 id="silksongTit">Hollow Knight: Silksong</h1></div>
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
        gameHtml: `
            <div id="astroneerTitDiv" class="titles"><h1 id="astroneerTit">Astroneer</h1></div>
            <img id="Img" src="../imgs/astroneer.png" alt="Astroneer" />
            <h2 id="Nota"><strong>Nota:</strong> 9/10</h2>
            <h3 id="Desc1">Jogo de sobrevivência em um ambiente espacial com elementos de construção e exploração.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 

    awaria: {
        gameHtml: `
            <div id="awariaTitDiv" class="titles"><h1 id="awariaTit">Awaria</h1></div>
            <img id="Img" src="../imgs/awaria.png" alt="Awaria" />
            <h2 id="Nota"><strong>Nota:</strong> 7.5/10</h2>
            <h3 id="Desc1">Jogo de fases curto com alta dificuldade e mecânica de PUDIM.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 

    bopl: {
        gameHtml: `
            <div id="boplTitDiv" class="titles"><h1 id="boplTit">Bopl Battle</h1></div>
            <img id="Img" src="../imgs/bopl.png" alt="Bopl Battle" />
            <h2 id="Nota"><strong>Nota:</strong> 8.5/10</h2>
            <h3 id="Desc1">Jogo de disputa entre amigos com alta competitividade e combinações.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 

    btd6: {
        gameHtml: `
            <div id="btd6TitDiv" class="titles"><h1 id="btd6Tit">Bloon TD 6</h1></div>
            <img id="Img" src="../imgs/btd6.png" alt="Bloon TD 6" />
            <h2 id="Nota"><strong>Nota:</strong> 9/10</h2>
            <h3 id="Desc1">Tower-defense incrível!</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 

    ddlc: {
        gameHtml: `
            <div id="ddlcTitDiv" class="titles"><h1 id="ddlcTit">Doki Doki Literature Club</h1></div>
            <img id="Img" src="../imgs/ddlc.png" alt="Doki Doki Literature Club" />
            <h2 id="Nota"><strong>Nota:</strong> 8/10</h2>
            <h3 id="Desc1">Web-novel, jogo de escolhas com reviravoltas.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 

    mr: {
        gameHtml: `
            <div id="mrTitDiv" class="titles"><h1 id="mrTit">Marvel Rivals</h1></div>
            <img id="Img" src="../imgs/mr.png" alt="Marvel Rivals" />
            <h2 id="Nota"><strong>Nota:</strong> 9/10</h2>
            <h3 id="Desc1">Hero-shooter com seus personagens favoritos da Marvel.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 

    postal: {
        gameHtml: `
            <div id="postalTitDiv" class="titles"><h1 id="postalTit">Postal 1</h1></div>
            <img id="Img" src="../imgs/postal.png" alt="Postal 1" />
            <h2 id="Nota"><strong>Nota:</strong> 7/10</h2>
            <h3 id="Desc1">Shooter visto de cima, bem difícil.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 

    spg: {
        gameHtml: `
            <div id="spgTitDiv" class="titles"><h1 id="spgTit">Slinkie Dinkie</h1></div>
            <img id="Img" src="../imgs/spg.png" alt="Slinkie Dinkie" />
            <h2 id="Nota"><strong>Nota:</strong> 8.5/10</h2>
            <h3 id="Desc1">Jogo de bicho virtual, relaxante.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 

    warframe: {
        gameHtml: `
            <div id="warframeTitDiv" class="titles"><h1 id="warframeTit">Warframe</h1></div>
            <img id="Img" src="../imgs/warframe.png" alt="Warframe" />
            <h2 id="Nota"><strong>Nota:</strong> 8/10</h2>
            <h3 id="Desc1">RPG e farm, bem satisfatório.</h3>
        `,
        descHtml: `
            <h1 id="Sobre">Sobre o jogo</h1>
            <p id="Desc2">conteúdo</p>
        `,
    }, 


}

// Cor manual para casos onde o automático não funciona tão bem
const corTextoManual = {
    awaria: '#111111',
    silksong: '#111111',
}

function montarGameHtml(review) {
    return review.gameHtml.replace(
        /(<h2 id="Nota">[\s\S]*?<\/h2>\s*)(<h3 id="Desc1">[\s\S]*?<\/h3>)/,
        '<div class="infoBloco">$1$2</div>'
    )
}

// Calcula a luminosidade do fundo para decidir se o texto fica preto ou branco
function getContrastTextColor(element) {
    const computedColor = getComputedStyle(element).backgroundColor
    const rgb = computedColor.match(/\d+/g)

    if (!rgb || rgb.length < 3) return '#ffffff'

    const [r, g, b] = rgb.map(Number)
    const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b)

    return luminance > 160 ? '#111111' : '#ffffff'
}

// Aplica a cor certa nos títulos da review atual
function ajustarCorTitulos() {
    const pageKey = getPageKey()

    gameContainer.querySelectorAll('.titles').forEach((titleBox) => {
        const textColor = corTextoManual[pageKey] || getContrastTextColor(titleBox)
        titleBox.style.color = textColor

        titleBox.querySelectorAll('h1, h2, h3').forEach((titleText) => {
            titleText.style.color = textColor
        })
    })

}

//pegar url pra saber qual review mostrar :)
// Pega o nome da review pela hash da URL
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
        gameContainer.innerHTML += `<h1>Página não encontrada</h1><p>Review inválida.</p>`
        descContainer.innerHTML += "Tente acessar uma review válida lá né"
        return
    }

    //colocar as paradas
    gameContainer.innerHTML += montarGameHtml(review)
    descContainer.innerHTML += review.descHtml

    ajustarCorTitulos()
}

qualReview()
