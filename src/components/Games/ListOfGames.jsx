import React, { useEffect, useState } from "react";
import Game from "./Game";
import getGames from "../../services/getGames";
import "./Game.css";

export default function ListOfGames({ params }) {
  const { category, platform } = params;
  const keyword =
    category && platform
      ? `s?category=${category}&platform=${platform}&sort-by=release-date`
      : category
      ? `s?category=${category}&sort-by=release-date`
      : platform
      ? `s?platform=${platform}&sort-by=release-date`
      : "s";

  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState({loading:false,results:[]});

  useEffect(() => {
    setLoading(true);
    getGames({ keyword }).then((games) => {
      setGames(games);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) return <i>Loading</i>;

  return (
    <div className="list-games">
      {Array.isArray(games) ? (
        games.map(
          (
            {
              id,
              thumbnail,
              title,
              release_date,
              short_description,
              genre,
              platform,
            },
            index
          ) => {
            if (index < 20) {
              return (
                <Game
                  key={id}
                  title={title}
                  thumbnail={thumbnail}
                  id={id}
                  release_date={release_date}
                  short_description={short_description}
                  genre={genre}
                  platform={platform}
                />
              );
            }
            return null;
          }
        )
      ) : (
        <h2>Something went wrong</h2>
      )}
    </div>
  );
}
