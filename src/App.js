import React from "react";

const App = (props) => (
  <ul>
    {props.facts.map((fact, i) => {
      return <li>{fact.text}</li>;
    })}
  </ul>
);

export default App;
