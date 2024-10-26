// historic.js
import { fetchData } from "../api/fetch.js";

function createTableRow(diagnosis) {
  const tr = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = diagnosis.name;
  tr.appendChild(tdName);

  const tdDescription = document.createElement("td");
  tdDescription.textContent = diagnosis.description;
  tr.appendChild(tdDescription);

  const tdStatus = document.createElement("td");
  tdStatus.textContent = diagnosis.status;
  tr.appendChild(tdStatus);

  return tr;
}

async function populateDiagnosisTable() {
  const data = await fetchData();

  if (data.length === 0) {
    console.error("Nenhum dado encontrado.");
    return;
  }

  const jessica = data[3];

  if (!jessica || jessica.name !== "Jessica Taylor") {
    console.error("Paciente Jessica Taylor não encontrada no índice 5.");
    return;
  }

  const tableBody = document.querySelector("#diagnosisTable tbody");

  jessica.diagnostic_list.forEach((diagnosis) => {
    const row = createTableRow(diagnosis);
    tableBody.appendChild(row);
  });
}

populateDiagnosisTable();
