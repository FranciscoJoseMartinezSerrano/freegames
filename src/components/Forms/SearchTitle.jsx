import React, { useRef } from "react";
import { useLocation } from "wouter";

export default function SearchTitle() {
  const [, pushLocation] = useLocation();
  const inputRef = useRef();

  const handleChange = (evt) => {
    evt.preventDefault();
    const value = inputRef.current.value.toLowerCase();
    return value ? pushLocation(`/games/search/${value}`) : pushLocation("/");
  };

  return (
    <form onSubmit={handleChange} className="name-form">
      <input
        onChange={handleChange}
        ref={inputRef}
        type="text"
        placeholder="Game title"
        required
      />
    </form>
  );
}
