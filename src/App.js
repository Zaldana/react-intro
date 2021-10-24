import React, { Component } from "react";
import axios from 'axios'
import "./App.css";

export class App extends Component {
  state = {
    pokemon: "ditto",
    abilities: "",
    image: "",
  };

  handleInputChange = (event) => {

    this.setState(
      //'name' and value is coming from input
      {
        [event.target.name]: event.target.value,
      }
    );
  };

  

  //second
  render() {
    return (
      <div className="App">
        <div>
          <input
            name="pokemon"
            value={this.state.pokemon}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleInputSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default App;