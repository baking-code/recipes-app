import React, { Component } from "react";
import { Link } from "react-router";
import styled from "styled-components";

import "node_modules/roboto-npm-webfont/style.scss";
import { primary } from "./constants/colours";

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
  background-color: rgba(142, 36, 170, 0.4);
  margin-bottom: 20px;
`;

const Title = styled(Link)`
  font-size: 3em;
  color: #FFF;
  text-decoration: none;
  width: 200px;
  margin: 0 auto;
  display: block;
`;

export default App;
