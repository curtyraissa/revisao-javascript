- 08. Funções
    - 👩🏻‍🏫 Código feito na aula
        
        ```jsx
        // Funções
        
        // Declaração comum
        function somar(num1, num2) {
            const resultado = num1 + num2
            return resultado
        }
        
        const res1 = somar(8, 9)
        const res2 = somar(48418, 455)
        
        console.log(res1, res2)
        
        // Fução anônima (sem nome, dentro de uma variável)
        const subtrair = function (num1, num2) {
            const resultado = num1 - num2
            return resultado
        }
        
        const res3 = subtrair(10, 9)
        console.log(res3)
        
        // Arrow Function
        const multiplicacao = (num1, num2) => {
            const resultado = num1 * num2
            return resultado
        }
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. Crie uma função que recebe um array de numeros e retorna um novo array com o último número dividido por 2
        2. Crie uma função que pede o nome do usuário em um prompt e executa um alert dando as boas-vindas ao site
            
            
    