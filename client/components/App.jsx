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
  height: 64px;
  line-height: 64px;
  background-color: rgba(142, 36, 170, 0.4);
  margin-bottom: 20px;
`;

const Title = styled(Link)`
  font-size: xx-large;
  color: #FFF;
  text-decoration: none;
  width: 120px;
  margin: 0 auto;
  display: block;
`;

export default App;
