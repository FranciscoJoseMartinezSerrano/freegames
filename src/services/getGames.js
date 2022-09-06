const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "5682ccbd40mshd149987dda1820ep18b672jsnc841f27cafb3",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export default async function getGames(params = {}) {
  const { category, platform, id, search } = params;

  const keyword = id
    ? `?id=${id}`
    : category && platform
    ? `s?category=${category}&platform=${platform}&sort-by=release-date`
    : category || search
    ? `s?category=${category ? category : search}&sort-by=release-date`
    : platform
    ? `s?platform=${platform}&sort-by=release-date`
    : "s?sort-by=release-date";

  const apiURL = `https://free-to-play-games-database.p.rapidapi.com/api/game${keyword}`;

  try {
    const response = await fetch(apiURL, options);
    const response_1 = await response.json();
    return response_1;
  } catch (err) {
    return console.error(err);
  }
}
