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
      
      <React.Fragment>
      
        <section className="menuContainer ref=menuContainer">
        
          <button className="drawSquare" onClick={drawSquare}>Draw Square</button>
          
          <button className="drawCircle" onClick={drawCircle}>Draw Circle</button>
          
          <button className="drawTriangle" onClick={drawTriangle}>Draw Triangle</button>
          
          <button className="clearCanvas" onClick={clearCanvas}>Clear Canvas</button>
          
          <section className="drawDimensions">
          
            <section className="column">
              <label>x: <input type="text"></input></label>
              <label>y: <input type="text"></input></label>
            </section>
            
            <section className="column">
              <label>width: <input type="text"></input></label>
              <label>height: <input type="text"></input></label>
            </section>
          
          </section>
          
        </section>
          
      </React.Fragment>
      
    );
  }
}

export default Menu;
