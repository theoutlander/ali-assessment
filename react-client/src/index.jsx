import React from 'react';
import ReactDOM from 'react-dom';
// import PokemonContainer from './components/pokemon.container';
import $ from 'jquery';
import PokemonContainer from './components/pokemon.container'


const App = (props) => <PokemonContainer />;

ReactDOM.render(<App/>, document.getElementById('app'));

