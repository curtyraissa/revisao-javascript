- 05. Strings
    - 👩🏻‍🏫 Código feito na aula
        
        ```jsx
        // Strings => textos
        
        const texto1 = "Oi"
        const texto2 = 'Letícia'
        const texto3 = `${texto1}, meu nome é ${texto2}. Prazer!` // template string
        const texto4 = texto1 + ", meu nome é " + texto2 + ". Prazer!"
        
        console.log(texto3)
        console.log(texto4)
        
        console.log(texto1.length)
        console.log(texto2.toUpperCase())
        
        const texto5 = "Hoje eu almocei um bife de porco."
        console.log(texto5.includes("frango"))
        
        console.log(texto5.replace("porco", "abobrinha"))
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. Em um editor de texto, e comum a gente ter funcionalidades como busca de uma palavra. Peça para o usuário inserir uma palavra através do prompt e verifique se esta palavra esta presente no texto abaixo, imprimindo no console o resultado. Devem ser consideradas as palavras em minúsculo e maiúsculo igualmente (ou seja: se a essoa escrever não, mesmo que no texto esteja escrito Não com N maiúsculo, deve retornar que a palavra está presente).
            
            ```jsx
            Quem te vê passar assim por mim
            Não sabe o que é sofrer
            Ter que ver você, assim, sempre tão linda
            Contemplar o Sol do teu olhar, perder você no ar
            Na certeza de um amor
            Me achar um nada
            Pois sem ter teu carinho
            Eu me sinto sozinho
            Eu me afogo em solidão
            
            Oh, Anna Júlia
            Oh, Anna Júlia
            ```
            
        2. Outra funcionalidade comum é a substituição de palavras. Peça, através de dois prompts, para o usuário escolher:
            1. Qual palavra ele quer trocar
            2. Qual é a nova palavra que deve aparecer no lugar
            
            Depois, imprima o mesmo texto da pergunta anterior mas com as substituições realizadas. Assim como no exercício anterior, considere palavras em minúsculo ou maiúsculo.
            