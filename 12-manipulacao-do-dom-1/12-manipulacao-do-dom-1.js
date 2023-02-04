// 1. Crie uma tela com um botão. Ao apertar o botão, deve aparecer um prompt para o usuário digitar sua cor favorita entre as opções: vermelho, verde ou azul. Mostre o nome da cor em um h1 na tela. Esse h1 deve estar escrito na cor escolhida.

function escolherCor() {
    const cor = prompt("qual é a sua cor favorita entre vermelho, verde ou azul?")
    const alterar = document.querySelector(".botaozinho h1")
    alterar.innerHTML = cor
    if (cor == "vermelho") {
        alterar.style.color = 'red'
    } else if (cor == "azul") {
        alterar.style.color = 'blue'
    } else {
        alterar.style.color = 'green'
    }
}


// 2. Crie uma página com um input e um botão. A pessoa pode inserir o seu nome no input e, ao apertar o botão:
//     1. O nome irá aparecer em um h1 na tela, embaixo do input e do botão
//     2. O input será limpado para poder receber novos textos



const btn = document.querySelector("#btn")
btn.addEventListener('click', function (e) {
    e.preventDefault()

    const nomeEscrito = nome.value

    const novo = document.querySelector("#novo")

    novo.innerHTML = `<h1> ${nomeEscrito} </h1>`
})