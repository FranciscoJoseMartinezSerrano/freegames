import React from "react";
import "./Game.css";
import Spinner from "../Spinner/Spinner";
import useGames from "../../hooks/useGames";
import Games from "./Elements/Games";
import useGlobalGames from "../../hooks/useGlobalGames";

export default function ListOfGames({ params }) {
  const { loading } = useGames({ params });
  const games = useGlobalGames();

  return (
    <div className="list-games">
      {loading ? <Spinner /> : <Games games={games} />}
    </div>
  );
}
