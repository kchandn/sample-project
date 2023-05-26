import { useState } from "react";

function FavColour() {
  const [colour, setColour] = useState("Red");
  return (
    <>
      <h1>My Fav colur is {colour}</h1>
      <button onClick={() => setColour("Green")}>Set Fav Colur</button>
    </>
  );
}

export default FavColour;
