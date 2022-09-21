import React from "react";
import { Helmet } from "react-helmet";

export default function useSEO({ pageTitle }) {
  return (
    <>
      <Helmet>
        <title>{pageTitle} | freeGames</title>
      </Helmet>
    </>
  );
}
