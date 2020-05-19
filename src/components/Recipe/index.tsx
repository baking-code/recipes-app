import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../firebase";
import "./index.css";

function Recipe() {
  const [recipe, setRecipe] = useState<Recipe>({ name: "", id: "" });
  const { id } = useParams();
  debugger;
  useEffect(() => {
    (async () => {
      const data = await firebase.database().ref(id).once("value");
      setRecipe(data.val());
    })();
  }, [id]);
  const { name } = recipe;
  return (
    <div className="App">
      <header className="App-header">{name}</header>
      <main></main>
    </div>
  );
}

export default Recipe;
