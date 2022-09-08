import React from "react";
import ListOfGames from "components/Games/ListOfGames";
import useGames from "hooks/useGames";

export default function SearchResults({ params }) {
  const { setPage, page } = useGames({ params });

  const handleGameLimits = () => {
    return setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <ListOfGames page={page} params={params} />
      <button onClick={handleGameLimits}>Get more games</button>
    </>
  );
}
