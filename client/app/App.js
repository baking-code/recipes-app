import React, { Component } from "react";

import { Navbar } from "react-materialize";

import "./App.scss";

class App extends Component {

  render() {
    console.log("Rendered");
    return (
      <div>
        <nav>
          <div className="nav-wrapper purple darken-1">
            <a href="/recipes" className="brand-logo">Recipes</a>
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
