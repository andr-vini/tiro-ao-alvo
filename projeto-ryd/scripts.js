let historico = Array();
function iniciar() {
    let alvo = document.getElementById('alvo');
    let cenario = document.getElementById('cenario');
    document.getElementById('acertos').innerText = 0;
    document.getElementById('total').innerText = 0;
    document.getElementById('relogio').innerText = 'Relógio: 00:10';
    alvo.style.left = Math.floor(Math.random() * 640) - 320 + 'px';
    alvo.style.top = Math.floor(Math.random() * 320) - 160 + 'px';
    let pontosCount = function(event){
        pontuar();
    }
    let totalCount = function(event){
        erro();
    }
    alvo.addEventListener('click', pontosCount);
    cenario.addEventListener('click', totalCount);
    iniciar_cronometro();
    let intervalo = setInterval(function () {
        if(document.getElementById('relogio').textContent == 'Relógio: 00:00'){
            clearInterval(intervalo);
            alvo.removeEventListener('click', pontosCount);
            cenario.removeEventListener('click', totalCount);
        }
        alvo.style.left = Math.floor(Math.random() * 640) - 320 + 'px';
        alvo.style.top = Math.floor(Math.random() * 320) - 160 + 'px';
    }, 1200);
}
function iniciar_cronometro(){
    let relogio = document.getElementById('relogio');
    let segundos = 10;
    let seconds = setInterval(() => {
        relogio.innerHTML = `Relógio: 00:0${segundos - 1}`;
        segundos -= 1;
        if(segundos == 0){
            let form_user = document.getElementById('form_user');
            form_user.style.display = 'block';
            clearInterval(seconds);
        }
    }, 1000);
    
}
function pontuar(){
    let element = document.getElementById('acertos');
    let acertos = Number.parseInt(element.textContent) + 1;
    element.innerText = acertos;
}
function erro(){
    let element = document.getElementById('total');
    let total = Number.parseInt(element.textContent) + 1;
    element.innerText = total;
}
function addHistorico(){
    let input = document.getElementById('nome');
    historico.push(input.value);
    exibirHistorico();
    let form_user = document.getElementById('form_user').style.display = 'none';
    input.value = '';
}
function exibirHistorico(){
    let historicoElement = document.getElementById('historico');
    let div = document.createElement('div');
    let nome = document.createElement('p');
    let parcial = document.createElement('p');
    parcial.innerText = document.getElementById('parcial').textContent;
    nome.innerText = historico[historico.length - 1];
    div.appendChild(nome);
    div.appendChild(parcial);
    historicoElement.appendChild(div);
}