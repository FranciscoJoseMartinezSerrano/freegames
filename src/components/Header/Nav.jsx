import SearchGender from "components/Forms/SearchGender";
import SearchTitle from "components/Forms/SearchTitle";
import React from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <section className="form-name">
        <SearchTitle />
      </section>
      <section className="form-gender">
        <SearchGender />
      </section>
    </nav>
  );
}
