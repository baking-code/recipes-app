import React, { Component } from "react";
import { connect } from "react-redux";

import { Navbar, NavItem, Button, Row, Col, CardPanel } from "react-materialize";

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
        <br />
        <Row>
          <Col s={6} className='grid-example'>
            <CardPanel className="lime lighten-4 black-text">
              Search
            </CardPanel>
          </Col>
        </Row>


        <Button
          floating
          icon="mode_edit"
          className="lime lighten-1"
          large
          style={{bottom: "90px", right: "24px", position: "absolute"}}
          onClick={() => { console.log("Edit")}}
        />
        <Button
          floating
          icon="add"
          className="purple darken-1"
          large
          style={{bottom: "25px", right: "24px", position: "absolute"}}
          onClick={() => { console.log("Add")}}
        />
      </div>
    );
  }
}

const wrap = connect();
export default wrap(App);
