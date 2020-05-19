import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import List from "./components/List";
import Recipe from "./components/Recipe";
import ThemeProvider from "./theme";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const config = {
  apiKey: "AIzaSyAP4jPCm2k95KUBf0tEznvoZ0SE4EAo_o8",
  authDomain: "recipesapp-3d38b.firebaseapp.com",
  databaseURL: "https://recipesapp-3d38b.firebaseio.com",
  projectId: "recipesapp-3d38b",
  storageBucket: "recipesapp-3d38b.appspot.com",
  messagingSenderId: "279594077217",
};
firebase.initializeApp(config);
const ref = firebase.database().ref();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/:id/:edit" element={<Recipe />} />
          <Route path="/" element={<List />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
