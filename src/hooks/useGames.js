import { useState, useEffect, useContext } from "react";
import getGames from "../services/getGames";
import GamesContext from "../context/GamesContext";

export default function useGames({ params }) {
  const [loading, setLoading] = useState(false);
  const { games, setGames } = useContext(GamesContext);
  const { id } = params || "";

  useEffect(() => {
    setLoading(true);
    getGames(params).then((games) => {
      setGames(games);
      setLoading(false);
    });
  }, [params, setGames]);

  return { loading, games, id };
}
