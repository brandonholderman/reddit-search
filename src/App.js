import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import MainHeader from './main-header/main-header'
import SearchForm from './app/SearchForm'

class App extends Component {
  render() {
    return (
      <div className="App">
       <MainHeader/>
       <SearchForm/>
      </div>
    );
  }
}

export default App;
