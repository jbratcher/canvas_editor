import React, { Component } from 'react';
import Canvas from './canvas'
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
          <h1 className="Tagline">Canvas Editor</h1>
        </header>
        
        <main>
        
          <h2>Main Section</h2>
          
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
