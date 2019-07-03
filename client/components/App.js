import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router";
import styled from "styled-components";
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
font-size: 64px;
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
          <Switch>
            <Route path="/recipes" exact component={Main} />
            <Route path="/edit" exact component={Recipe} />
            <Redirect from="*" to="/recipes" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
