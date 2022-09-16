import React from "react";
import { Route } from "wouter";
import Home from "pages/Home";
import Detail from "pages/Detail";
import SearchGender from "pages/SearchResults/SearchGender";
import SearchName from "pages/SearchResults/SearchName";


export default function Router() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/game/:id" component={Detail} />
      <Route path="/games" component={Home} />
      <Route
        path="/games/category/:category/:platform?"
        component={SearchGender}
      />
      <Route
        path="/games/platform/:platform/:category?"
        component={SearchGender}
      />
      <Route path="/games/search/:titleResults" component={SearchName} />
    </>
  );
}
