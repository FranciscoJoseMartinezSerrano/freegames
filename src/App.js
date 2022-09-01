import "./App.css";
import ListOfGames from "./components/Games/ListOfGames";
import { Route } from "wouter";
import SingleGame from "./components/Games/SingleGame";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path="/" component={ListOfGames} />
        <Route path="/game/:id" component={SingleGame} />
        <Route path="/games/category/:category" component={ListOfGames} />
        <Route path="/games/platform/:platform" component={ListOfGames} />
      </section>
    </div>
  );
}

export default App;
