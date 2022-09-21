import { useState, useEffect, useContext } from "react";
import getGames from "services/getGames";
import GamesContext from "context/GamesContext";

const INITIAL_LIMIT = 1;

export default function useGames() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(INITIAL_LIMIT);
  const { games, setGames } = useContext(GamesContext);

  useEffect(() => {
    if (games.length) return;
    setLoading(true);
    getGames()
      .then((games) => {
        setGames(games);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setIsError(true);
      });
  }, [setGames, games.length]);

  useEffect(() => {
    if (page === INITIAL_LIMIT) return;
  }, [page]);

  return { loading,setLoading, games, page, setPage, isError };
}
