import React from "react";
import useGamesFilter from "hooks/useGamesFilter";
import GameMap from "./GameMap";

function Games({ params, page, gamesByTitle = undefined }) {
  const { games, gamesFiltered } = useGamesFilter({ params });

  if (gamesByTitle) {
    return <GameMap games={gamesByTitle} page={page} />;
  }

  const gamesToReturn = (
    <GameMap games={games !== undefined ? games : gamesFiltered} page={page} />
  );

  return (
    <>
      {games || gamesFiltered.length ? (
        gamesToReturn
      ) : (
        <h2>No results found</h2>
      )}
    </>
  );
}

export default React.memo(Games);
