let form = document.getElementById("form");
let corpoTabela = document.getElementById("corpo-tabela");

let linhas = "";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  adicionarLinha();

  console.log(linhas);
});

function adicionarLinha() {
  let nomeContato = document.getElementById("nome-contato");
  let numeroContato = document.getElementById("numero-contato");
  let corpoTabela = document.getElementById("corpo-tabela");

  let linha = `<tr>`;
  linha += `<td>${nomeContato.value}</td>`;
  linha += `<td>${numeroContato.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  corpoTabela.innerHTML = linhas;
}
