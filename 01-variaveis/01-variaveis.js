// 1. Através de um prompt, peça para o usuário inserir o nome de um produto
// 2. Através de um segundo prompt, peça para o usuário inserir o preço desse produto
// 3. Por fim, o gerente ficou doido! Dê um desconto de 10% no valor do produto, guarde o novo preço na mesma variável e mostre no site o nome do produto com o novo valor no console

darDesconto()
function darDesconto() {
    let nomeProduto = prompt("qual o nome do produto?")
    let valorProduto = prompt("qual o nome do valor do produto?")
    valorProduto -= valorProduto*0.1
    console.log(`o produto ${nomeProduto}, está R$${valorProduto}`)
}


// 1. Crie duas variáveis, `a` e `b`
// 2. Inicialize a variavel a com o valor 10 e a variável b com o valor 20
// 3. Agora, troque os conteúdos de cada variável, fazendo com que o valor que está em `a` vá para `b` e vice-versa
// 4. Imprima no console o novo valor de ambas as variáveis

let a = 10;
let b = 20;
let novoValor

novoValor = a
a = b
b = novoValor

console.log(a);
console.log(b);