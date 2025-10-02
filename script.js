// Captura o formulário de login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  // Pega os valores (poderia validar)
  const usuario = document.getElementById("usuario").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Simples validação
  if(usuario && email && senha) {
    // Redireciona para dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Preencha todos os campos!");
  }
});