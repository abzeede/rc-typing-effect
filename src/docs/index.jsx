import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <MyComponent
        style={{ whiteSpace: 'pre' }}
        text="This is an example test."
        cps={15}
        delay={5.5}
        as="h1"
      />
      <br/>
      <MyComponent
        style={{ whiteSpace: 'pre' }}
        text="นี่คือข้อความทดสอบ"
        cps={15}
        delay={6}
        as="h2"
      />
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
