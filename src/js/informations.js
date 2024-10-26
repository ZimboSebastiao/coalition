// informations.js

import { fetchData } from "../api/fetch.js";

async function getLatestDataForJessica() {
  try {
    const patients = await fetchData();

    if (patients.length === 0) {
      console.error("Nenhum dado de paciente encontrado.");
      return;
    }

    const jessica = patients.find(
      (paciente) => paciente.name === "Jessica Taylor"
    );

    if (!jessica) {
      console.error("Paciente Jessica Taylor não encontrado.");
      return;
    }

    const latestRecord = jessica.diagnosis_history[0];

    // Dados de interesse
    const latestData = {
      heart_rate: latestRecord.heart_rate,
      respiratory_rate: latestRecord.respiratory_rate,
      temperature: latestRecord.temperature,
    };

    console.log("Últimos dados do último mês de Jessica:", latestData);

    renderDataToHTML(latestData);
  } catch (error) {
    console.error("Erro ao obter os últimos dados da paciente Jessica:", error);
  }
}

function renderDataToHTML(data) {
  const heartRateElement = document.getElementById("heart-rate");
  const respiratoryRateElement = document.getElementById("respiratory-rate");
  const temperatureElement = document.getElementById("temperature");
  const levelsHeart = document.getElementById("level-heart");
  const levelsRespiratory = document.getElementById("level-respiratory");
  const levelsTemperature = document.getElementById("level-temperature");

  if (heartRateElement) {
    heartRateElement.textContent = `${data.heart_rate.value} bpm`;
  }
  if (levelsHeart) {
    levelsHeart.textContent = `${data.heart_rate.levels}`;
  }

  if (respiratoryRateElement) {
    respiratoryRateElement.textContent = `${data.respiratory_rate.value} bpm`;
  }
  if (respiratoryRateElement) {
    levelsRespiratory.textContent = ` ${data.respiratory_rate.levels}`;
  }

  if (temperatureElement) {
    temperatureElement.textContent = `${data.temperature.value} °F `;
  }
  if (temperatureElement) {
    levelsTemperature.textContent = `${data.temperature.levels}`;
  }
}

getLatestDataForJessica();
