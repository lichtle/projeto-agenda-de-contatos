let form = document.getElementById("form");
let corpoTabela = document.getElementById("corpo-tabela");

let numerosTelefone = [];
let linhas = "";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  adicionarLinha();
});

function adicionarLinha() {
  let nomeContato = document.getElementById("nome-contato");
  let numeroContato = document.getElementById("numero-contato");
  let corpoTabela = document.getElementById("corpo-tabela");
  let aviso = document.getElementById("notice");

  if (numerosTelefone.includes(numeroContato.value)) {
    alert("Este número já está na sua lista!");
  } else {
    numerosTelefone.push(numeroContato.value); // Esta função precisa estar dentro do escopo do if, caso contrário o alerta será exibido para qualquer número inserido (pois estará colocando o número no array antes de fazer a validação com o if)

    let linha = `<tr>`;
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;

    corpoTabela.innerHTML = linhas;

    aviso.style.display = "none";

    nomeContato.value = "";
    numeroContato.value = "";
  }
}
