import React, { Component } from "react";

import "./App.scss";

class App extends Component {

  render() {
    console.log("Rendered");
    return (
      <div>
        <nav className="App" style={{ backgroundColor: "#8E24AA" }}>
          <div>
            <a href="/recipes" className="App__title">Recipes</a>
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
