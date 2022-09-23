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
      {category ? <h4>Category: {category}</h4> : null}
      {platform ? <h4>Platform: {platform}</h4> : null}
      <ListOfGames params={params} />
    </>
  );
}
