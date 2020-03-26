import React from "react";
import Pokedex from "./Pokedex";
import pokemons from "./pokemons";

class Pokegame extends React.Component {
    shuffle(array) {
        let shuffled = [...array];

        for(let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    cut(array) {
        let middle = Math.floor(array.length / 2);

        return [array.slice(0, middle), 
                array.slice(middle, middle * 2)];
    }
    
    getTotalExperience(array) {
        return array.reduce((sum, el) => sum + el.base_experience, 0);
    }

    setWinner(hands) {
        let winnerIndex = hands.reduce((indexOfMax, current, index, arr) => (
            current.exp > arr[indexOfMax].exp ? index : indexOfMax
        ), 0);
        
        hands[winnerIndex].isWinner = true;

        return hands;
    }

    dealCards(array) {
        let shuffled = this.shuffle(array);
        let cutted = this.cut(shuffled);
        let hands = cutted.map(el => ({
            cards : el,
            exp : this.getTotalExperience(el),
            isWinner : false
        }));
        
        return this.setWinner(hands);
    }

    render() {
        let hands = this.dealCards(pokemons);

        return (
            <div>
                {hands.map((h, i) => (
                    <div key={i}>
                    <Pokedex 
                        pokemons={h.cards} 
                        exp={h.exp} 
                        isWinner={h.isWinner}
                    />
                    </div>
                ))}
            </div>
        );
    }
}

export default Pokegame;
