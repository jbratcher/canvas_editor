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
      
    const {
      circleSelected,
      clearCanvas, 
      drawAttributes,
      handleInputChange,
      handleInputFocus,
      handleSelect,
      inputCircleRadius,
      inputFillColor,
      inputStrokeColor,
      inputHeight,
      inputWidth,
      squareSelected,
      triangleSelected,
      xOffset,
      yOffset
    } = this.props;
      
    return (
      
      <section className="menuContainer" id="menuContainer">
      
        <section className="functionsContainer">
        
          <button 
            className="drawSquare" 
            name="squareSelected"
            onClick={handleSelect}
            style={squareSelected 
                    ? {backgroundColor: "#3f51b5", color: "#fff"} 
                    : null
                  }
          >
            Draw Square
          </button>
          
          <button 
            className="drawCircle"
            name="circleSelected"
            onClick={handleSelect}
            style={circleSelected 
                    ? {backgroundColor: "#3f51b5", color: "#fff"} 
                    : null
                  }
          >
              Draw Circle
          </button>
          
          <button 
            className="drawTriangle" 
            name="triangleSelected"
            onClick={handleSelect}
            style={triangleSelected 
                    ? {backgroundColor: "#3f51b5", color: "#fff"} 
                    : null
                  }
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
        
          <a href="#attributeInputs" id="openNav"><i className="fas fa-angle-double-down"></i></a>
          
          <section className="attributeInputs" id="attributeInputs">
          
          <a href="#attributesMenu"id="closeNav"><i className="fas fa-angle-double-up"></i></a>
          
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
              
            </section>
            
            <section className="column">
              
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
              
              <label>stroke color:
                <input 
                  name="inputStrokeColor"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  pattern="[0-9]*" 
                  value={inputStrokeColor}
                  type="text" 
                >
                </input>
              </label>
              
            </section>
            
            <button 
              className="drawAttributesButton" 
              onClick={drawAttributes}
            >
              Draw
            </button>
            
          </section>
          
        </section>
          
      </section>
      
    );
  }
}

export default Menu;
