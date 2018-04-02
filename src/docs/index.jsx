import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <MyComponent
        message="Hello guy!"
        delay={30}
      />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
