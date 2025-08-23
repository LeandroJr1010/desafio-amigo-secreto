//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// 🟢 Primeiro passo: criar um array vazio para armazenar os nomes
let amigos = []; // Declara um array vazio chamado 'amigos' que vai guardar os nomes adicionados

// Função que será chamada ao clicar no botão "Adicionar"
function adicionarAmigo() {
  // Captura o valor digitado no campo de entrada
  const addNome = document.getElementById("amigo").value; // Pega o id "amigo" e armazena na variável 'addNome'

  // Verifica se o campo não está vazio
  if (addNome.trim() !== "") { // Verifica se o valor digitado não é só espaço em branco

    // Adiciona o nome ao array
    amigos.push(addNome); // Insere o nome digitado no final do array 'amigos'

    /* 🧪 Adiciona o nome à lista visual
    document.getElementById('listaAmigos').innerHTML += `<li>${addNome}</li>`;*/ 

    /* 🧪 --- Novo método: mais seguro e eficiente para add nome a lista ---
    const lista = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = addNome;
    lista.appendChild(novoItem); */

    // Limpa o campo de entrada após adicionar
    document.getElementById("amigo").value = ""; 

    // Chama a função para exibir a lista atualizada
    exibirLista(); // Atualiza a lista visual
  }
}

// 🟡 Segunda etapa: função que percorre o array e exibe os nomes na lista HTML
function exibirLista() {
  // Obtém o elemento da lista <ul> onde os nomes serão exibidos
  const lista = document.getElementById("listaAmigos"); // Pega o elemento <ul> com id "listaAmigos"

  // Limpa a lista existente para evitar duplicados
  lista.innerHTML = ""; // Remove todos os itens da lista antes de adicionar os novos

  // Percorre o array e cria elementos <li> com appendChild
  for (let i = 0; i < amigos.length; i++) { // Loop que percorre todos os nomes no array 'amigos'
    const item = document.createElement("li"); // Cria um novo elemento <li>
    item.textContent = amigos[i]; // Define o texto do <li> como o nome atual do array
    lista.appendChild(item); // Adiciona o <li> à lista <ul>
  }
}

// 🔵 Terceira etapa: função para sortear um amigo aleatoriamente
function sortearAmigo() {
  // Verifica se há amigos disponíveis
  if (amigos.length === 0) { // Se o array estiver vazio, exibe um alerta
    alert("A lista de amigos está vazia. Adicione pelo menos um nome."); // Mostra mensagem de erro ao clicar em sortear
    return; // Interrompe a execução da função
  }

  // Gera um índice aleatório com base no tamanho do array
  const indiceSorteado = Math.floor(Math.random() * amigos.length); // Calcula um número aleatório entre 0 e o tamanho do array

  // Obtém o nome sorteado
  const nomeSorteado = amigos[indiceSorteado]; // Usa o índice sorteado para pegar o nome correspondente no array

  // Atualiza o conteúdo do elemento de resultado
  const resultado = document.getElementById("resultado"); // Pega o elemento com id "resultado"
  resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${nomeSorteado}</strong></li>`; // Exibe o nome sorteado dentro de um <li> com destaque
}
