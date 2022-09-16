import React from "react";
import useGamesFilter from "hooks/useGamesFilter";
import ListOfGames from "components/Games/ListOfGames";

export default function SearchName({ params }) {
  const { titleResults } = params;
  const { games } = useGamesFilter({});

  const title = decodeURI(titleResults);
  const filterSearch = games.length
    ? games.filter((game) => {
        const gameTitle = game.title
          .toLowerCase()
          .replace(/[^a-zA-Z0-9 ]/g, "");
        return gameTitle.includes(
          title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "")
        );
      })
    : [];

  return (
    <>
      <h4>Searching: "{title}"</h4>
      {filterSearch.length ? (
        <ListOfGames gamesByTitle={filterSearch} />
      ) : (
        <>
          <h3>Game not found!</h3>
          <ListOfGames gamesByTitle={games} />
        </>
      )}
    </>
  );
}
