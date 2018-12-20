import React, { Component } from 'react';
import './../App.css';
import { Container } from 'reactstrap';
import './Button.js';
import './Select.js';
import ChooseLevel from './ChooseLevel.js';
import Canvas from './Canvas.js';

class App extends Component {
  render() {
    return (
      <Container>
        <Canvas />
        {/* <ChooseLevel /> */}
      </Container>
    )
  }
}

export default App;
