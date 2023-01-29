// 1. Através de prompts, peça para o usuário inserir dois números e imprima no console uma mensagem no seguinte formato, com os resultados das operações nos lugares de A, B, C, D, E:
            
//             ```jsx
//             Soma: A
//             Subtração: B
//             Multiplicação: C
//             Divisão: D
//             Resto da Divisão: E
//             ```

// let a = Number(prompt("entre com o primeiro valor"))
// let b = Number(prompt("entre com o segundo valor"))

console.log(`Soma: ${a+b}`)
console.log(`Subtração: ${a-b}`)
console.log(`Multiplicação: ${a*b}`)
console.log(`Divisão: ${a/b}`)
console.log(`Resto da Divisão: ${a%b}`)


            
//         2. Peça para o usuário inserir um número. Some 2 a este número, depois multiplique o resultado por 3 e divida por 2. Tente fazer isso criando apenas uma variável para o resultado, fazendo as operações de uma única vez

let a = Number(prompt("entre com o valor"))
let resultado = (a+2)*3/2
console.log(resultado)