import React from "react";
import Tile from "../tile/Tile";

export default function TileList({ arr }) {
  return (
    <>
      {arr.map((item, i) => {
        return <Tile item={item} key={i} />
      })}
    </>
  );
};
