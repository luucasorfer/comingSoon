(function () {
  // Definir a data final do contador
  const countdownDate = new Date("Feb 8, 2023 23:59:59");

  function startCountdown() {
    // Iniciar o intervalo de tempo
    let timer = setInterval(() => {
      // Obter a data atual
      const today = new Date();

      // Calcular a diferença entre as duas datas
      let distance = countdownDate.getTime() - today.getTime();

      // Se a diferença for menor que zero, o contador expirou e zera o contador
      if (distance < 0) {
        clearInterval(timer);
        // Atualizar o elemento colocando uma mensagem na página
        let countdownElement = document.getElementById("countdown-tittle");
        if (countdownElement) {
          countdownElement.innerHTML =
            '<h1 class="countdownIsOver">Mission Accomplished...</h1>';
        }
        let timerElement = document.getElementById("timer");
        if (timerElement) {
          timerElement.innerHTML =
            '<h2 class="timerIsOver">The Rocket has been launched! 🚀</h2>';
        }
        return;
      }

      // Calcular o número de dias, horas, minutos e segundos restantes
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Atualizar os valores na página
      let daysElement = document.getElementById("daysLeft");
      if (daysElement) {
        //Usaremos a função .padStart() para preencher o valores com 2 casas
        //para usar esta função eu preciso que a variável tinha valores de strings
        //por isso tem o .toString() antes do .padStart()
        daysElement.innerHTML = days.toString().padStart(2, "0");
      }
      let hoursElement = document.getElementById("hoursLeft");
      if (hoursElement) {
        hoursElement.innerHTML = hours.toString().padStart(2, "0");
      }
      let minutesElement = document.getElementById("minutesLeft");
      if (minutesElement) {
        minutesElement.innerHTML = minutes.toString().padStart(2, "0");
      }
      let secondsElement = document.getElementById("secondsLeft");
      if (secondsElement) {
        secondsElement.innerHTML = seconds.toString().padStart(2, "0");
      }
    }, 1000);
  }

  // Iniciar o contador
  startCountdown();
})();
