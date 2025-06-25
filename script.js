window.onload = function() {
  console.log("Página Bem Estar carregada com sucesso!");

  const passwordToggle = document.querySelector('.password-toggle');
  const passwordInput = document.getElementById('senha');

  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
    });
  }
};