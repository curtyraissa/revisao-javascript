- 07. Arrays 
    - 👩🏻‍🏫 Código feito na aula
        
        ```jsx
        // Arrays
        
        const listaDeCompras = ["Batata", "Cenoura", "Gengibre", "Maçã"]
        //                          ^        ^            ^        ^
        //                          0        1            2        3
        
        console.log(listaDeCompras[2])
        
        listaDeCompras[3] = "Maçã Vermelha"
        
        console.log(listaDeCompras.length)
        
        listaDeCompras.push("Curry")
        
        console.log(listaDeCompras)
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. Dada a lista de compras à seguir: `const lista = [”batata”, “cenoura”, “gengibre”]`
            1. Adicione mais um item: maçã
            2. Imprima no console o segundo item da lista (cenoura)
            3. Imprima no console o tamanho da lista
            4. Modifique o item “cenoura” para que diga: “cenoura pequena”
        2. Baseado no objeto abaixo, imprima a frase: “A professora Letícia Chijo, também conhecida como Let, Le ou Chijo, gosta muito de React”
            
            ```jsx
            const professora = {
            	nome: "Letícia Chijo",
            	apelidos: ["Let", "Le", "Chijo"],
            	materiaFavorita: "React"
            }
            ```
            
  