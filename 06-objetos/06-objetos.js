//     - 🧑🏻‍💻 Exercícios
//         1. Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade e profissão. Depois, imprima no console as propriedades desse objeto seguindo o modelo: “O nome da pessoa é ___, ela tem ___ anos e trabalha de ____”



const pessoa = {
    nome: "Raissa",
    idade: 30,
    profissao: "Engenheira"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e trabalha de ${pessoa.profissao}`)


//         2. Dado o objeto abaixo, imprima no console as seguintes frases:
            

            const meuPet = {
            	nome: "Polly",
            	tipo: "Cachorro",
            	raca: "Lhasa Apso",
            	roupa: { tipo: "meias", cor: "azul"},
            }
            
            // 1. “O nome do meu cachorro é Polly”
            // 2. “Polly é um lhasa apso que usa meias na cor azul”

console.log( `1. O nome do meu ${meuPet.tipo} é ${meuPet.nome}
2. ${meuPet.nome} é um ${meuPet.raca} que usa ${meuPet.roupa.tipo} na cor ${meuPet.roupa.cor}` )
  