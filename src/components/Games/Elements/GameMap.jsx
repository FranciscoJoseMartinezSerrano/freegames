import React from "react";

import Game from "./Game";

function GameMap({ games, limit = 10, page = 1 }) {
  return Array.isArray(games) && games.length ? (
    games.map((game, index) => {
      if (index < limit * page) {
        return <Game game={game} key={game.id} />;
      }
      return null;
    })
  ) : (
    <h2>Something went wrong</h2>
  );
}

export default React.memo(GameMap);
