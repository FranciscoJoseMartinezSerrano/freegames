import React from "react";
import { useLocation } from "wouter";
import SelectForm from "./Elements/SelectForm";

const genderArray = [
  "All Genres",
  "Shooter",
  "Strategy",
  "Moba",
  "MMO",
  "MMORPG",
];

export default function SearchForm() {
  const [, pushLocation] = useLocation();

  const handleChange = (evt) => {
    const { value } = evt.target;
    pushLocation(`/search/${value}`);
  };

  return (
    <form className="search-form">
      <SelectForm arr={genderArray} func={handleChange} />
    </form>
  );
}
