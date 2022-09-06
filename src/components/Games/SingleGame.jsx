import React from "react";
import { Link } from "wouter";
import useGames from "../../hooks/useGames";
import useGlobalGames from "../../hooks/useGlobalGames";
import Spinner from "../Spinner/Spinner";
import Game from "./Elements/Game";
import "./Game.css";

export default function SingleGame({ params }) {
  const { loading } = useGames({ params });

  const game = useGlobalGames();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Link to="/">Home</Link>
          <section className="game-page">
            <Game
              key={game.id}
              title={game.title}
              thumbnail={game.thumbnail}
              id={game.id}
              release_date={game.release_date}
              short_description={game.short_description}
              genre={game.genre}
              platform={game.platform}
            />
          </section>
        </div>
      )}
    </>
  );
}
