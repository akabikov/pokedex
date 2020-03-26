// Is provided, via props, an array of objects describing different pokemon, 
// and renders a series of Pokecard components.

import React from 'react';
import Pokecard from "./Pokecard";
import pokemons from "./pokemons";
import './Pokedex.css';

class Pokedex extends React.Component {
    static defaultProps = { pokemons }
    
    render() {
        return (
            <div>
                <h1 className="pokedex-title">
                    
                </h1>
                <ul className="pokedex-container">
                    { this.props.pokemons.map(p => (
                    <li key={p.id}>
                        <Pokecard pokemon={p} />
                    </li>
                    )) }
                </ul>
                
                {this.props.isWinner ? 
                <p className="pokedex-winner-message">THIS HAND WINS!</p> : 
                <p className="pokedex-loser-message">THIS HAND LOSE</p>}
                <p className="pokedex-experience">Total experience: {this.props.exp}</p>
                
            </div>
        );
    }
}

export default Pokedex;