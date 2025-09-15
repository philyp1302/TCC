document.addEventListener('DOMContentLoaded', () => {
  const state = {
    steps: 0,
    minutes: 0,
    kcal: 0
  };

  function render() {
    const topStats = document.querySelectorAll('.stats .stat span');
    if (topStats.length >= 3) {
      topStats[0].textContent = ${state.steps} passos.;
      topStats[1].textContent = ${state.minutes} min.;
      topStats[2].textContent = ${state.kcal} kcal.;
    }
  }

  const horario = document.getElementById('horario');
  if (horario) {
    horario.addEventListener('click', () => {
      state.steps += 120;
      state.minutes += 15;
      state.kcal += 55;
      render();
    });
  }

  render();
});