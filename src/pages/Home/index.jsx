import React from "react";
import ListOfGames from "components/Games/ListOfGames";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | freeGames</title>
        <meta name="description" content="Home page freeGames" />
        <link rel="canonical" href={`https://freegames.vercel.app/`} />
      </Helmet>
      <ListOfGames />
    </>
  );
}
