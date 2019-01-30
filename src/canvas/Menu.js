import React, { Component } from 'react';
import '../App.scss';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          menuOpened: false,
          menuOpenIcon: "fas fa-angle-double-down",
          menuOpenStyle: {maxHeight: "10rem", transform: "scaleY(1)"},
          menuCloseIcon: "fas fa-angle-double-up",
          menuCloseStyle: {maxHeight: "0", transform: "scaleY(0)"}
        };
    }
    
    componentDidMount() {
     
      console.log("Menu Component loaded state: ", this.state);
      
    }
    
    handleMenuOpen = () => {
      
      const { menuOpened } = this.state;
      
      this.setState({
        menuOpened: !menuOpened
      });
      
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
    
    const { 
      menuCloseIcon,
      menuCloseStyle,
      menuOpened,
      menuOpenIcon,
      menuOpenStyle
    } = this.state;
      
    return (
      
      <section className="menuContainer" id="menuContainer">
      
        <section className="functionsContainer">
        
          
          <button 
            className="drawSquare" 
            name="squareSelected"
            onClick={handleSelect}
            style={squareSelected 
                    ? {backgroundColor: inputFillColor, borderColor: inputStrokeColor} 
                    : null
                  }
          >
          </button>
          
          <button 
            className="drawCircle"
            name="circleSelected"
            onClick={handleSelect}
            style={circleSelected 
                    ? {backgroundColor: inputFillColor, borderColor: inputStrokeColor} 
                    : null
                  }
          >
          </button>
          
          <button 
            className="drawTriangle" 
            name="triangleSelected"
            onClick={handleSelect}
            style={triangleSelected 
                    ? {backgroundColor: inputFillColor, borderColor: inputStrokeColor} 
                    : null
                  }
          >
            

          </button>

          <button 
            className="clearCanvas" 
            onClick={clearCanvas}
          >
            Clear Canvas
          </button>
          
        </section>
        
        <section className="attributesMenu" id="attributesMenu">
        
          <a href="#attributeInputs" id="openNav">
            <i 
              className={menuOpened ? menuCloseIcon : menuOpenIcon}
              onClick={this.handleMenuOpen}
            ></i>
          </a>
          
          <section 
            className="attributeInputs" 
            id="attributeInputs"
            style={menuOpened ? menuOpenStyle : menuCloseStyle}
          >
          
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
            
            { squareSelected ?
            
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
            
            : null }
            
            { circleSelected ?
            
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
            
            : null }
            
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
