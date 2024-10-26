import { fetchData } from "../api/fetch.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const patients = await fetchData();
    console.log("Patients data fetched:", patients); // Log para verificar dados

    const jessica = patients.find(
      (paciente) => paciente.name === "Jessica Taylor"
    );

    if (jessica) {
      console.log("Jessica encontrada:", jessica); // Log para verificar paciente

      const last6Months = jessica.diagnosis_history.slice(0, 6).reverse();
      const labels = last6Months.map(
        (record) => `${record.month} ${record.year}`
      );
      const systolicValues = last6Months.map(
        (record) => record.blood_pressure.systolic.value
      );
      const diastolicValues = last6Months.map(
        (record) => record.blood_pressure.diastolic.value
      );

      // Exibindo resultados para verificar valores
      console.log("Labels:", labels);
      console.log("Systolic Values:", systolicValues);
      console.log("Diastolic Values:", diastolicValues);

      // Display results with added classes
      const systolicResult = document.getElementById("systolic-result");
      if (systolicResult) {
        systolicResult.textContent = `Últimos 6 meses: ${systolicValues.join(
          ", "
        )}`;
        systolicResult.classList.add("result-text", "systolic-result");
      }

      const diastolicResult = document.getElementById("diastolic-result");
      if (diastolicResult) {
        diastolicResult.textContent = `Últimos 6 meses: ${diastolicValues.join(
          ", "
        )}`;
        diastolicResult.classList.add("result-text", "diastolic-result");
      }

      const ctx = document.getElementById("bloodPressureChart");

      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Systolic",
                data: systolicValues,
                borderColor: "#C26EB4",
                backgroundColor: "#C26EB4",
                fill: false,
                borderWidth: 2,
                lineTension: 0.5,
                pointBackgroundColor: "#E66FD2",
                pointBorderColor: "#E66FD2",
                pointBorderWidth: 2,
                pointHoverRadius: 8,
                pointRadius: 6,
              },
              {
                label: "Diastolic",
                data: diastolicValues,
                borderColor: "#7E6CAB",
                backgroundColor: "#7E6CAB",
                fill: false,
                borderWidth: 2,
                lineTension: 0.5,
                pointBackgroundColor: "#8C6FE6",
                pointBorderColor: "#8C6FE6",
                pointBorderWidth: 2,
                pointHoverRadius: 8,
                pointRadius: 6,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "right",
                labels: {
                  color: "#333333",
                  font: {
                    size: 14,
                  },
                  padding: 20,
                },
              },
              title: {
                display: true,
                text: "Blood Pressure",
                font: {
                  size: 20,
                  weight: "bold",
                  family: "Manrope",
                },
                color: "#072635",
                padding: {
                  top: 20,
                  bottom: 20,
                  left: 10,
                  right: 10,
                },
                align: "start",
                position: "top",
                lineHeight: 1.5,
              },
              subtitle: {
                display: true,
                text: "Last 6 months",
                font: {
                  size: 14,
                  weight: "normal",
                  family: "Manrope",
                },
                color: "#072635",
                padding: {
                  top: -38,
                  bottom: 10,
                  left: 10,
                  right: 10,
                },
                align: "center",
                position: "top",
                lineHeight: 1.5,
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Add class to chart container
        document
          .getElementById("bloodPressureChart")
          .classList.add("chart-container");
      } else {
        console.error("Elemento canvas 'bloodPressureChart' não encontrado.");
      }
    } else {
      console.error("Paciente Jessica não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao processar os dados:", error);
  }
});
