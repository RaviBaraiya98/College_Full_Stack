import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementFive = () => setCount(count + 5);

  return (
    <div style={{ border: '1px solid black', padding: '20px', width: '300px', margin: '20px auto', textAlign: 'center' }}>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
      </div>
      <h2>Welcome to CHARUSAT!!!</h2>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <label>
          First Name:&nbsp;
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:&nbsp;
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </div>
    </div>
  );
};

export default CounterApp;
