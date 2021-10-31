
import axios from "axios";
import React, { Component } from "react";
import PokemonDetails from "../pokemon/PokemonDetails";

export class MainPokemonDetail extends Component {
    state = {
        name: "",
        picture: "",
        abilitiesArray: [],
        isError: false,
        errorMessage: "",
        isLoading: false,
    };

    async componentDidMount() {
        this.setState({
            isLoading: true,
        });
        console.log(this.props);
        try {
            let payload = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`
            );

            this.setState({
                name: payload.data.name,
                picture: payload.data.sprites.front_default,
                abilitiesArray: payload.data.abilities,
                isError: false,
                errorMessage: "",
                isLoading: false,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? (
                    <div>...loading</div>
                ) : (
                    <PokemonDetails
                        name={this.state.name}
                        picture={this.state.picture}
                        abilitiesArray={this.state.abilitiesArray}
                    />
                )}
            </div>
        );
    }
}

export default MainPokemonDetail;