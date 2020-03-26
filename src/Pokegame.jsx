import React from "react";
import Pokedex from "./Pokedex";
import pokemons from "./pokemons";

class Pokegame extends React.Component {
    dealCards(array) {
        let shuffled = [...array];

        for(let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        if (shuffled.length % 2 > 0) shuffled.pop();

        let delimeter = shuffled.length / 2;

        return [shuffled.slice(0, delimeter), 
                shuffled.slice(delimeter)];
    }

    render() {
        let hands = this.dealCards(pokemons);

        return (
            <div>
                <Pokedex pokemons={hands[0]} />;
                <Pokedex pokemons={hands[1]} />;
            </div>
        );
    }
}

export default Pokegame;
