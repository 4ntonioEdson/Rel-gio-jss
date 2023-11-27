//Constante que vai pegar as horas, minutos e segundos
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
// Const que vai pegar a hora, minuto e o segundo em tempo real
// A variavel let é declarado e é atribuido o valor de dateToday
// Depois, através da propriedade text-content o valor do texto descrito na tag span é alterado em tempo real para o valor que get pegar. 
const relogio = setInterval(function time(){
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let seg = datetoday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

})

//Chave API retirada do site https://openweathermap.org "Current weather data"
const key = "e4239987ce9869f3e5feed88066a6b07"

function dadosnatela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em:  " + dados.name 
    document.querySelector(".temperatura").innerHTML = "Temperatura atual:  " + Math.floor(dados.main.temp)+ "° C"
    document.querySelector(".umidade").innerHTML = "Umidade:  " + dados.main.humidity + "%"

}

async function buscarcidade(input){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`) .then(resposta => resposta.json ())
    
    dadosnatela(dados)
}

  function cliqueNobotao() {
    const input = document.querySelector(".buscar").value

    buscarcidade(input)

  }