import { fetchData } from "../api/fetch.js";

function renderLabResults(patient) {
  const labResultsList = document.getElementById("labResultsList");

  if (!labResultsList) {
    console.error(
      "Elemento de lista para resultados de laboratório não encontrado."
    );
    return;
  }

  labResultsList.innerHTML = "";

  patient.lab_results.forEach((result) => {
    console.log(result);
    const li = document.createElement("li");
    li.textContent = result;

    if (result === "CT Scans") {
      li.classList.add("ct-scans");
    }

    const additionalImgSrc =
      "../../assets/images/download_FILL0_wght300_GRAD0_opsz24 (1)@2x.png";
    const additionalImg = document.createElement("img");
    additionalImg.src = additionalImgSrc;
    additionalImg.alt = "Download";
    additionalImg.className = "additional-img";

    li.appendChild(additionalImg);

    labResultsList.appendChild(li);
  });
}

async function populateLabResults() {
  const data = await fetchData();

  if (data.length === 0) {
    console.error("Nenhum dado encontrado.");
    return;
  }

  const jessica = data[3];

  if (!jessica || jessica.name !== "Jessica Taylor") {
    console.error("Paciente Jessica Taylor não encontrada no índice 3.");
    return;
  }

  renderLabResults(jessica);
}

document.addEventListener("DOMContentLoaded", () => {
  populateLabResults();
});
