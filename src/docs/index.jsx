import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <MyComponent
        style={{ whiteSpace: 'pre' }}
        text={`For God so loved the world that he gave his one and only Son,\nthat whoever believes in him shall not perish but have eternal life.\nJohn 3:16`}
        cps={15}
        delay={5.5}
        as="h1"
      />
      <br/>
      <MyComponent
        style={{ whiteSpace: 'pre' }}
        text={`เพราะว่าพระเจ้าทรงรักโลกจนได้ประทานพระบุตรองค์เดียวของพระองค์\nเพื่อทุกคนที่เชื่อในพระบุตรนั้นจะไม่พินาศแต่มีชีวิตนิรันดร์\nยอห์น 3:16`}
        cps={15}
        delay={6}
        as="h2"
      />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
