function renderMusicReviews(container) {
    const titulos = [
        "1",
        "2",
        "3",
        "4", 
    ]

    const caminhoimgs = [
        "1",
        "2",
        "3",
        "4", 
    ]

    const links = [
        "1",
        "2",
        "3",
        "4", 
    ]

    const descricoes = [
        "/10 - ",
        "/10 - ",
        "/10 - ",
        "/10 - ", 
    ]

    container.innerHTML = ""

    for (let index = 0; index < titulos.length; index++) {
        const titulo = titulos[index]
        const img = caminhoimgs[index]
        const link = links[index]
        const desc = descricoes[index]

        container.innerHTML += `
            <button class="blocoR" onclick="jogopage('${link}')">
                <h3 class="tit">${titulo}</h3>
                <img src="./imgs/${img}" class="img">
                <p class="textin">${desc}</p>
            </button>
        `
    }
}

window.renderMusicReviews = renderMusicReviews

function jogopage(link) {
    window.location.href = "./reviews/reviews.html#" + link
}
