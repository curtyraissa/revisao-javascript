- 10. Laços
    - 👩🏻‍🏫 Código feito na aula
        
        ```jsx
        // Laços - while e for
        // 1) Começo
        // 2) Incremento
        // 3) Ação a ser repetida
        // 4) Condição de parada
        
        const numeros = [1, 2, 3, 4, 5]
        let i = 0
        let temZero = false
        
        while (i < numeros.length) {
            if (numeros[i] === 0) {
                temZero = true
            }
            i++
        }
        
        console.log(temZero)
        
        for (let j = 0; j < numeros.length; j++){
            if (numeros[j] === 0) {
                console.log(numeros[j])
                temZero = true
            }
        }
        
        console.log(temZero)
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. Faça uma função que recebe um array de números positivos e retorna qual é o menor número dele
        2. Dado o objeto abaixo, imprima no console a lista com os jogos favoritos da professora
            
            ```jsx
            const prof = {
            	nome: "Letícia", 
            	apelido: "Let",
            	jogosPreferidos: ["Chrono Trigger", "Undertale", "Hollow Knight", "Stray"] 
            }
            
            // --------- Formato que a lista deve ser impressa ---------//
            Jogos favoritos da Professora Let:
            1) Chrono Trigger
            2) Undertale
            3) Hollow Knight
            4) Stray
            ```
            
 