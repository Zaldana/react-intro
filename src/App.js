//1. Get the picture to show up
//2. Get the abilities to show up
//3. HOW CAN YOU MAKE THIS DYNAMIC - YOU WILL NEED AN INPUT and a BUTTON

import React, { Component } from "react";
import axios from 'axios'
import "./App.css";

export class App extends Component {
  state = {
    abilities: "",
    pokemon: "ditto",
    image: ""
  };
  
  async componentDidMount() {
    try {

      let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`);

      const abilitiesArray = result.data.abilities;
      console.log("abilities array", abilitiesArray);
      const abilitiesFiltered = abilitiesArray.filter((item) => item.name )
      console.log("abilities filtered", abilitiesFiltered);

      this.setState({
        pokemon: result.data.name,
        image: result.data.sprites.front_default,
        // abilitiesArray: result.data.abilities
      });

      console.log(this.state);

    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = (event) => {
    this.setState(
      {
        [event.target.pokemon]: event.target.value,
      }
    );
  };

  // handleShowAbilitiesArray = () => (
  //   <ul>
  //     {this.state.abilitiesArray.map(({ name }) => (
  //       <li key={id}>
  //         {body} <button onClick={() => this.handleDelete(id)}>Delete</button>
  //       </li>
  //     ))}
  //   </ul>
  // );
  

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
          <hr />
          <div>
            <h1>{this.state.pokemon}</h1>
            <img src={this.state.image} />
            {/* {this.state.abilitiesArray.ability} */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;