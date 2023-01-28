- 04. Operadores Lógicos
    - 👩🏻‍🏫 Código feito na aula
        
        ```jsx
        // Operadores Lógicos => operações com booleanos
        // E => AND => && =====> Só retorna true quando ambos são true
        // OU => OR => || =====> Só retorna false quando ambos são false
        // NÃO => NOT => !  =====> Interruptor, muda true para false e vice-versa
        
        const ovos = true
        const farinha = false
        console.log(ovos && farinha)
        
        const acelga = false
        const alface = false
        console.log(acelga || alface)
        
        const carne = true
        console.log(!carne)
        ```
        
    - 🧑🏻‍💻 Exercícios
        1. O parque gostou do seu sistema, mas precisa colocar mais regras para a entrada do brinquedo porque ele é MUITO radical. Agora, os novos critérios para entrar são:
            1. Ter mais que 18 anos
            2. Ter mais que 1,60m de altura
            3. Não ter nenhum problema cardíaco (respostas possíveis: S ou N)
        2. Para fazer uma receita de brownie, precisamos atender alguns critérios:
            1. É obrigatório o uso de 1 xícara de leite
            2. É preciso ter cacau em pó ou achocolatado
            3. Além disso, é importante NÃO adicionar vinagre
            
            Crie 4 variáveis (leite, cacau, achocolatado, vinagre), todas booleanas. Então, faça uma fórmula com booleanos para determinar se a receita irá dar certo ou não
            
