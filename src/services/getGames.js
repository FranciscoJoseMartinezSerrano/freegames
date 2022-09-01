const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "5682ccbd40mshd149987dda1820ep18b672jsnc841f27cafb3",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export default async function getGames({
  keyword = "s?sort-by=release-date",
} = {}) {

  const apiURL = `https://free-to-play-games-database.p.rapidapi.com/api/game${keyword}`;

  try {
    const response = await fetch(apiURL, options);
    const response_1 = await response.json();
    return response_1;
  } catch (err) {
    return console.error(err);
  }
}
