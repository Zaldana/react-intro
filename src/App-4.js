//1. Get the picture to show up
//2. Get the abilities to show up
//3. HOW CAN YOU MAKE THIS DYNAMIC - YOU WILL NEED AN INPUT and a BUTTON

//CLASS ANSWER

//import
import React, { Component } from "react";
import axios from "axios";
import "./App.css";

//export
export class App extends Component {
  
  //state including search, initial search, loading and error
  state = {
    name: "",
    picture: "",
    abilitiesArray: [],
    search: "",
    initialSearch: "pikachu",
    isError: false,
    errorMessage: "",
    isLoading: false,
  };

  //initial api search on load calling the async fetchPokemon function
  async componentDidMount() {
    this.fetchPokemonApi(this.state.initialSearch);
  }

//fetchPokemon fuction that includes passing a 'search' paramater to reuse
  fetchPokemonApi = async (search) => {
    
    //setting the state loading is true before api get
    this.setState({
      isLoading: true,
    });

    //api GET passing 'search' parameter at the end of the url
    try {
      let result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );

      //setting the state with the results of the api 'GET' and error and loading states
      this.setState({
        name: result.data.name,
        picture: result.data.sprites.front_default,
        abilitiesArray: result.data.abilities,
        isError: false,
        errorMessage: "",
        isLoading: false,
      });

      //Error catch with'e.response' to get full error message response in console
    } catch (e) {
     
      console.log(e.response);
      
      //if 'e.response.status = 404 change state to display error
      if (e && e.response.status === 404) {
        this.setState({
          isError: true,
          errorMessage: e.response.data,
          isLoading: false,
        });
      }
    }
  };

  //e = event, on event change pass store new value using the synthetic event target
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //on click call the API function passing through the searh value in the function
  handleOnClick = async () => {
    this.fetchPokemonApi(this.state.search);
  };


  render() {
    return (
      <div className="App">
        <div>

          {/* no form input, search event listener */}
          <input
            name="search"
            value={this.state.search}
            onChange={this.handleOnChange}
          />
          {/* button to call click function */}
          <button onClick={this.handleOnClick}>Search</button>
          {/* shorthand ternary same as:
            {this.state.isError ? <span>{this.state.errorMessage}</span> : ""}
            if error is not empty in state display error in div
          */}
          <div>
            {this.state.isError && <span>{this.state.errorMessage}</span>}
          </div>
        </div>
        <hr />

        {/* if loading is true display loading div else */}
        {this.state.isLoading ? (
          <div>...Loading</div>
        ) : (
            // display name, picture and abilities
          <div>
            <div>name: {this.state.name}</div>
            <div>
              picture: <img src={this.state.picture} alt="pokemon" />
            </div>
            <div>
                <ul>
                {/* map the ability object array 2 levels down to get to the name of the ability and the index */}
                {this.state.abilitiesArray.map(
                  ({ ability: { name } }, index) => {
                    return (
                      // return the index + 1 and the name of the ability
                      <li key={name}>
                        Abilitiy {index + 1}: {name}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

//MY ATTEMPT
// import React, { Component } from "react";
// import axios from 'axios'
// import "./App.css";

// export class App extends Component {
//   state = {
//     abilities: [],
//     pokemon: "",
//     image: ""
//   };
  
//   apiSearch = async () => {
    
//     try {

//       let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`);

//       this.setState({
//         image: result.data.sprites.front_default,
//         abilities: result.data.abilities
//       });

//       console.log("state", this.state);

//     } catch (e) {
//       console.log(e);
//     }
//   }

//   handleInputChange = (event) => {

//       this.setState({
//         pokemon: event.target.value,
//       });
//     console.log("state", this.state);
//   };

//   handleShowAbilitiesArray = () => (
//     <ul>
//       {this.state.abilities.map((item, index) => {
//         return <li key={index}>{item.ability.name}</li>
//       })}
//     </ul>
//   )
  

//   showAnimalList = () => {
//     return (
//       <ul>
//         {this.state.list.map(({ item, id }) => {
//           console.log(item);
//           return <li key={id}>{item}</li>;
//         })}
//       </ul>
//     );
//   };
  
//   //JSX Section
//   //second
//   render() {
//     return (
//       <div className="App">
//         <div>
//           <input
//             name="pokemon"
//             value={this.state.pokemon}
//             onChange={this.handleInputChange}
//           />
//           <button onClick={this.apiSearch}>Search</button>
//           <hr />
//           <div>
//             <h1>Name: {this.state.pokemon}</h1>
//             <img src={this.state.image} />
//             {this.handleShowAbilitiesArray()}
//           </div >
//         </div >
//       </div>
//     );
//   }
// }

// export default App;