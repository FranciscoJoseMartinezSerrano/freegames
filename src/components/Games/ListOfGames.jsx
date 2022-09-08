import React from "react";
import "./Game.css";
import Spinner from "../Spinner/Spinner";
import useGames from "hooks/useGames";
import Games from "./Elements/Games";
import useGlobalGames from "hooks/useGlobalGames";

export default function ListOfGames({ params, page = 1 }) {
  const { loading } = useGames({ params });

  const games = useGlobalGames();

  if (params !== undefined) {
    const { search, platform, category } = params;
    const platformComparer = platform === "pc" ? "PC (Windows)" : "Web Browser";

    const gamesFiltered = games.filter((gameFilter) =>
      (search || category) !== undefined
        ? gameFilter.genre.toLowerCase() === search ||
          gameFilter.genre.toLowerCase() === category
        : gameFilter.platform === platformComparer
    );

    return gamesFiltered.length ? (
      <div className="list-games">
        {loading ? <Spinner /> : <Games games={gamesFiltered} page={page} />}
      </div>
    ) : (
      <h2>Not games found</h2>
    );
  }

  return (
    <>
      <div className="list-games">
        {loading ? <Spinner /> : <Games games={games} />}
      </div>
    </>
  );
}
