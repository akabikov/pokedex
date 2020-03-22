// Shows a single Pokemon, with their name, image, and type.

import React from 'react';
// import pokemons from './pokemons';

class Pokecard extends React.Component {
    getImgSrc(id) {
        const addZeros = n => `00${n}`.slice(-3);
    
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZeros(id)}.png`;
    }

    render() {
        return (
            <div>
                <h2>{this.props.pokemon.name}</h2>
                <img 
                    src={this.getImgSrc(this.props.pokemon.id)} 
                    alt={this.props.pokemon.name}
                />
                <div>Type: {this.props.pokemon.type}</div>
                <div>EXP: {this.props.pokemon.base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;