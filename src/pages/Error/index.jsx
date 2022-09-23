import React from "react";
import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <>
      <Helmet>
        <title>Error | freeGames</title>
        <meta name="description" content="Error page" />
        <link rel="canonical" href={`https://freegames.vercel.app/404`} />
      </Helmet>
      <div>
        <h1>Error 404</h1>
        <h4>Page not found</h4>
      </div>
    </>
  );
}
