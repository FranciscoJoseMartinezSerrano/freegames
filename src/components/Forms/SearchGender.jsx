import React from "react";
import SelectForm from "./Elements/SelectForm";
import { useLocation } from "wouter";

const genderArray = [
  "All Genres",
  "Shooter",
  "Strategy",
  "Moba",
  "MMO",
  "MMORPG",
];

export default function SearchGender() {
  const [, pushLocation] = useLocation();

  const handleSelectChange = (evt) => {
    const { value } = evt.target;
    return value ? pushLocation(`/games/category/${value}`) : pushLocation("/");
  };

  return (
    <form className="form-gender">
      <SelectForm arr={genderArray} func={handleSelectChange} />
    </form>
  );
}
