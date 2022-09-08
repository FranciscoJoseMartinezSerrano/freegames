import { options, API_URL } from "./settings";

export default async function getGames(params = {}) {
  const { category, platform, id, search } = params;

  const keyword = id
    ? `?id=${id}`
    : category && platform
    ? `s?category=${category}&platform=${platform}&sort-by=popularity`
    : category || search
    ? `s?category=${category ? category : search}&sort-by=popularity`
    : platform
    ? `s?platform=${platform}&sort-by=popularity`
    : "s?sort-by=popularity";

  const apiURL = `${API_URL}${keyword}`;

  return fetch(apiURL, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
