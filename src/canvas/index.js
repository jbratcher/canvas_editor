import React, { Component } from 'react';
import Menu from './Menu';
import '../App.scss';

class Canvas extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          ctx: null,
          height: null,
          width: null,
          xStartPos: 0,
          yStartPos: 0,
          inputWidth: 0,
          inputHeight: 0
        };
    }
    
    clearCanvas = () => {
      const {ctx, width, height} = this.state;
      ctx.clearRect(0, 0, width, height);
      this.updateCanvas();
    }
    
    drawSquare = () => {
      const {ctx, xStartPos, yStartPos, inputHeight, inputWidth} = this.state;
      let drawWidth = (Number(inputWidth) + Number(xStartPos));
      let drawHeight = (Number(inputHeight) + Number(yStartPos));
      ctx.fillStyle = "blue";
      ctx.fillRect(Number(xStartPos), Number(yStartPos), drawWidth, drawHeight);
      ctx.stroke();
      console.log("Square drawn at:", "\nx1: ", xStartPos, "\ny1: ", yStartPos, "\nx2: ", drawWidth, "\ny2: ", drawHeight);
      console.log(this.state);
    }
    
    drawCircle = () => {
      const {ctx} = this.state;
      ctx.beginPath();
      ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.stroke();
      console.log(this.state);
    }
    
    drawTriangle = () => {
      const {ctx} = this.state;
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fillStyle="red";
      ctx.fill();
      ctx.stroke();
      console.log(this.state);
    }
    
    handleInputChange = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log(e.target.name);
    }
    
    
    updateCanvas() {
      const height = this.refs.canvasContainer.offsetHeight;
      const width = this.refs.canvasContainer.offsetWidth;
      const ctx = this.refs.canvas.getContext('2d');
      ctx.canvas.width  = width;
      ctx.canvas.height = height;
      ctx.beginPath();
      ctx.fillStyle = "#eee";
      ctx.rect(5,0, ctx.canvas.width-10, ctx.canvas.height);
      ctx.fill();
      ctx.stroke();
      console.log("Browser size: \n", "Width:", width, "Height", height);
    }
    
    componentDidMount() {
     
      this.setState({
        ctx: this.refs.canvas.getContext('2d'),
        height: this.refs.canvasContainer.offsetHeight,
        width: this.refs.canvasContainer.offsetWidth
      });
     
      this.updateCanvas();
      
      console.log("Canvas Component loaded state: ", this.state);
      
    }
    
  render() {
    
    const { 
      xStartPos,
      yStartPos,
      inputHeight,
      inputWidth
    } = this.state;
    
    return (
      
      <React.Fragment>
      
        <Menu 
          clearCanvas={this.clearCanvas}
          drawCircle={this.drawCircle}
          drawSquare={this.drawSquare}
          drawTriangle={this.drawTriangle}
          handleInputChange={this.handleInputChange}
          inputHeight={inputHeight}
          inputWidth={inputWidth}
          xStartPos={xStartPos}
          yStartPos={yStartPos}
          
        />
      
        <section className="canvasContainer" ref="canvasContainer">
          
          <canvas onClick={this.startMouseDrag} ref="canvas" height="100%" width="100%">
            Canvas (Your browser doesn't support the canvas element).
          </canvas>
        
        </section>
      
      </React.Fragment>
      
    );
  }
}

export default Canvas;
