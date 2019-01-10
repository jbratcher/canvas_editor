import React, { Component } from 'react';
import './App.scss';

class Canvas extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    drawSquare = () => {
    
      const ctx = this.refs.canvas.getContext('2d');
      ctx.fillStyle = "blue";
      ctx.fillRect(0,0, 10, 100);
      
    }
    
    
   componentDidMount() {
        this.updateCanvas();
    }
    
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = "#eee";
        ctx.fillRect(0,0, 300, 300);
    }
    
  render() {
    return (
      
      <section className="canvasContainer">
      
        <button className="drawSquare" onClick={this.drawSquare}>Draw Square</button>
        
        <canvas ref="canvas" height="800" width="100%">
          Canvas (Your browser doesn't support the canvas element).
        </canvas>
      
      </section>
      
    );
  }
}

export default Canvas;
