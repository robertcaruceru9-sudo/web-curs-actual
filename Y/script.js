(() => {
      const counter = document.getElementById("death-counter");
      const annualEstimate = 8_000_000;
      const formatter = new Intl.NumberFormat("es-ES");

      function updateEstimate() {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 1).getTime();
        const startOfNextYear = new Date(now.getFullYear() + 1, 0, 1).getTime();
        const yearProgress = (now.getTime() - startOfYear) / (startOfNextYear - startOfYear);
        counter.value = formatter.format(Math.floor(annualEstimate * yearProgress));
        counter.textContent = counter.value;
      }

      updateEstimate();
      window.setInterval(updateEstimate, 1000);
    })();
