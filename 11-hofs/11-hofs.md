- 11. HOFs
    - 👩🏻‍🏫 Código feito na aula
        
        ```jsx
        // HOFs - Higher Order Functions => função que recebe outra função como parâmetro
        
        // map =>   Criar um novo array com elementos modificados em relação ao original. 
        //          Retorna um novo array de tamanho igual ao original
        
        const precos = [1, 2, 3, 4, 5]
        const novosPrecos = precos.map((num) => num + 1)
        
        console.log(precos)
        console.log(novosPrecos)
        
        // filter =>    Criar um novo array com alguns elementos do array original, filtrando alguns 
        //              dos valores. O tamanho do array final é menor ou igual ao original
        
        const numeros = [1, 2, 3, 4, 5]
        const pares = numeros.filter((num) => num % 2 === 0)
        console.log(pares)
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. Usando HOFs, crie uma função que recebe um array e retorna apenas os números pares da lista original, mas multiplicados por 2
        2. Abaixo temos um array de produtos de uma floricultura e serão pedidas algumas operações:
            
            ```jsx
            const produtos = [
            	{ nome: "Margaridas", categoria: "Flor", preco: 10.00}
            	{ nome: "Vaso", categoria: "Utilidades", preco: 25.00}
            	{ nome: "Regador", categoria: "Utilidades", preco: 30.00}
            	{ nome: "Rosas", categoria: "Flor", preco: 20.00}
            	{ nome: "Tesoura", categoria: "Utilidades", preco: 10.00}
            	{ nome: "Orquídeas", categoria: "Flor", preco: 30.00}
            ]
            ```
            
            1. Utilizando HOFs, crie um novo array modificando os preços dos produtos para dar 10% de desconto em relação ao preço original 
            2. Utilizando HOFs, crie um array contendo somente os produtos da categoria “Utilidades”
            3. Utilizando HOFs, atribua um desconto de 30% nos produtos com a categoria “Flores”
            4. Utilizando HOFs, crie um array que possua os nomes das flores disponíveis ⇒ `[”Margaridas”, “Rosas”, “Orquídeas”]`
   