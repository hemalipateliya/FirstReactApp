import React, { Component } from 'react';
import Intro from '../Intro';

import './App.css';



class App extends Component {

  state={

    series:[]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2> Tv-series list</h2>
          
         
        </header>
        <Intro message="here you can find your favourite Tv-series"/>
        The length of the array {this.state.series.length}
      </div>
    );
  }
}

export default App;
