import React, { useRef } from "react";
import { useLocation } from "wouter";

export default function SearchTitle() {
  const [, pushLocation] = useLocation();
  const inputRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = inputRef.current.value.toLowerCase();
    return value ? pushLocation(`/games/search/${value}`) : pushLocation("/");
  };

  return (
    <form onSubmit={handleSubmit} className="name-form">
      <input ref={inputRef} type="text" placeholder="Game title" required />
      <button>Search</button>
    </form>
  );
}
