- 13. Manipulação do DOM II 
    - 👩🏻‍🏫 Código feito na aula
        
        ```html
        <body>
            <h1>Revisão de JavaScript</h1>
            <button onclick="clicouBotao()" class="botao-legal">
                <p>Me clique</p>
            </button>
        
            <ul></ul>
            <script src="index.js"></script>
        </body>
        ```
        
        ```css
        .vermelho {
            color: red;
        }
        ```
        
        ```jsx
        const dados = ["Banana", "Maçã", "Laranja", "Amora"]
        const lista = document.querySelector("ul")
        
        function clicouItem(elemento) {
            elemento.classList.toggle("vermelho")
        }
        
        for (let i = 0; i < dados.length; i++) {
            lista.innerHTML += `<li onclick="clicouItem(this)">${dados[i]}</li>`
        }
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. Dado o array `const frutas = ["Banana", "Maçã", "Caqui", "Manga", "Amora"]` , mostre a lista de frutas na tela. Ao clicar em uma fruta, ela deve ser deletada da lista e desaparecer da tela. 
        2. Crie uma todo-list simples. Ela deve ter as seguintes funcionalidades:
            1. Input para escrever a nova tarefa e um botão para adicioná-la na lista
            2. Ao clicar em uma tarefa da lista, sua formatação deve mudar para ficar riscada ou des-riscada se foi feita ou não feita
            3. Um botão para finalizar todas as tarefas
