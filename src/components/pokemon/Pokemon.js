import React, { Component } from 'react'
import axios from "axios";
import Loading from "../common/Loading";
import PokemonDetails from './PokemonDetails';

export class Pokemon extends Component {

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
            
            console.log(result);
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
        console.log(this.state);
    };

    render() {
        return (
            <React.Fragment>
            <div>
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
                    //loading component imported from common folder
                    <Loading />
                ) : (
                    <PokemonDetails
                        name={this.state.name}
                        picture={this.state.picture}
                        abilitiesArray={this.state.abilitiesArray}
                    />
                )}
                </div>
            </React.Fragment>
        )
    }
}

export default Pokemon
