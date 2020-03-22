// Shows a single Pokemon, with their name, image, and type.

import React from 'react';
import './Pokecard.css';

class Pokecard extends React.Component {
    getImgSrc(id) {
        const addZeros = n => `00${n}`.slice(-3);
    
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZeros(id)}.png`;
    }

    render() {
        const {id, name, type, base_experience} = this.props.pokemon;
        return (
            <div className="pokecard">
                <h2>{name}</h2>
                <img 
                    src={this.getImgSrc(id)} 
                    alt={name}
                />
                <div>Type: {type}</div>
                <div>EXP: {base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;