import React, { Component } from 'react';
import Menu from './Menu';
import '../App.scss';

class Canvas extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          ctx: null,
          height: null,
          width: null
        };
    }
    
    clearCanvas = () => {
      const {ctx, width, height} = this.state;
      ctx.clearRect(0, 0, width, height);
      this.updateCanvas();
    }
    
    drawSquare = () => {
      const {ctx, height, width} = this.state;
      ctx.fillStyle = "blue";
      ctx.fillRect(width*0.125, height*0.125, width*0.25, height*0.25);
      ctx.stroke();
      console.log("Square drawn at:", "\nx1: ", width*0.125, "\ny1: ", height*0.125, "\nx2: ", width*0.25, "\ny2: ", height*0.25);
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
    
    return (
      
      <React.Fragment>
      
        <Menu 
          drawCircle={this.drawCircle}
          drawSquare={this.drawSquare}
          drawTriangle={this.drawTriangle}
          clearCanvas={this.clearCanvas}
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
