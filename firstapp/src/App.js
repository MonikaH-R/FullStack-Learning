// src/App.js

import React, { useState } from 'react';
import './App.css';
import GreetingCardFunctional from './components/GreetingCardFunctional'; 
import ShowCount from './components/ShowCount';
import Button from 'react-bootstrap/Button';
function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>My React App with Functional Components, Props & State</h1>

      {/* Counter Section */}
      <div>
        <h2>Simple Counter</h2>
        <p>Current Count: {count}</p>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={incrementCount}>Increment</button>
        <ShowCount ct ={count} />
      </div>

      {/* GreetingCardFunctional with props */}
      <GreetingCardFunctional name="Alice" message="Welcome to React!" />
      <Button variant="primary">Primary</Button>
      <Button variant="light">Light</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export default App;
