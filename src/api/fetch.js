// fetch.js
import API_URL from "./api.js";
import { auth } from "../api/auth.js";

export async function fetchData() {
  const username = "coalition";
  const password = "skills-test";
  const authHeader = auth(username, password);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", authHeader);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(API_URL, requestOptions);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    console.log("Dados recebidos:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
}
