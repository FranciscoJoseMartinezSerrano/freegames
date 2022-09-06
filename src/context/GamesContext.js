import React, { useState } from "react";

const GamesContext = React.createContext({});

export function GamesContextProvider({ children }) {
  const [games, setGames] = useState([]);

  return (
    <GamesContext.Provider value={{games, setGames}}>{children}</GamesContext.Provider>
  );
}

export default GamesContext;
