import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPokemon from "./components/MainPokemon/MainPokemon";
import MainPokemonDetail from "./components/MainPokemon/MainPokemonDetail";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/fetch-pokemon/:name"
              component={MainPokemonDetail}
            />
            <Route exact path="/" component={MainPokemon} />
            <Route render={() => <h1>Not found 404</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;