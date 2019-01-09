import React, { Component } from 'react';
import './App.css';

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
        ctx.fillRect(0,0, 100, 100);
    }
    
  render() {
    return (
      
      <section>
      
        <button onClick={this.drawSquare}>Draw Square</button>
        
        <canvas ref="canvas" width="640px" height="480px">
          Canvas (Your browser doesn't support the canvas element).
        </canvas>
      
      </section>
      
    );
  }
}

export default Canvas;
