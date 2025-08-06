document.addEventListener('DOMContentLoaded', () => {
    // Lógica para index.html (Página de Login)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Previne o envio padrão do formulário

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validação simples (substitua por autenticação real em um aplicativo de verdade)
            if (username === 'user' && password === 'password') {
                alert('Login bem-sucedido!');
                window.location.href = 'dashboard.html'; // Redireciona para o painel
            } else {
                alert('Usuário ou senha inválidos.');
            }
        });
    }

    // Lógica para dashboard.html (Página do Painel)
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            alert('Você foi desconectado.');
            window.location.href = 'index.html'; // Redireciona de volta para o login
        });
    }
});