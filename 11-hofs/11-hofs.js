// 1. Usando HOFs, crie uma função que recebe um array e retorna apenas os números pares da lista original, mas multiplicados por 2

// const lista = [1, 2, 3, 4, 5, 6]
// const novaLista1 = lista.filter((num) => num % 2 == 0)
// const novaLista2 = novaLista1.map((num) => num * 2)
// console.log(novaLista2)

//         2. Abaixo temos um array de produtos de uma floricultura e serão pedidas algumas operações:


const produtos = [
    { nome: "Margaridas", categoria: "Flor", preco: 10.00 },
    { nome: "Vaso", categoria: "Utilidades", preco: 25.00 },
    { nome: "Regador", categoria: "Utilidades", preco: 30.00 },
    { nome: "Rosas", categoria: "Flor", preco: 20.00 },
    { nome: "Tesoura", categoria: "Utilidades", preco: 10.00 },
    { nome: "Orquídeas", categoria: "Flor", preco: 30.00 },
]


//             1. Utilizando HOFs, crie um novo array modificando os preços dos produtos para dar 10% de desconto em relação ao preço original
//             2. Utilizando HOFs, crie um array contendo somente os produtos da categoria “Utilidades”
//             3. Utilizando HOFs, atribua um desconto de 30% nos produtos com a categoria “Flores”
//             4. Utilizando HOFs, crie um array que possua os nomes das flores disponíveis ⇒ `[”Margaridas”, “Rosas”, “Orquídeas”]`

const novo1 = produtos.map((num) => (num.preco - num.preco * 0.1))
console.log(novo1)

const novo2 = produtos.filter((item) => item.categoria == "Utilidades")
console.log(novo2)

const novo3 = produtos.filter((item)=> item.categoria == "Flor")
const novo33 = novo3.map((item)=> item.preco-item.preco*0.3)
console.log(novo33)

const novo4 = produtos.filter((item)=>item.categoria == "Flor")
const novo44 = novo4.filter((item) => item.nome)
console.log(novo44)