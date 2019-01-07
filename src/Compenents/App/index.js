import React, { Component } from 'react';
import Intro from '../Intro';
import Series from '../../containers/Series'
import 'whatwg-fetch';
import './App.css';



class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2> Tv-series list</h2>
          
         
        </header>
        <Intro message="here you can find your favourite TV series :)"/>
        
        <Series/>
      </div>
    );
  }
}

export default App;
