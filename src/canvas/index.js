import React, { Component } from 'react';
import Menu from './Menu';
import '../App.scss';

class Canvas extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          ctx: null,
          canvasHeight: 0,
          canvasWidth: 0,
          xOffset: 0,
          yOffset: 0,
          inputCircleRadius: 0,
          inputFillColor: "",
          inputHeight: 0,
          inputWidth: 0
        };
    }
    
    clearCanvas = () => {
      const {ctx, canvasWidth, canvasHeight} = this.state;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      this.updateCanvas();
    }
    
    drawSquare = () => {
      const {ctx, xOffset, yOffset, inputFillColor, inputHeight, inputWidth} = this.state;
      let drawWidth = (Number(inputWidth) + Number(xOffset));
      let drawHeight = (Number(inputHeight) + Number(yOffset));
      ctx.fillStyle = inputFillColor;
      ctx.fillRect(Number(xOffset), Number(yOffset), drawWidth, drawHeight);
      ctx.stroke();
      console.log("Square drawn at:", "\nx1: ", xOffset, "\ny1: ", yOffset, "\nx2: ", drawWidth, "\ny2: ", drawHeight);
      console.log(this.state);
    }
    
    drawCircle = () => {
      const {ctx, inputCircleRadius, inputFillColor, xOffset, yOffset} = this.state;
      ctx.beginPath();
      ctx.arc(Number(xOffset), Number(yOffset), Number(inputCircleRadius,), 0, 2 * Math.PI);
      ctx.fillStyle = inputFillColor;
      ctx.fill();
      ctx.stroke();
      console.log(this.state);
    }
    
    drawTriangle = () => {
      const {ctx, inputFillColor} = this.state;
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fillStyle = inputFillColor;
      ctx.fill();
      ctx.stroke();
      console.log(this.state);
    }
    
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log(e.target.name);
    }
    
    handleInputFocus = e => {
      e.target.value = "";
      console.log(e.target.name);
    }
    
    
    updateCanvas() {
      const canvasHeight = this.refs.canvasContainer.offsetHeight;
      const canvasWidth = this.refs.canvasContainer.offsetWidth;
      const ctx = this.refs.canvas.getContext('2d');
      ctx.canvas.width  = canvasWidth;
      ctx.canvas.height = canvasHeight;
      ctx.beginPath();
      ctx.fillStyle = "#eee";
      ctx.rect(5,0, ctx.canvas.width-10, ctx.canvas.height);
      ctx.fill();
      ctx.stroke();
      console.log("Canvas size: \n", "Width:", canvasWidth, "Height", canvasHeight);
    }
    
    componentDidMount() {
     
      this.setState({
        ctx: this.refs.canvas.getContext('2d'),
        canvasHeight: this.refs.canvasContainer.offsetHeight,
        canvasWidth: this.refs.canvasContainer.offsetWidth
      });
     
      this.updateCanvas();
      
      console.log("Canvas Component loaded state: ", this.state);
      
    }
    
  render() {
    
    const { 
      inputCircleRadius,
      inputFillColor,
      inputHeight,
      inputWidth,
      xOffset,
      yOffset
    } = this.state;
    
    return (
      
      <React.Fragment>
      
        <Menu 
          clearCanvas={this.clearCanvas}
          drawCircle={this.drawCircle}
          drawSquare={this.drawSquare}
          drawTriangle={this.drawTriangle}
          handleInputChange={this.handleInputChange}
          handleInputFocus={this.handleInputFocus}
          inputCircleRadius={inputCircleRadius}
          inputFillColor={inputFillColor}
          inputHeight={inputHeight}
          inputWidth={inputWidth}
          xOffset={xOffset}
          yOffset={yOffset}
          
        />
      
        <section className="canvasContainer" ref="canvasContainer">
          
          <canvas ref="canvas" height="100%" width="100%">
            Canvas (Your browser doesn't support the canvas element).
          </canvas>
        
        </section>
      
      </React.Fragment>
      
    );
  }
}

export default Canvas;
