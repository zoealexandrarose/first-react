import "./styles.css"; // import css file and apply rules to app component
import React from "react"; // !!

// app component
// reusable piece of code that returns a react element
// only looking at functional components in this project
const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default App; // should be last part of file
