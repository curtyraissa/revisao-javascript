// 1. O parque gostou do seu sistema, mas precisa colocar mais regras para a entrada do brinquedo porque ele é MUITO radical. Agora, os novos critérios para entrar são:
// 1. Ter mais que 18 anos
// 2. Ter mais que 1,60m de altura
// 3. Não ter nenhum problema cardíaco (respostas possíveis: S ou N)

// const maiorIdade = 18
// const alturaPermitida = 1.60

// let idade = Number(prompt("qual a idade"))
// let altura = Number(prompt("qual a altura"))
// let cardiaca = prompt("possui problema cardíaco?")

// if (idade > maiorIdade && altura > alturaPermitida && cardiaca == "N") {
//     alert("pode entrar no brinquedo")
// } else {
//     alert("nao pode entrar no brinquedo")
// }


// 2. Para fazer uma receita de brownie, precisamos atender alguns critérios:
// 1. É obrigatório o uso de 1 xícara de leite
// 2. É preciso ter cacau em pó ou achocolatado
// 3. Além disso, é importante NÃO adicionar vinagre
// Crie 4 variáveis (leite, cacau, achocolatado, vinagre), todas booleanas. Então, faça uma fórmula com booleanos para determinar se a receita irá dar certo ou não

let leite = true
let cacau = true
let achocolatado = true
let vinagre = false

console.log(leite && cacau && achocolatado && !vinagre)