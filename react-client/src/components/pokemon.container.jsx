import React from 'react'
import Pokemon from './pokemon'
import $ from 'jquery'
import AddPokemon from './add.pokemon'

class PokemonContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      filter: null
    }

    this.filterInput = React.createRef()
  }

  componentDidMount () {
    $.ajax({
      url: '/api/pokemon',
      // data: { signature: authHeader },
      type: 'GET',
      beforeSend: function (xhr) {xhr.setRequestHeader('User', 'test-value')},
      success: function (data, status) {
        this.setState({loading: false, data})
      }.bind(this)
    })

    // $.get('/api/pokemon', (data, status) => {
    //   this.setState({loading: false, data})
    // })
  }

  renderPokemon (data, filter) {
    let filteredData = this.state.filter ? data.filter(d => {
      return d.types.includes(filter)
    }) : data
    let val = filteredData.map(d => <Pokemon key={d.number} data={d}/>)

    if (val.length == 0) {
      return 'No Pokemon found matching filter'
    }

    return val
  }

  render () {
    if (this.state.loading) {
      return 'Loading Pokemon...'
    }

    return (
      <React.Fragment>
        <input
          ref={this.filterInput}
          style={{
            padding: '20px',
            margin: '20px',
            width: '250px',
            fontSize: '30px',
            fontWeight: 'bolder'
          }}
          onChange={e => this.setState({filter: e.target.value})}/>
        <AddPokemon/>
        {this.renderPokemon(this.state.data, this.state.filter)}
      </React.Fragment>
    )
  }

  componentDidUpdate () {
    if (this.filterInput.current) {
      this.filterInput.current.focus()
    }
  }
}

export default PokemonContainer