import { useState, useEffect } from "react";
import getGame from "services/getGame";

export default function useGame({ id }) {
  const [isError, setIsError] = useState(false);
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (game.id !== parseInt(id)) {
      setLoading(true);
      getGame({ id })
        .then((data) => {
          setGame(data);
          setLoading(false);
        })
        .catch((err) => {
          setIsError(true);
          console.error(err);
        });
    }
  }, [game.id, id]);

  return { game, loading, isError };
}
