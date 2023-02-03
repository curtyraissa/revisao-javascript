// 1. Crie uma função que recebe um array de numeros e retorna um novo array com o último número dividido por 2
divideArray([1, 2, 4])

function divideArray(arr) {
  let x = arr.length - 1
  arr[x] = (arr[x]) / 2
  console.log(arr)
}



// 2. Crie uma função que pede o nome do usuário em um prompt e executa um alert dando as boas - vindas ao site

function pedirNome() {
  let nome = prompt("Qual é o seu nome?")
  alert(`Boas-Vindas ao site ${nome}`)
}
pedirNome()