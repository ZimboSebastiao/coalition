// data.js
import { fetchData } from "../api/fetch.js";

document.addEventListener("DOMContentLoaded", async () => {
  const patientListElement = document.getElementById("patient-list");
  const patients = await fetchData();

  console.log("Pacientes retornados:", patients);

  if (Array.isArray(patients) && patients.length > 0) {
    patients.forEach((patient) => {
      const listItem = document.createElement("li");
      listItem.className = "patient-item";

      if (patient.name === "Jessica Taylor") {
        listItem.className = "patient-item special-background";
      } else {
        listItem.className = "patient-item";
      }

      const imgAndInfoDiv = document.createElement("div");
      imgAndInfoDiv.className = "img-and-info";

      const img = document.createElement("img");
      img.src = patient.profile_picture;
      img.alt = `${patient.name}'s profile picture`;
      img.className = "imgProfile";
      imgAndInfoDiv.appendChild(img);

      const infoDiv = document.createElement("div");
      infoDiv.className = "patient-info";

      const name = document.createElement("span");
      name.textContent = patient.name;
      name.className = "body-emphasized-14pt";
      infoDiv.appendChild(name);

      const gender = document.createElement("p");
      gender.textContent = `${patient.gender}, ${patient.age}`;
      gender.className = "body-secondary-info-14pt";
      infoDiv.appendChild(gender);

      imgAndInfoDiv.appendChild(infoDiv);

      const additionalImgSrc =
        "../../assets/images/more_horiz_FILL0_wght300_GRAD0_opsz24.png";
      const additionalImg = document.createElement("img");
      additionalImg.src = additionalImgSrc;
      additionalImg.alt = "More options";
      additionalImg.className = "additional-img";

      const link = document.createElement("a");
      link.href = "#";

      link.appendChild(additionalImg);

      const linkContainerDiv = document.createElement("div");
      linkContainerDiv.className = "link-container";

      linkContainerDiv.appendChild(link);

      imgAndInfoDiv.appendChild(linkContainerDiv);

      listItem.appendChild(imgAndInfoDiv);

      patientListElement.appendChild(listItem);
    });
  } else {
    const noDataItem = document.createElement("li");
    noDataItem.textContent = "Nenhum paciente encontrado.";
    patientListElement.appendChild(noDataItem);
  }
});
