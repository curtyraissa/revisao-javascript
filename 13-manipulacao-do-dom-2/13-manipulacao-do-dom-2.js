// 1. Dado o array `const frutas = ["Banana", "Maçã", "Caqui", "Manga", "Amora"]` , mostre a lista de frutas na tela. Ao clicar em uma fruta, ela deve ser deletada da lista e desaparecer da tela. 

const frutas = ["Banana", "Maçã", "Caqui", "Manga", "Amora"]
const lista = document.querySelector("ul")
for(let i=0; i<frutas.length; i++){
lista.innerHTML += (`<li onclick="deletar(this)"> ${frutas[i]} </li>`)
}

function deletar(){

}


// 2. Crie uma todo-list simples. Ela deve ter as seguintes funcionalidades:
//     1. Input para escrever a nova tarefa e um botão para adicioná-la na lista
//     2. Ao clicar em uma tarefa da lista, sua formatação deve mudar para ficar riscada ou des-riscada se foi feita ou não feita
//     3. Um botão para finalizar todas as tarefas