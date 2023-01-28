- 06. Objetos
    - 👩🏻‍🏫 Código feito na aula
        
        ```jsx
        // Objetos
        
        const nomeDaProf = "Letícia"
        const apelidoDaProf = "Let"
        const idadeDaProf = 28
        
        const professora = {
            nome: "Letícia",
            apelido: "Let",
            idade: 28
        }
        
        console.log(professora.apelido)
        
        const caneta = {
            cor: "azul", 
            unicornioDaCaneta: {
                cabelo: "rosa",
                pelo: "branco",
                temCilios: true,
                chifre: "dourado"
            }
        }
        
        console.log(caneta.unicornioDaCaneta.chifre)
        
        professora.idade = 29
        professora.corFavorita = "Verde água"
        console.log(professora)
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade e profissão. Depois, imprima no console as propriedades desse objeto seguindo o modelo: “O nome da pessoa é ___, ela tem ___ anos e trabalha de ____”
        2. Dado o objeto abaixo, imprima no console as seguintes frases:
            
            ```jsx
            const meuPet = {
            	nome: "Polly",
            	tipo: "Cachorro",
            	raca: "Lhasa Apso",
            	roupa: { tipo: "meias", cor: "azul"},
            }
            ```
            
            1. “O nome do meu cachorro é Polly”
            2. “Polly é um lhasa apso que usa meias na cor azul”
  