// - 🧑🏻‍💻 Exercícios
//         1. Dada a lista de compras à seguir: 
//             1. Adicione mais um item: maçã
//             2. Imprima no console o segundo item da lista (cenoura)
//             3. Imprima no console o tamanho da lista
//             4. Modifique o item “cenoura” para que diga: “cenoura pequena”

const lista = ['batata', 'cenoura', 'gengibre']
lista.push("maca")
console.log(lista)
console.log(lista[1])
console.log(lista.length)
console.log(lista[1] = "cenoura pequena")


// 2. Baseado no objeto abaixo, imprima a frase: “A professora Letícia Chijo, também conhecida como Let, Le ou Chijo, gosta muito de React”

const professora = {
  nome: "Letícia Chijo",
  apelidos: ["Let", "Le", "Chijo"],
  materiaFavorita: "React"
}
 console.log(`A professora ${professora.nome}, também conhecida como ${professora.apelidos[0]}, ${professora.apelidos[1]}, ${professora.apelidos[2]}, gosta muito de ${professora.materiaFavorita}`)