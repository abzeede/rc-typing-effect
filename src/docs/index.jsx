import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>
        <MyComponent
          text="This is an example text. You might think this is bug but it i"
        />
      </h1>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
