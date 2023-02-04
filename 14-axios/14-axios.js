// 1. Mostre uma lista com o nome dos 20 primeiros pokémons da PokéAPI: [https://pokeapi.co/](https://pokeapi.co/)

const lista = document.querySelector(".lista")

function getAPI() {
    const promise = axios.get(" https://pokeapi.co/api/v2/pokemon")
    promise.then((res) => {
        for (let i = 0; i < 20; i++) {
            lista.innerHTML += `<li> ${res.data.results[i].name} </li>`
        }

    })
    promise.catch((err) => {
        console.log(err)
    })
}
getAPI()

// 2. Mostre uma lista com os alunos que são estudantes da Lufa Lufa (hufflepuff) a API do Harry Potter: [https://hp-api.onrender.com/](https://hp-api.onrender.com/)

const lista = document.querySelector(".lista")

function getAPI() {
    const promise = axios.get("https://hp-api.onrender.com/api/characters/house/hufflepuff")
    promise.then((res) => {
        console.log(res)
        for (let i = 0; i < 18; i++) {
            lista.innerHTML += `<li> ${res.data[i].name}</li>`
        }
    })
    promise.catch((err) => {
        console.log(err)
    })
}
getAPI()