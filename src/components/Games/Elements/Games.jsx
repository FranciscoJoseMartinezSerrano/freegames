import React from "react";
import Game from "./Game";

export default function Games({ games, limit = 12, page = 1 }) {
  return Array.isArray(games) ? (
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
        if (index < limit * page) {
          return (
            <Game
              key={id ? id : index}
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
  );
}
