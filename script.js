// Gera o card principal da home para levar até as reviews
const ferramentas = document.getElementById("ferramentas");

if (ferramentas) {
    ferramentas.innerHTML = `
        <button class="Card" onclick="window.location.href='homeReviews.html'">
            <h2 class="tit">Review principal</h2>
            <p class="textin">Explore as avaliações e descubra os jogos mais maneiros do site.</p>
            <p class="RedirectTxt">Clique para ver mais</p>
        </button>

        <button class="Card" onclick="window.location.href='ainda n tem.html'">
            <h2 class="tit">coisax</h2>
            <p class="textin">Uma desc.</p>
            <p class="RedirectTxt">Clique para ver mais</p>
        </button>

        <button class="Card" onclick="window.location.href='ainda n tem.html'">
            <h2 class="tit">mais coisax</h2>
            <p class="textin">Outra desc.</p>
            <p class="RedirectTxt">Clique para ver mais</p>
        </button>
    `;
}
