import React, { useEffect, useState } from "react";
import { useFirebase, FirebaseTypes } from "./firebase";
import "./App.css";
export interface Props {
  firebase: FirebaseTypes;
}
function App({ firebase }: Props) {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    const getRecipes = async () => {
      const data = await firebase.once("value");
      setRecipes(data);
    };
    getRecipes();
  });
  const content = Object.values(recipes).length ? (
    <p>{JSON.stringify(recipes)}</p>
  ) : (
    <p>Loading</p>
  );
  return (
    <div className="App">
      <header className="App-header">Recipeasy</header>
      <main>{content}</main>
    </div>
  );
}

export default useFirebase(App);
