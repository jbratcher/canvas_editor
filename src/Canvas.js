import React, { Component } from 'react';
import './App.scss';

class Canvas extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          ctx: null,
          height: null,
          width: null
        };
    }
    
    drawSquare = () => {
      const {ctx, height, width} = this.state;
      this.updateCanvas();
      ctx.fillStyle = "blue";
      ctx.fillRect(width*0.125, height*0.125, width*0.25, height*0.25);
      ctx.stroke();
      console.log("Square drawn at:", "\nx1: ", width*0.125, "\ny1: ", height*0.125, "\nx2: ", width*0.25, "\ny2: ", height*0.25);
      console.log(this.state);
    }
    
    drawCircle = () => {
      const {ctx} = this.state;
      this.updateCanvas();
      ctx.beginPath();
      ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.stroke();
      console.log(this.state);
    }
    
    drawTriangle = () => {
      const {ctx} = this.state;
      this.updateCanvas();
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
      ctx.fillStyle = "#eee";
      ctx.fillRect(0,0, width, height);
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
      
        <section className="buttonContainer ref=buttonContainer">
        
          <button className="drawSquare" onClick={this.drawSquare}>Draw Square</button>
          
          <button className="drawCircle" onClick={this.drawCircle}>Draw Circle</button>
          
          <button className="drawTriangle" onClick={this.drawTriangle}>Draw Triangle</button>
        
        </section>
        
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
