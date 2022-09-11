import React from "react";
import "./Game.css";
import Spinner from "../Spinner/Spinner";
import Games from "./Elements/Games";
import useGamesFilter from "hooks/useGamesFilter";
import useGames from "hooks/useGames";

export default function ListOfGames({
  params = {},
  page = 1,
  search = undefined,
}) {
  const { games, gamesFiltered } = useGamesFilter({ params });
  const { loading } = useGames();

  if (search !== undefined) {
    return (
      <div className="list-games">
        <Games games={search} />
      </div>
    );
  }

  const gamesToReturn =
    games !== undefined ? (
      <Games games={games} />
    ) : (
      <Games games={gamesFiltered} page={page} />
    );

  return (
    <>
      <div className="list-games">
        {loading ? (
          <Spinner />
        ) : games || gamesFiltered.length ? (
          gamesToReturn
        ) : (
          <h2>Game not found</h2>
        )}
      </div>
    </>
  );
}
