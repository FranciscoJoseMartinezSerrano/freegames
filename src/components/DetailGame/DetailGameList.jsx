import React from "react";

export default function DetailGameList({ item }) {
  const systemRequirements = Object.entries(item);
  return (
    <ul>
      {systemRequirements.map((el) => (
        <li key={el[0]}>
          {el[0]}: {el[1]}
        </li>
      ))}
    </ul>
  );
}
