const form = document.getElementById("form-tarefas");
const novoItem = document.getElementById('novo-item');
const tarefas = [];
let linhas = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNovaTarefa = document.getElementById("nova-tarefa");

    if(tarefas.includes(inputNovaTarefa.value)) {
        alert(`A tarefa ${inputNovaTarefa.value} já foi inserida.`)
    } else {
    tarefas.push(inputNovaTarefa.value);
    let linha = '<tr>';
    linha += `<td>${inputNovaTarefa.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    }

    inputNovaTarefa.value ='';
}

function riscarTarefa() {
    this.classList.toggle('riscado');
}

function atualizaTabela() {
    novoItem.innerHTML = linhas;

    const tarefasHTML = novoItem.getElementsByTagName('td');
    for (let i = 0; i < tarefasHTML.length; i++) {
        tarefasHTML[i].addEventListener('click', riscarTarefa);
    }
}