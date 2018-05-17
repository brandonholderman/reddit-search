import React, { Component } from 'react'

class SearchResultList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="results">
        <h2>{this.props.results.name}</h2>
        <img src={this.props.results.sprites.front_default} alt=""/>
      </div>
    )
  }
}

export default SearchResultList