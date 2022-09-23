import React from "react";

const genderArray = [
  "All Genres",
  "Shooter",
  "Strategy",
  "Moba",
  "MMO",
  "MMORPG",
  "Fighting",
  "Sports",
  "Social",
  "Racing",
];


export default function SelectForm({  func }) {
  return (
    <select onChange={func} name="dropdown" className="search-select">
      <option disabled>Genre/Tag</option>
      {genderArray.map((el) => {
        const element = el.toLowerCase();
        return element === "all genres" ? (
          <option key={el} defaultValue="" value="">
            All Genres
          </option>
        ) : (
          <option key={el} defaultValue={element} value={element}>
            {el}
          </option>
        );
      })}
    </select>
  );
}
