import React from "react";
import { Link } from "wouter";

function Game({ game = {} }) {
  return (
    <section className="game">
      <Link to={`/game/${game.id}`}>
        <img loading="lazy" src={game.thumbnail} alt={game.title} />
      </Link>
      <article className="game-info">
        <Link to={`/game/${game.id}`}>
          <h4>{game.title}</h4>{" "}
        </Link>
        <p className="game-info-small">
          <small>
            {game.genre} - {game.platform}
          </small>
          <small>{game.release_date}</small>
        </p>
        <p>{game.short_description}</p>
      </article>
    </section>
  );
}

export default React.memo(Game, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
