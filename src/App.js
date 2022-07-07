import { useRef, useEffect, useState } from "react";
import "./App.css";

import { gsap, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  /* Animate circleRed onClick */
  const handleExpand = () => {
    gsap.to(circleRed.current, {
      duration: 0.8,
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });

    setState(true);
  };

  /* Animate circleRed onClick */
  const handleShrink = () => {
    gsap.to(circleRed.current, {
      duration: 0.8,
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });

    setState(false);
  };

  useEffect(() => {
    /* Make app component visible */
    gsap.to(app.current, { duration: 0, css: { visibility: "visible" } });

    /* Make the circles appear with animation */
    gsap.from([circle.current, circleRed.current, circleBlue.current], {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      duration: 0.8,
      stagger: 0.2,
    });

    /* Make the circles appear with animation */
    // gsap.from(circle.current, {
    // duration: 0.8,
    // opacity: 0,
    // x: 40,
    // ease: Power3.easeOut,
    // });
    // gsap.from(circleRed.current, {
    //   duration: 0.8,
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.2,
    // });
    // gsap.from(circleBlue.current, {
    //   duration: 0.8,
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.4,
    // });
  }, []);

  return (
    <div className="App" ref={app}>
      <header className="App-header">
        <div className="circle-container">
          <div className="circle" ref={circle}></div>
          <div
            className="circle red"
            ref={circleRed}
            onClick={state !== true ? handleExpand : handleShrink}
          ></div>
          <div className="circle blue" ref={circleBlue}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
