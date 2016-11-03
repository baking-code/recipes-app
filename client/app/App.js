import React, { Component } from "react";
import { Link } from "react-router";
import "node_modules/roboto-npm-webfont/style.scss";



import "./App.scss";

class App extends Component {

  render() {
    console.log("Rendered");
    return (
      <div>
        <nav className="App" style={{ backgroundColor: "#8E24AA" }}>
          <div>
            <Link to={"/recipes"} className="App__title">Recipes</Link>
          </div>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
