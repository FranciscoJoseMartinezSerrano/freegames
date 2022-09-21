const API_KEY = process.env.REACT_APP_GAMES_API_KEY;

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const API_URL =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date";

export const GAMEID_API_URL =
  "https://free-to-play-games-database.p.rapidapi.com/api/game?id=";
