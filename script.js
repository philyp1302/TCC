window.onload = function () {
  const passwordToggle = document.querySelector('.password-toggle');
  const passwordInput = document.getElementById('senha');

  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
    });
  }

  // Redireciona ao clicar em login
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }
};