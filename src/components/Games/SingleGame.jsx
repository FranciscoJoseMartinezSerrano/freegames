import React from "react";
import { Link } from "wouter";
import Spinner from "../Spinner/Spinner";
import Games from "./Elements/Games";
import useGamesFilter from "hooks/useGamesFilter";
import useGames from "hooks/useGames";

export default function SingleGame({ params }) {
  const { game } = useGamesFilter({ params });
  const { loading } = useGames();

  return (
    <>
      <Link to="/">Home</Link>
      <section className="game-page">
        {loading ? <Spinner /> : <Games games={game} />}
      </section>
    </>
  );
}
