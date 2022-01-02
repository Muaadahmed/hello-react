import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  const {children, reset} = props;

  return <button onClick={() => reset()}>{children}</button>;
};

const Application = () => {
  const [name, setName] = useState("Muaad");

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <input placeholder='Type your name'></input>
      <Button reset={reset}>Reset</Button>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
