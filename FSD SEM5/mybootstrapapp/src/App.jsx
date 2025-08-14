import React from 'react';
import Card from 'react-bootstrap/Card';
import Headercomponent from './Components/Headercomponent';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
     Hi I am parent Component
     <Headercomponent />
       <Button variant="success">Success</Button>
     <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <button> send </button>
    <Button> Send </Button>
    </div>
  )
}

export default App
