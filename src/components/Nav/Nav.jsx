import "./Nav.css";
import SearchGender from "components/Forms/SearchGender";
import SearchTitle from "components/Forms/SearchTitle";
import React from "react";
import { Link } from "wouter";

export default function Nav() {
  return (
    <nav className="nav">
      <section className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
      </section>
      <SearchTitle />
      <SearchGender />
    </nav>
  );
}
