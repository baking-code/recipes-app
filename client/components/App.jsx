import React, { Component } from "react";
import { Link } from "react-router";
import styled from "styled-components";

import "node_modules/roboto-npm-webfont/style.scss";
import { primary, white } from "./constants/colours";

import "./styles/app.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Title to={"/recipes"}>Recipes</Title>
        </Nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

const Nav = styled.nav`
  display: block;
  height: 88px;
  line-height: 88px;
  background-color: ${primary};
  margin-bottom: 20px;
`;

const Title = styled(Link)`
  font-size: 3em;
  color: ${white};
  text-decoration: none;
  width: 200px;
  margin: 0 auto;
  display: block;
`;

export default App;
