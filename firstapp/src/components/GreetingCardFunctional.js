import React from 'react';

// Functional Component using props
const GreetingCardFunctional = (props) => {
  return (
    <div>
      <h2>Hello from Functional Component, {props.name}!</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default GreetingCardFunctional;
