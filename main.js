//Declaração de variáveis 
let saudacao = document.getElementById('saudacao')
let horaatual = new Date().getHours()

if (horaatual >= 5 && horaatual < 12){
    saudacao.textContent = 'Bom dia!';
} else if (horaatual >= 12 && horaatual < 18){
    saudacao.textContent = 'Boa Tarde!';
} else {
    saudacao.textContent = 'Boa Noite';
}


document.getElementById("resultado").innerHTML = saudacao