import React from 'react'

const Pokemon = ({data}) => (
  <div style={{
    padding: '20px',
    border: '1px solid black',
    width: '250px',
    margin: '20px',
    textAlign: 'center',
    background: 'lightgreen'
  }}>
    <h2 style={{
      background: 'green'
    }}>{data.name}</h2>
    <h4>{data.types.map(t => <div>{t}</div>)}</h4>
    <img src={data.imageUrl}/>
  </div>
)

export default Pokemon