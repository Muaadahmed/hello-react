import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  const {children, reset} = props;

  return <button onClick={() => reset()}>{children}</button>;
};

const Application = () => {
  const [name, setName] = useState("");

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <input value={name} placeholder="Type your name" attribute="Type your name" onChange={(event) => setName(event.target.value)}/>
      <Button reset={reset}>Reset</Button>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
