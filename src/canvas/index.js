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
          circleSelected: false,
          xOffset: 0,
          yOffset: 0,
          inputCircleRadius: 1,
          inputFillColor: "",
          inputHeight: 0,
          inputStrokeColor: "",
          inputWidth: 0,
          saveLink: null,
          squareSelected: false,
          triangleSelected: false
        };
    }
    
    clearCanvas = () => {
      const {ctx, canvasWidth, canvasHeight} = this.state;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      this.updateCanvas();
    }
    
    drawAttributes = () => {
      const { circleSelected, squareSelected, triangleSelected } = this.state;
      return circleSelected
       ? this.drawCircle()
       : squareSelected
       ? this.drawSquare()
       : triangleSelected
       ? this.drawTriangle()
       : null;
    }
    
    drawSquare = () => {
      const {ctx, xOffset, yOffset, inputFillColor, inputStrokeColor, inputHeight, inputWidth} = this.state;
      let drawWidth = (Number(inputWidth) + Number(xOffset));
      let drawHeight = (Number(inputHeight) + Number(yOffset));
      ctx.fillStyle = inputFillColor;
      ctx.fillRect(Number(xOffset), Number(yOffset), drawWidth, drawHeight);
      ctx.strokeStyle = inputStrokeColor;
      ctx.strokeRect(Number(xOffset), Number(yOffset), drawWidth, drawHeight);
      console.log("Square drawn at:", "\nx1: ", xOffset, "\ny1: ", yOffset, "\nx2: ", drawWidth, "\ny2: ", drawHeight);
      console.log(this.state);
    }
    
    drawCircle = () => {
      const {ctx, inputCircleRadius, inputFillColor, inputStrokeColor, xOffset, yOffset} = this.state;
      ctx.beginPath();
      ctx.arc(Number(xOffset), Number(yOffset), Number(inputCircleRadius,), 0, 2 * Math.PI);
      ctx.fillStyle = inputFillColor;
      ctx.fill();
      ctx.strokeStyle = inputStrokeColor;
      ctx.stroke();
      console.log(`Cicle drawn at ${xOffset}, ${yOffset}`);
      console.log(this.state);
    }
    
    drawTriangle = () => {
      const {ctx, inputFillColor, inputStrokeColor} = this.state;
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fillStyle = inputFillColor;
      ctx.fill();
      ctx.strokeStyle = inputStrokeColor;
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
    
    handleResize = () => {
      let canvasHeight = this.refs.canvasContainer.offsetHeight;
      let canvasWidth = this.refs.canvasContainer.offsetWidth;
      this.setState({
      canvasHeight: canvasHeight,
      canvasWidth: canvasWidth
    }, this.updateCanvas());
      
    }
    
    handleSelect = e => {
      console.log(e.target.name);
      return !(this.state[e.target.name])
        ? this.setState({
            [e.target.name]: true
          })  
        : this.setState({
          [e.target.name]: false
        });
    }
    
    saveCanvasAsImage = () => {
      const ctx = this.refs.canvas.getContext('2d');
      this.setState({
        saveLink: ctx.canvas.toDataURL("image/jpg")
      });
    }
    
    updateCanvas() {
      let canvasHeight = this.refs.canvasContainer.offsetHeight;
      let canvasWidth = this.refs.canvasContainer.offsetWidth;
      const ctx = this.refs.canvas.getContext('2d');
      ctx.canvas.width  = canvasWidth;
      ctx.canvas.height = canvasHeight;
      ctx.fillStyle = "#fff";
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
      }, this.saveCanvasAsImage());

      this.updateCanvas();
      
      window.addEventListener("resize", this.handleResize);
      
      console.log("Canvas Component loaded state: ", this.state);
      
    }
    
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
    
  render() {
    
    const { 
      canvasHeight,
      canvasWidth,
      circleSelected,
      ctx,
      inputCircleRadius,
      inputFillColor,
      inputHeight,
      inputStrokeColor,
      inputWidth,
      saveCanvasAsImage,
      saveLink,
      squareSelected,
      triangleSelected,
      xOffset,
      yOffset
    } = this.state;
    
    return (
      
      <React.Fragment>
      
        <Menu 
          circleSelected={circleSelected}
          clearCanvas={this.clearCanvas}
          ctx={ctx}
          drawAttributes={this.drawAttributes}
          drawCircle={this.drawCircle}
          drawSquare={this.drawSquare}
          drawTriangle={this.drawTriangle}
          handleInputChange={this.handleInputChange}
          handleInputFocus={this.handleInputFocus}
          handleSelect={this.handleSelect}
          inputCircleRadius={inputCircleRadius}
          inputFillColor={inputFillColor}
          inputHeight={inputHeight}
          inputStrokeColor={inputStrokeColor}
          inputWidth={inputWidth}
          saveCanvasAsImage={saveCanvasAsImage}
          saveLink={saveLink}
          squareSelected={squareSelected}
          triangleSelected={triangleSelected}
          xOffset={xOffset}
          yOffset={yOffset}
          
        />
      
        <section className="canvasContainer" ref="canvasContainer">
          
          <canvas ref="canvas" height="100%" width="100%">
            Canvas (Your browser doesn't support the canvas element).
          </canvas>
          
          <section className="canvasDimensions"><b>Canvas Size:</b> {canvasWidth} x {canvasHeight}</section>
        
        </section>
      
      </React.Fragment>
      
    );
  }
}

export default Canvas;
