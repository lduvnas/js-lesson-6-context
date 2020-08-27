import React from "react";
import GreatGrandChild from "./GreatGrandChild";

export default function GrandChild() {
  return (
    <div>
      <p>
        Grand child - <small>{}</small>
      </p>
      <GreatGrandChild />
    </div>
  );
}
