import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Route } from "react-router";
import styled from "styled-components";
import "node_modules/roboto-npm-webfont/style.scss";
import Main from "./Main";
import Recipe from "./Recipe";

import { primary, white } from "./constants/colours";

import "./styles/app.scss";

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
class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Title to={"/recipes"}>Recipes</Title>
        </Nav>
        <main>
          <Route path="/recipes" component={Main} />
          <Route path="/edit" component={Recipe} />
          <Redirect from="*" to="/recipes" />
        </main>
      </div>
    );
  }
}

export default App;
