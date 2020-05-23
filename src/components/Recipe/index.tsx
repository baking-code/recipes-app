import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header";
import firebase from "../../firebase";
import "./index.css";

function Recipe() {
  const [recipe, setRecipe] = useState<Recipe>({ name: "", id: "" });
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await firebase.database().ref(id).once("value");
      const found = data.val();
      console.log("AAAAH", id, found);
      setRecipe(found);
    })();
  }, [id]);
  const { name } = recipe;
  return (
    <div className="App">
      <Header header={name} />
      <main></main>
    </div>
  );
}

export default Recipe;
