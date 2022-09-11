import "App.css";
import Nav from "components/Header/Nav";
import Router from "routes/Router";
import { GamesContextProvider } from "context/GamesContext";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GamesContextProvider>
          <header id="header">
            <Nav />
          </header>
          <section id="container">
            <Router />
          </section>
        </GamesContextProvider>
      </section>
    </div>
  );
}

export default App;
