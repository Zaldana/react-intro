import React, { Component } from "react";
import "./App.css";
import "./components/common/Loading"
import "./components/pokemon/Pokemon"
import Pokemon from "./components/pokemon/Pokemon";

//export
export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Pokemon />
      </div>
    );
  }
}

export default App;

