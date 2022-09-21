import React from "react";
import ListOfGames from "components/Games/ListOfGames";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";

export default function SearchResults({ params }) {
  const { category, platform } = params;
  const [path] = useLocation();

  return (
    <>
      <Helmet>
        <title>
          Searching {category ? `${category}` : ""}{" "}
          {platform ? `${platform}` : ""} | freeGames
        </title>
        <meta
          name="description"
          content={`Results of ${category ? category : ""} ${
            platform ? platform : ""
          }`}
        />
        <link rel="canonical" href={`https://freegames.vercel.app${path}`} />
      </Helmet>
      {category ? <h2>Category: {category}</h2> : null}
      {platform ? <h2>Platform: {platform}</h2> : null}
      <ListOfGames params={params} />
    </>
  );
}
