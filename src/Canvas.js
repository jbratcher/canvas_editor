import React, { Component } from 'react';
import './App.scss';

class Canvas extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          height: window.innerHeight,
          width: window.innerWidth
        };
    }
    
    drawSquare = () => {
      const {height, width} = this.state;
      const ctx = this.refs.canvas.getContext('2d');
      this.updateCanvas();
      ctx.fillStyle = "blue";
      ctx.fillRect(width*0.125, height*0.125, width*0.25, height*0.25);
      console.log("Square drawn at:", "\nx1: ", width*0.125, "\ny1: ", height*0.125, "\nx2: ", width*0.25, "\ny2: ", height*0.25);
    }
    
    // startMouseDrag = () => {
    //   null;
    // }
    
   componentDidMount() {
        this.updateCanvas();
    }
    
    updateCanvas() {
      const {height, width} = this.state;
      const ctx = this.refs.canvas.getContext('2d');
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.fillStyle = "#eee";
      ctx.fillRect(0,0, width, height);
      console.log("Browser size: \n", "Width:", width, "Height", height);
    }
    
  render() {
    return (
      
      <section className="canvasContainer">
      
        <button className="drawSquare" onClick={this.drawSquare}>Draw Square</button>
        
        <canvas onClick={this.startMouseDrag} ref="canvas" height="800" width="100%">
          Canvas (Your browser doesn't support the canvas element).
        </canvas>
      
      </section>
      
    );
  }
}

export default Canvas;
