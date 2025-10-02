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
// ----------- AGENDA DE AULAS -----------

const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const horarios = {
  "Segunda": ["18:45 - 19:30", "19:30 - 20:10", "20:30 - 21:15", "21:15 - 22:05", "22:05 - 22:45"],
  "Terça": ["18:00 - 18:45", "19:00 - 19:45", "20:00 - 20:45"],
  "Quarta": ["18:30 - 19:15", "19:30 - 20:15", "20:30 - 21:15"],
  "Quinta": ["18:45 - 19:30", "19:30 - 20:10", "20:30 - 21:15"],
  "Sexta": ["18:00 - 18:45", "19:00 - 19:45"]
};

let indiceDia = 0;

function atualizarHorarios() {
  const dia = diasSemana[indiceDia];
  document.getElementById("diaSemana").textContent = dia;

  const lista = document.getElementById("listaHorarios");
  if (!lista) return;

  lista.innerHTML = "";
  horarios[dia].forEach(horario => {
    const li = document.createElement("li");
    li.innerHTML = <span>${horario}</span> <div class="box">👤</div>;
    lista.appendChild(li);
  });
}

function trocarDia(direcao) {
  indiceDia = (indiceDia + direcao + diasSemana.length) % diasSemana.length;
  atualizarHorarios();
}

document.addEventListener("DOMContentLoaded", atualizarHorarios);

// ----------- GRÁFICOS ALIMENTAÇÃO -----------

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("graficoRecomendado")) {
    new Chart(document.getElementById("graficoRecomendado"), {
      type: "pie",
      data: {
        labels: ["Proteínas", "Carboidratos", "Gorduras"],
        datasets: [{
          data: [20, 50, 30],
          backgroundColor: ["#4caf50", "#2196f3", "#f44336"]
        }]
      },
      options: { plugins: { legend: { labels: { color: "white" } } } }
    });
  }

  if (document.getElementById("graficoReal")) {
    new Chart(document.getElementById("graficoReal"), {
      type: "pie",
      data: {
        labels: ["Proteínas", "Carboidratos", "Gorduras"],
        datasets: [{
          data: [0, 0, 0],
          backgroundColor: ["#4caf50", "#2196f3", "#f44336"]
        }]
      },
      options: { plugins: { legend: { labels: { color: "white" } } } }
    });
  }
});