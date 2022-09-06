import React from "react";
import Game from "./Game";

export default function Games({ games }) {
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
        if (index < 10) {
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
