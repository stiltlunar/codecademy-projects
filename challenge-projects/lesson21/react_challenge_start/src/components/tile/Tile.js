import React from "react";

export default function Tile({ item }) {
  const valueArr = Object.values(item)

  return (
    <div className="tile-container">
      {valueArr.map((element, i) => {
        if (i === 0) {
          return <p class='tile-title' key={i}>{element}</p>
        } else {
          return <p class='tile' key={i}>{element}</p>
        }
      })}
    </div>
  );
};
