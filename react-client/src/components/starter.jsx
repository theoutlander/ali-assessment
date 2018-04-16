import React from 'react';
import $ from 'jquery'
class Starter extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pokemoms:{number:0,name:"",types:[],imageUrl:""}
	  }
	}

	addPokemon(data){
/*		this.setState({
		this.state.pokemoms.number:this.POSTnumber.value;
	    })*/
	//    $('body').append(`<h1>${this.state.pokemoms.number}</h1>`)
		this.state.pokemoms.number=$('#POSTnumber').val();
		this.state.pokemoms.name=$('#POSTname').val();
		this.state.pokemoms.types=$('#POSTtypes').val();
		this.state.pokemoms.imageUrl=$('#POSTimageUrl').val();
		this.view();
		console.log(this.state.pokemoms.number)
		$.ajax({
		  type: "POST",
		  url: '/',
		  data: {data},
		  success: function(data){
		  	console.log("my datttaaaaa",data)
		  }
		});

	}
	view(){
		return(
			<div>
		<div>
		{this.state.pokemoms.number}
		</div>
		<div>
		{this.state.pokemoms.number}
		</div>
		<div>
		{this.state.pokemoms.number}
		</div>
		</div>
			)
	}
	render(){
	return(
		
		<div>
			<h1>add a Pokemom</h1>
			<form>
			number:<input id="POSTnumber" type="text" name="number"/><br/>
			name:<input id="POSTname" type="text" name="name"/><br/>
			types:<input id="POSTtypes" type="text" name="types"/><br/>
			imageUrl:<input id="POSTimageUrl" type="text" name="imageUrl"/><br/>
			<input type="submit" onClick={this.addPokemon.bind(this)}  value="Save"/>
			</form>
		</div>



	)

  }

}
export default Starter;
/*
import React from 'react';

const Starter = ({num}) => (
  <div>
    <h1> Pokemom! </h1> 
    {num + 10}
  </div>
);

export default Starter;*/