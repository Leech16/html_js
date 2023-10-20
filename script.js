const CampoA = document.getElementById('CampoA')
const Campob = document.getElementById('CampoB')
const button = document.getElementById('botao')
let correto = document.getElementById('correto')
let incorreto = document.getElementById('incorreto')

button. addEventListener ('click',calculo)
CampoA. addEventListener ('click',limpa)
Campob. addEventListener ('click',limpa)

function calculo () {
if    (CampoA.value > Campob.value){correto.style.display="block"}

else {
    incorreto.style.display="block"
}
}
function limpa () {
    incorreto.style.display="none"
    correto.style.display="none"
}