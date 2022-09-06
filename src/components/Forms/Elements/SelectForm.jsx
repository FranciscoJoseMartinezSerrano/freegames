import React from "react";

export default function SelectForm({ arr, func }) {
  return (
    <select onChange={func} name="dropdown" className="search-select">
      {arr.map((el) => {
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
