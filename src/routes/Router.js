import React from "react";
import { Route } from "wouter";
import Home from "pages/Home";
import Detail from "pages/Detail";
import SearchResults from "pages/SearchResults";
import SearchName from "pages/SearchName";
import Error from "pages/Error";
import About from "pages/About";

export default function Router() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/games" component={Home} />
      <Route path="/404" component={Error} />
      <Route path="/freegames/about" component={About} />
      <Route path="/game/:id" component={Detail} />
      <Route
        path="/games/category/:category/:platform?"
        component={SearchResults}
      />
      <Route
        path="/games/platform/:platform/:category?"
        component={SearchResults}
      />
      <Route path="/games/search/:titleResults" component={SearchName} />
    </>
  );
}
