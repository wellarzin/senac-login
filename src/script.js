const username = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const submitButton = document.querySelector('input[type="submit"]');
const paragrafo = document.querySelector('.paragrafo')

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  // Validação do campo de usuário
  if (username.value.trim() === '') {
    paragrafo.innerHTML = 'Por favor, insira um usuário válido.';
    return
}

  // Validação do campo de senha
  if (password.value.trim() === '') {
    paragrafo.innerHTML = 'Por favor, insira uma senha válida.';
    return
  }

  // Redirecionamento do usuário para a página correta após o login
  window.location.href = 'caminho/da/pagina/de/destino';
});