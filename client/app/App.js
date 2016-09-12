import React, { Component } from "react";

import { Navbar } from "react-materialize";

import "./App.scss";

class App extends Component {

  render() {
    console.log("Rendered");
    return (
      <div>
        <Navbar
          brand="Recipes"
          right
          className="purple darken-1"
        />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
