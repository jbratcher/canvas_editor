import React, { Component } from 'react';
import Canvas from './Canvas'
import './App.scss';

class App extends Component {
  
  constructor() {
    super();
    this.state={};
  }
  
  render() {
    return (
      <div className="App">
      
        <header className="Header">
          <p className="Tagline">Canvas Editor</p>
        </header>
        
        <main>
        
          <h1>Main Section</h1>
          
          <Canvas />
        
        </main>
        
        <footer className="Footer">
          <p>Canvas Editor 2018</p>
        </footer>
        
      </div>
    );
  }
}

export default App;
