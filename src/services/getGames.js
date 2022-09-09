import { options, API_URL } from "./settings";

export default async function getGames() {
  const apiURL = `${API_URL}`;

  return fetch(apiURL, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
