
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