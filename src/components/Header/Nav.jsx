import SearchGender from "components/Forms/SearchGender";
import SearchTitle from "components/Forms/SearchTitle";
import React from "react";
import { Link } from "wouter";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <section className="form-name">
        <SearchTitle />
      </section>
      <section className="form-gender">
        <SearchGender />
      </section>
    </nav>
  );
}
