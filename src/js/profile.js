import { fetchData } from "../api/fetch.js";

function renderPatientProfile(patient) {
  const nameElement = document.getElementById("patientName");
  if (nameElement) {
    nameElement.textContent = patient.name;
  }

  const genderElement = document.getElementById("patientGender");
  if (genderElement) {
    genderElement.textContent = patient.gender;
  }

  const ageElement = document.getElementById("patientAge");
  if (ageElement) {
    ageElement.textContent = patient.age;
  }

  const dobElement = document.getElementById("patientDOB");
  if (dobElement) {
    dobElement.textContent = patient.date_of_birth;
  }

  const phoneElement = document.getElementById("patientPhone");
  if (phoneElement) {
    phoneElement.textContent = patient.phone_number;
  }

  const emergencyContactElement = document.getElementById(
    "patientEmergencyContact"
  );
  if (emergencyContactElement) {
    emergencyContactElement.textContent = patient.emergency_contact;
  }

  const insuranceTypeElement = document.getElementById("patientInsuranceType");
  if (insuranceTypeElement) {
    insuranceTypeElement.textContent = patient.insurance_type;
  }

  const profilePictureElement = document.getElementById(
    "patientProfilePicture"
  );
  if (profilePictureElement) {
    if (patient.profile_picture) {
      profilePictureElement.src = patient.profile_picture;
    } else {
      profilePictureElement.alt = "Imagem do perfil não disponível";
    }
  }
}

async function populatePatientProfile() {
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

  renderPatientProfile(jessica);
}

document.addEventListener("DOMContentLoaded", () => {
  populatePatientProfile();
});
