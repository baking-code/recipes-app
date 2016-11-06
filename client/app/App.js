import React, { Component } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { primary } from "../components/constants/colours";

import "node_modules/roboto-npm-webfont/style.scss";

class App extends Component {

  render() {
    console.log("Rendered");
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
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  display: block;
  height: 64px;
  line-height: 64px;
  background-color: ${primary};
  margin-bottom: 20px
`;

const Title = styled(Link)`
  left: 50%;
  right: auto;
  position: absolute;
  font-size: xx-large;
  color: #FFF;
  text-decoration: none;
`;

export default App;
