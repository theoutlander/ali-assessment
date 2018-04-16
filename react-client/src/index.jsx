import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


const App = (props) => <Starter num={ props.number } />;

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));
{/*ReactDOM.render(
		<div>
			<h1>add a Pokemom</h1>
			<form>
			number:<input id="POST-number" type="text" name="number"/><br/>
			name:<input id="POST-name" type="text" name="name"/><br/>
			types:<input id="POST-types" type="text" name="types"/><br/>
			imageUrl:<input id="POST-imageUrl" type="text" name="imageUrl"/><br/>
			<input type="submit" onClick={this.addPokemon.bind(this)}  value="Save"/>
			</form>
		</div>,document.getElementById('app')

	)*/}