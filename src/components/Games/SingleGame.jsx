import React from "react";
import { Link } from "wouter";
import useGames from "hooks/useGames";
import useGlobalGames from "hooks/useGlobalGames";
import Spinner from "../Spinner/Spinner";
import Game from "./Elements/Game";
import Games from "./Elements/Games";

export default function SingleGame({ params }) {
  const { loading } = useGames({ params });

  const games = useGlobalGames();
  if (Array.isArray(games) && games.length) {
    const id = parseInt(params.id);
    const game = games.filter(({ id: gameID }) => gameID === id);
    return (
      <>
        <Link to="/">Home</Link>
        <section className="game-page">
          <Games games={game} />
        </section>
      </>
    );
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Link to="/">Home</Link>
          <section className="game-page">
            <Game
              key={games.id}
              title={games.title}
              thumbnail={
                games.screenshots ? games.screenshots[0].image : games.thumbnail
              }
              id={games.id}
              release_date={games.release_date}
              short_description={games.short_description}
              genre={games.genre}
              platform={games.platform}
            />
          </section>
        </div>
      )}
    </>
  );
}
