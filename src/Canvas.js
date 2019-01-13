import React, { Component } from 'react';
import './App.scss';

class Canvas extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          height: null,
          width: null
        };
    }
    
    drawSquare = () => {
      const height = this.refs.canvasContainer.offsetHeight;
      const width = this.refs.canvasContainer.offsetWidth;
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
     
      this.setState({
        height: this.refs.canvasContainer.offsetHeight,
        width: this.refs.canvasContainer.offsetWidth
      });
     
      this.updateCanvas();
      
      console.log("Canvas Component loaded state: ", this.state);
      
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
    
  render() {
    return (
      
      <section className="canvasContainer" ref="canvasContainer">
      
        <button className="drawSquare" onClick={this.drawSquare}>Draw Square</button>
        
        <canvas onClick={this.startMouseDrag} ref="canvas" height="100%" width="100%">
          Canvas (Your browser doesn't support the canvas element).
        </canvas>
      
      </section>
      
    );
  }
}

export default Canvas;
