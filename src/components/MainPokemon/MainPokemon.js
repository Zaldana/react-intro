import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MainPokemon extends Component {
    state = {
        isLoading: false,
        pokemonArray: [],
    };

    async componentDidMount() {
        this.setState({
            isLoading: true,
        });
        try {
            let payload = await axios.get(
                "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
            );

            this.setState({
                pokemonArray: payload.data.results,
                isLoading: false,
            });
        } catch (e) { }
    }
    render() {
        return (
            <div>
                {this.state.isLoading ? (
                    <div>...loading</div>
                ) : (
                    this.state.pokemonArray.map((item) => {
                        return (
                            <div key={item.name}>
                                <Link to={`/fetch-pokemon/${item.name}`}>
                                    <div>{item.name}</div>{" "}
                                </Link>
                            </div>
                        );
                    })
                )}
            </div>
        );
    }
}

export default MainPokemon;