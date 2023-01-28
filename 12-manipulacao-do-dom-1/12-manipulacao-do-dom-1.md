- 12. Manipulação do DOM I
    - 👩🏻‍🏫 Código feito na aula
        
        ```html
        <body>
            <h1>Revisão de JavaScript</h1>
            <button onclick="clicouBotao()" class="botao-legal">
                <p>Me clique</p>
            </button>
            <script src="index.js"></script>
        </body>
        ```
        
        ```jsx
        function clicouBotao() {
            alert("Ui fui clicado")
            const botao = document.querySelector(".botao-legal")
            botao.innerHTML = "<p>Já fui clicado, obrigado</p>"
            botao.disabled = true
        }
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. Crie uma tela com um botão. Ao apertar o botão, deve aparecer um prompt para o usuário digitar sua cor favorita entre as opções: vermelho, verde ou azul. Mostre o nome da cor em um h1 na tela. Esse h1 deve estar escrito na cor escolhida.
        2. Crie uma página com um input e um botão. A pessoa pode inserir o seu nome no input e, ao apertar o botão:
            1. O nome irá aparecer em um h1 na tela, embaixo do input e do botão
            2. O input será limpado para poder receber novos textos
    