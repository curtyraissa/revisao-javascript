// 1. Em um parque de diversões, apenas pessoas com mais de 1,60m podem entrar em um brinquedo. Peça para o usuário inserir no prompt a sua altura e, se for menor do que a altura mínima, mostre um alert dizendo que ele não pode entrar no brinquedo.


let altura = Number(prompt("entre com a altura"))
if(altura<=1.60){
    alert("Você não pode entrar no brinquedo")
}



// 2. Sorteie um número aleatório de 1 a 10. Depois, peça através de um prompt para o usuário inserir um número de 1 a 10 e diga à ele, no console, se o número digitado é maior, menor ou igual ao número sorteado


let aleatorio = Math.floor(Math.random() * 10) + 1
console.log(aleatorio)
let numero = Number(prompt("entre com um número de 1 a 10"))
if (numero == aleatorio) {
    alert("igual ao número sorteado")
} else if (numero < aleatorio) {
    alert("menor que o número sorteado")
} else {
    alert("maior que o número sorteado")
}

