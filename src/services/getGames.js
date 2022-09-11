import { options, API_URL } from "./settings";

export default async function getGames() {
  const apiURL = `${API_URL}`;

  const response = await fetch(apiURL, options);
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
  // return fetch(apiURL, options)
  //   .then((res) => res.json())
  //   .catch((err) => console.error(err));
}
