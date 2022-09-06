import { useContext } from "react";
import GamesContext from "../context/GamesContext";

export default function useGlobalGames() {
  const { games } = useContext(GamesContext);
  return games;
}
