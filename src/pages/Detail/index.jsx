import React, { useEffect } from "react";
import useGame from "hooks/useGame";
import Spinner from "components/Spinner/Spinner";
import { Redirect } from "wouter";
import DetailGame from "components/DetailGame/DetailGame";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { game, loading, isError } = useGame({ id: params.id });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;

  if (!game.id) return null;

  return (
    <>
      <Helmet>
        <title>{game.title} | freeGames</title>
        <meta name="description" content={game.title + " detail"} />
        <link
          rel="canonical"
          href={`https://freegames.vercel.app/game/${game.id}`}
        />
      </Helmet>
      <DetailGame game={game} />
    </>
  );
}

// Hacer un slide con screenshots y meter mas info
