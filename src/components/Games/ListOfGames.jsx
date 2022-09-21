import "./Game.css";
import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { Redirect } from "wouter";
import debounce from "just-debounce-it";
import Spinner from "../Spinner/Spinner";
import Games from "./Elements/Games";
import useGames from "hooks/useGames";
import useNearScreen from "hooks/useNearScreen";

export default function ListOfGames({ params, gamesByTitle }) {
  const { page, setPage, loading, isError } = useGames();
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useMemo(
    () =>
      debounce(() => {
        return setPage((prevPage) => prevPage + 1);
      }, 200),
    [setPage]
  );

  const handleNextPage = useCallback(
    () => debounceHandleNextPage(),
    [debounceHandleNextPage]
  );

  useEffect(() => {
    if (isNearScreen) handleNextPage();
  }, [isNearScreen, handleNextPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(1);
  }, [params, setPage]);
  
  if (isError) return <Redirect to="/404" />;

  return (
    <>
      <div className="list-games">
        {loading ? (
          <Spinner />
        ) : (
          <Games params={params} page={page} gamesByTitle={gamesByTitle} />
        )}
      </div>
      <div id="visor" ref={externalRef} />
    </>
  );
}
