//rfce (shortcut functional component)

import React, { Component } from 'react'
import PropTypes from "prop-types"

//You can also pass the name, picture, abillitiesArray
function PokemonDetails(props) {
        
    return (
        <div>
            <div>
                <div>name: {props.name}</div>
                <div>
                    picture: <img src={props.picture} alt="pokemon" />
                </div>
                 <div>
                    <ul>
                        {/* map the ability object array 2 levels down to get to the name of the ability and the index */}
                        {props.abilitiesArray.map(
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
        </div>
    )
}

PokemonDetails.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    abilitiesArray: PropTypes.array.isRequired,
};

export default PokemonDetails
