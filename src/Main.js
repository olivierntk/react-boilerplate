import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <div>
        Hello world from Main.js
        <Button bsStyle="primary">Info</Button>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component
          for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default Main;
