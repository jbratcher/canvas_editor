import React, { Component } from 'react';
import '../App.scss';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          circleSelected: false,
          squareSelected: false,
          selectedButtonColor: "green",
          triangleSelected: false
        };
    }
    
    componentDidMount() {
     
      console.log("Menu Component loaded state: ", this.state);
      
    }
    
    selectSquare = () => {
      this.setState({
        circleSelected: false,
        squareSelected: true,
        triangleSelected: false
      });
      console.log("Square to draw selected");
    }
    
  render() {
      
    const {
      clearCanvas, 
      drawAttributes,
      drawCircle, 
      drawSquare, 
      drawTriangle, 
      handleInputChange,
      handleInputFocus,
      inputCircleRadius,
      inputFillColor,
      inputStrokeColor,
      inputHeight,
      inputWidth,
      selectSquare,
      xOffset,
      yOffset
    } = this.props;
      
    return (
      
      <section className="menuContainer">
      
        <section className="functionsContainer">
        
          <button 
            className="drawSquare" 
            onClick={this.selectSquare}
            style={this.state.squareSelected 
                    ? {backgroundColor: "#4DB6AC"} 
                    : {backgroundColor: "#eee"}
                  }
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
        
          <i className="fas fa-angle-double-down"></i>
          
          <section className="atrributeInputs">
          
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
