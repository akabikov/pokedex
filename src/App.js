import React from 'react';
// import './App.css';
import Pokecard from "./Pokecard";

function App() {
  let pokemon = {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112};
  return (
    <Pokecard pokemon={pokemon} />
  );
}

export default App;
