import React, { Component } from 'react';
import '../App.scss';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    componentDidMount() {
     
      console.log("Menu Component loaded state: ", this.state);
      
    }
    
  render() {
      
    const {drawCircle, drawSquare, drawTriangle, clearCanvas} = this.props;
      
    return (
      
        <section className="buttonContainer ref=buttonContainer">
        
          <button className="drawSquare" onClick={drawSquare}>Draw Square</button>
          
          <button className="drawCircle" onClick={drawCircle}>Draw Circle</button>
          
          <button className="drawTriangle" onClick={drawTriangle}>Draw Triangle</button>
          
          <button className="clearCanvas" onClick={clearCanvas}>Clear Canvas</button>
          
        </section>
      
    );
  }
}

export default Menu;
