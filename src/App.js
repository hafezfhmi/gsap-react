import { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { gsap, Power3 } from "gsap";

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    console.log(logoItem.current);

    gsap.to(logoItem.current, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });

    gsap.to(textItem.current, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, [logoItem, textItem]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" ref={logoItem} />
        <p ref={textItem}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
