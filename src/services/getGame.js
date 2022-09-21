import { options, GAMEID_API_URL } from "./settings";

export default async function getGame({ id }) {
  const apiURL = `${GAMEID_API_URL}${id}`;
  return await fetch(apiURL, options).then((res) => res.json());
}
