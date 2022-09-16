import React from "react";
import ListOfGames from "components/Games/ListOfGames";

export default function SearchResults({ params }) {
  const { category, platform } = params;
  
  return (
    <>
      {category ? <h2>Category: {category}</h2> : null}
      {platform ? <h2>Platform: {platform}</h2> : null}
      <ListOfGames params={params} />
    </>
  );
}
