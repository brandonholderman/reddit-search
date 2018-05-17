import React, { Compnent } from 'react'
import superagent from 'superagent'

class SearchForm extends Compnent {
  constructor(props) {
  super(props)
  this.state = {
    searchFormBoard: '',
    searchFormLimit: 50,
  }

  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
}

handleSubmit(e) {
  e.preventDefault()
  superagent.get(`https://www.reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`)
  .then(res => this.props.setAppState({ results: res.body }))
  .catch(console.error)

}

handleChange(e) {
  this.setState({[e.target.name]: e.target.value})
}

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          name="searchName"
          value={this.state.searchName}
          onChange={this.handleChange}/>

          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm