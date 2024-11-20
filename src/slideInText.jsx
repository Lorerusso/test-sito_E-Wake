import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

function MarqueeText() {
  const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const containerWidth = textRef.current.parentElement.offsetWidth;

    gsap.fromTo(
      textRef.current,
      { x: containerWidth },
      {
        x: -textWidth,
        duration: 10,
        ease: "linear",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <h1
        ref={textRef}
        style={{ display: "inline-block" }}
        className="text-white text-mantra"
      >
        PENSA, CREA. SVEGLIA
      </h1>
      <hr className="line" />
    </div>
  );
}

export default MarqueeText;
