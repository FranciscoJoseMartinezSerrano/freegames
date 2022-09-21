import "./App.css";
import Nav from "./components/Nav/Nav";
import Router from "routes/Router";
import { GamesContextProvider } from "context/GamesContext";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <header id="header">
          <Nav />
        </header>
        <section id="container">
          <GamesContextProvider>
            <Router />
          </GamesContextProvider>
        </section>
      </section>
    </div>
  );
}

export default App;
