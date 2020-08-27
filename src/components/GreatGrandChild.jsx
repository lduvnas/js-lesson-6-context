import React from "react";
import { useContext } from "react";
import { TitleContext } from "../contexts/TitleContext";

export default function GreatGrandChild() {
  const { title, setTitle } = useContext(TitleContext);
  return (
    <div>
      <p>
        Great Grand child - <small>{title}</small>
      </p>
      <button onClick={() => setTitle("hej")}>Ändra title</button>
    </div>
  );
}
