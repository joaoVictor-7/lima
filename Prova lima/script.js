
const key = "5627c578b85e4022fcddd89adefdd8db"

function colocarDadosNaTela(dados){

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "Cº"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){

    const dados = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}`).then (resposta => resposta.json ())

    colocarDadosNaTela(dados)

    

}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}