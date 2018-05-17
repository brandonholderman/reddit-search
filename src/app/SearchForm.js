import React, { Compnent } from 'react'

class SearchForm extends Compnent {
  constructor(props) {
  super(props)
  this.state = {
      searchName = '',
  }

  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
}

handleSubmit(e) {
  e.preventDefault()
}

handleChange(e) {
  this.setState()
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