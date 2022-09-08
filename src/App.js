import "App.css";
import { Route } from "wouter";
import ListOfGames from "components/Games/ListOfGames";
import Home from "pages/Home";
import Detail from "pages/Detail";
import SearchResults from "pages/SearchResults";
import SearchForm from "components/Forms/SearchForm";
import { GamesContextProvider } from "context/GamesContext";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <header>
          <SearchForm />
        </header>
        <GamesContextProvider>
          <Route path="/" component={Home} />
          <Route path="/game/:id" component={Detail} />
          <Route
            path="/games/category/:category/:platform?"
            component={ListOfGames}
          />
          <Route
            path="/games/platform/:platform/:category?"
            component={ListOfGames}
          />
          <Route path="/search/:search?" component={SearchResults} />
        </GamesContextProvider>
      </section>
    </div>
  );
}

export default App;
