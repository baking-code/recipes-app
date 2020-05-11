import React, { useEffect, useState } from "react";
import { useFirebase, FirebaseTypes } from "./firebase";
import List from "./components/List";
import "./App.css";
export interface Props {
  firebase: FirebaseTypes;
}
function App({ firebase }: Props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await firebase.once("value");
      setRecipes(Object.values(data.val()));
    })();
  }, [firebase]);
  const content = recipes.length ? <List items={recipes} /> : <p>Loading</p>;
  return (
    <div className="App">
      <header className="App-header">Recipeasy</header>
      <main>{content}</main>
    </div>
  );
}

export default useFirebase(App);
