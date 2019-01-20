import React, { Component } from 'react';
import '../App.scss';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {};
    }
    
    componentDidMount() {
     
      console.log("Menu Component loaded state: ", this.state);
      
    }
    
  render() {
      
    const {
      clearCanvas, 
      drawCircle, 
      drawSquare, 
      drawTriangle, 
      handleInputChange,
      handleInputFocus,
      inputCircleRadius,
      inputFillColor,
      inputHeight,
      inputWidth,
      xOffset,
      yOffset
    } = this.props;
      
    return (
      
      <React.Fragment>
      
        <section className="menuContainer ref=menuContainer">
        
          <button 
            className="drawSquare" 
            onClick={drawSquare}
          >
            Draw Square
          </button>
          
          <button 
            className="drawCircle" 
            onClick={drawCircle}
          >
              Draw Circle
          </button>
          
          <button 
            className="drawTriangle" 
            onClick={drawTriangle}
          >
            Draw Triangle
            </button>
          
          <button 
            className="clearCanvas" 
            onClick={clearCanvas}
          >
            Clear Canvas
          </button>
          
        </section>
        
        <section className="attributesMenu">
          
            <section className="column">
              <label>x: 
                <input 
                  name="xOffset"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  pattern="[0-9]*" 
                  value={xOffset}
                  type="text" 
                >
                </input>
              </label>
              
              <label>y: 
                <input 
                  name="yOffset"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  pattern="[0-9]*" 
                  value={yOffset}
                  type="text" 
                >
                </input>
              </label>
            </section>
            
            <section className="column">
            
              <label>width: 
                <input 
                  name="inputWidth"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  pattern="[0-9]*" 
                  value={inputWidth}
                  type="text" 
                >
                </input>
              </label>
              
              <label>height:
                <input 
                  name="inputHeight"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  pattern="[0-9]*" 
                  value={inputHeight}
                  type="text" 
                >
                </input>
              </label>
              
            </section>
            
            <section className="column">
              
              <label>radius:
                <input 
                  name="inputCircleRadius"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  pattern="[0-9]*" 
                  value={inputCircleRadius}
                  type="text" 
                >
                </input>
              </label>
              
              <label>fill color:
                <input 
                  name="inputFillColor"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  pattern="[0-9]*" 
                  value={inputFillColor}
                  type="text" 
                >
                </input>
              </label>
              
            </section>
          
          </section>
          
      </React.Fragment>
      
    );
  }
}

export default Menu;
