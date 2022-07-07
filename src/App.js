import { useRef, useEffect } from "react";
import "./App.scss";
import Person from "./images/person.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, Power2 } from "gsap";

function App() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  /* timeline allows animation chaining */
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(container.current, {
      duration: 0,
      css: { visibility: "visible" },
    })
      .to(imageReveal, { duration: 1.4, width: "0%", ease: Power2.easeInOut })
      .from(image.current, {
        duration: 1.4,
        scale: 1.6,
        ease: Power2.easeInOut,
        delay: -1.6,
      });
  });

  return (
    <section className="main">
      <div className="container" ref={container}>
        <>
          <div className="img-container">
            <img src={Person} alt="person" ref={image} />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
