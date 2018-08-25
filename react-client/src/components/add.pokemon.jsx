import React, { Component } from 'react'
import $ from 'jquery'

let style = {
  padding: '10px',
  margin: '10px',
  width: '250px',
  fontSize: '20px',
  fontWeight: 'bolder',
  display: 'block'
}

class AddPokemon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: null,
      name: null,
      imageUrl: null
    }
  }

  savePokemon (data) {
    console.log(data)
    debugger

    $.ajax({
      url: '/api/pokemon',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      success: (res, status) => {
        debugger
        console.log('Saved pokemon')
      }
    })

    // $.post('/api/pokemon', {data}, (res, status) => {
    //   debugger
    //   console.log('Saved pokemon')
    // })
  }

  render () {

    return (
      <span>
        <input style={style}
               placeholder="Enter Pokemon Name"
               onChange={e => {
                 this.setState({name: e.target.value})
               }}
        />
        <input style={style}
               placeholder="Enter Pokemon Number"
               onChange={e => {
                 this.setState({number: e.target.value})
               }}
        />
        <input style={style}
               placeholder="Enter Pokemon Image"
               onChange={e => {
                 this.setState({imageUrl: e.target.value})
               }}
        />
        <button style={style} onClick={() => {
          this.savePokemon(this.state)
        }}>Add Pokemon</button>
      </span>
    )
  }
}

export default AddPokemon