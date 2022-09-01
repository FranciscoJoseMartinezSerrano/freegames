import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import getGames from "../../services/getGames";
import Game from "./Game";
import "./Game.css";

export default function SingleGame({ params }) {
  const [game, setGame] = useState({});
  const { id } = params;
  const keyword = `?id=${id}`;

  useEffect(() => {
    getGames({ keyword }).then((game) => setGame(game));
  }, [keyword]);

  return (
    <>
      <Link to="/">Home</Link>
      <section className="game-page">
        <Game
          key={id}
          title={game.title}
          thumbnail={game.thumbnail}
          id={id}
          release_date={game.release_date}
          short_description={game.short_description}
          genre={game.genre}
          platform={game.platform}
        />
      </section>
    </>
  );
}
