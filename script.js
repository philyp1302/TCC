window.onload = function() {
  console.log("Página Bem Estar carregada com sucesso!");

  // Toggle password visibility
  const passwordToggle = document.querySelector('.password-toggle');
  const passwordInput = document.getElementById('senha');

  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      // You could change the icon here based on the type
      // For example: this.textContent = (type === 'password' ? '👁️' : '🔒');
    });
  }

  // You can add more interactions here, e.g., form submission handling
};