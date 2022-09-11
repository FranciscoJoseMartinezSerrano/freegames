import React from "react";
import useGamesFilter from "hooks/useGamesFilter";
import ListOfGames from "components/Games/ListOfGames";

export default function SearchName({ params }) {
  const { results } = params;
  const { games } = useGamesFilter({});

  const filterSearch = games.length
    ? games.filter((game) => {
        const gameTitle = game.title.toLowerCase();
        return gameTitle.includes(results.toLowerCase());
      })
    : undefined;

  return (
    <>
      {filterSearch.length ? (
        <ListOfGames search={filterSearch} />
      ) : (
        <h2>Not game found</h2>
      )}
    </>
  );
}
