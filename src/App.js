import "./styles.css"; // import css file and apply rules to app component
import React from "react"; // !!

// app component
// reusable piece of code that returns a react element
// only looking at functional components in this project
const App = () => {
  return (
    <div className="App">
      <h1>Zesty</h1>
      <h2>A photography project by Ella Fielding</h2>
    </div>
  );
};

export default App; // should be last part of file
