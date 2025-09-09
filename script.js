const form = document.getElementById('form-produto');
const catalogo = document.getElementById('catalogo');

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const descricao = document.getElementById('descricao').value;

  const produto = document.createElement('div');
  produto.classList.add('produto');

  produto.innerHTML = `
    <h3>${nome}</h3>
    <p>Quantidade: ${quantidade}</p>
    <p>${descricao}</p>
  `;

  catalogo.appendChild(produto);

  form.reset();
});
