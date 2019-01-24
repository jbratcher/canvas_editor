import React, { Component } from 'react';
import '../App.scss';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          circleSelected: false,
          squareSelected: false,
          triangleSelected: false
        };
    }
    
    componentDidMount() {
     
      console.log("Menu Component loaded state: ", this.state);
      
    }
    
    handleSelect = (e) => {
      console.log(e.target.name);
      return !(this.state[e.target.name])
        ? this.setState({
            [e.target.name]: true
          })  
        : this.setState({
          [e.target.name]: false
        });
    }
    
    selectSquare = () => {
      return !this.state.squareSelected
        ? (this.setState({
          squareSelected: true
        }),
        console.log("Square to draw selected"))
        : (this.setState({
          squareSelected: false
        }),
        console.log("Square deselected"));
    }
    
  render() {
      
    const {
      clearCanvas, 
      drawAttributes,
      handleInputChange,
      handleInputFocus,
      inputCircleRadius,
      inputFillColor,
      inputStrokeColor,
      inputHeight,
      inputWidth,
      xOffset,
      yOffset
    } = this.props;
      
    return (
      
      <section className="menuContainer">
      
        <section className="functionsContainer">
        
          <button 
            className="drawSquare" 
            name="squareSelected"
            onClick={this.handleSelect}
            style={this.state.squareSelected 
                    ? {backgroundColor: "#9fa8da"} 
                    : {backgroundColor: "#ddd"}
                  }
          >
            Draw Square
          </button>
          
          <button 
            className="drawCircle"
            name="circleSelected"
            onClick={this.handleSelect}
            style={this.state.circleSelected 
                    ? {backgroundColor: "#9fa8da"} 
                    : {backgroundColor: "#ddd"}
                  }
          >
              Draw Circle
          </button>
          
          <button 
            className="drawTriangle" 
            name="triangleSelected"
            onClick={this.handleSelect}
            style={this.state.triangleSelected 
                    ? {backgroundColor: "#9fa8da"} 
                    : {backgroundColor: "#ddd"}
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
