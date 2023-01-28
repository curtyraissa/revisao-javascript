- 14. axios
    - 👩🏻‍🏫 Código feito na aula
        
        ```html
        <div class="citacoes"></div>
        ```
        
        ```jsx
        // Axios
        const divCitacao = document.querySelector(".citacao")
        
        function pegarCitacao() {
            const promise = axios.get("https://api.quotable.io/random")
            promise.then((res) => {
                console.log(res)
                divCitacao.innerHTML = `
                    <i>${res.data.content}</i>
                    <p>- ${res.data.author}</p>
                `
            })
            promise.catch((err) => {
                console.log(err)
            })
        }
        
        pegarCitacao()
        ```
        
    - 🧑🏻‍💻 Exercícios
    1. Mostre uma lista com o nome dos 20 primeiros pokémons da PokéAPI: [https://pokeapi.co/](https://pokeapi.co/)
    2. Mostre uma lista com os alunos que são estudantes da Lufa Lufa (hufflepuff) a API do Harry Potter: [https://hp-api.onrender.com/](https://hp-api.onrender.com/)