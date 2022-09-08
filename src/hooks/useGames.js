import { useState, useEffect, useContext } from "react";
import getGames from "services/getGames";
import GamesContext from "context/GamesContext";

const INITIAL_LIMIT = 1;

export default function useGames({ params }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_LIMIT);
  const { games, setGames } = useContext(GamesContext);
  const { id } = params || "";

  useEffect(() => {
    if (games.length) return;
    setLoading(true);
    getGames(params).then((games) => {
      setGames(games);
      setLoading(false);
    });
  }, [params, setGames, games.length]);

  useEffect(() => {
    if (page === INITIAL_LIMIT) return;
  }, [page]);

  return { loading, games, id, page, setPage };
}
