import React, { Component } from 'react';
import MainHeader from './main-header/main-header'
import SearchForm from './app/search-form'
import SearchResultList from './app/search-result-list'

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        results: undefined,
      }
    }

  render() {
    return (
      <div className="App">
       <MainHeader/>
        <SearchForm setAppState={this.setState.bind(this)}/>

        { this.state.results ?
          <SearchResultList results={this.state.results} />
          :
          undefined
        }
      </div>
    );
  }
}

export default App;
