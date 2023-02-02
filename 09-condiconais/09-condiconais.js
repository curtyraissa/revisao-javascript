
// 1. Peça para o usuário digitar um número e, em um alert, dia se esse número é par ou ímpar. 

const entreNumero = Number(prompt("Entre om um número"))
if ((entreNumero % 2) == 0){
  alert("É par!")
} else {
  alert("É impar!")
}


// 2. Peça para o usuário inserir 3 medidas, correspondentes aos 3 lados de um triângulo. Em seguida, diga em um alert se esse triângulo e isósceles, escaleno, equilátero ou se ele não existe.
// [Condição de existência do triângulo](https://brasilescola.uol.com.br/o-que-e/matematica/o-que-e-a-condicao-existencia-um-triangulo.htm)      
// [Tipos de triângulos](https://www.significados.com.br/tipos-de-triangulos/)

let a = Number(prompt(`Entre com primeira medida`))
let b = Number(prompt(`Entre com segunda medida`))
let c = Number(prompt(`Entre com terceira medida`))


if (a < (b + c) && b < (a + c) && c < (a + b)) {

  if (a == b && b == c) {
    alert('Triângulo equilátero');
  }
  else if (a == b || a == c || c == b) {
    alert('Triângulo isóceles');
  }
  else {
    alert('Triângulo escaleno');
  }
}
else {
  alert('Não Existe!');
}
