// 1. Em um editor de texto, e comum a gente ter funcionalidades como busca de uma palavra. Peça para o usuário inserir uma palavra através do prompt e verifique se esta palavra esta presente no texto abaixo, imprimindo no console o resultado. Devem ser consideradas as palavras em minúsculo e maiúsculo igualmente (ou seja: se a essoa escrever não, mesmo que no texto esteja escrito Não com N maiúsculo, deve retornar que a palavra está presente).

let palavra = prompt("diga uma palavra:")
let palavraMax = palavra.toUpperCase()

let texto = `Quem te vê passar assim por mim
            Não sabe o que é sofrer
            Ter que ver você, assim, sempre tão linda
            Contemplar o Sol do teu olhar, perder você no ar
            Na certeza de um amor
            Me achar um nada
            Pois sem ter teu carinho
            Eu me sinto sozinho
            Eu me afogo em solidão

            Oh, Anna Júlia
            Oh, Anna Júlia`
let textoMax = texto.toUpperCase()

console.log(textoMax.includes(palavraMax))

// 2. Outra funcionalidade comum é a substituição de palavras.Peça, através de dois prompts, para o usuário escolher:
// 1. Qual palavra ele quer trocar
// 2. Qual é a nova palavra que deve aparecer no lugar

// Depois, imprima o mesmo texto da pergunta anterior mas com as substituições realizadas.Assim como no exercício anterior, considere palavras em minúsculo ou maiúsculo.

let palavra1 = prompt("informe a primeira palavra")
let palavra2 = prompt("informe a segunda palavra")

let msg = `eu gosto de ${palavra1}`

console.log(msg.replace(palavra1, palavra2))
