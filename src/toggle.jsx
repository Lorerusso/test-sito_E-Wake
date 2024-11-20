import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";

function ToggleParagraph() {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphRef = useRef(null);

  const toggleText = () => {
    if (isExpanded) {
      gsap.to(paragraphRef.current, {
        height: "13.8em",
        duration: 0.5,
        ease: "power1.out",
      });
    } else {
      gsap.to(paragraphRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power1.out",
      });
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    gsap.set(paragraphRef.current, { height: "13.8em", overflow: "hidden" });
  }, []);

  return (
    <div className="col text-start">
      <div
        ref={paragraphRef}
        className={`p-text-i-nostri-settori ${
          isExpanded ? "text-full" : "text-opacity"
        }`}
      >
        <p>
          Analisi interna, Analisi contestuale, Definizione di obiettivi
          S.M.A.R.T. e attuazione operativa: questo è l’abbicì di una strategia
          vera “a prova di mercato”. In altre parole facciamo le giuste domande
          e interroghiamo il mercato prima e solo quando abbiamo le risposte
          stabiliamo cosa fare e come muoverci. Per noi non esistono soluzioni
          copiaincolla. Voi non chiedetecene.
        </p>
      </div>
      <span
        className="button-text-i-nostri-settori"
        onClick={(e) => {
          e.preventDefault();
          toggleText();
        }}
      >
        {isExpanded ? "Mostra meno" : "Leggi tutto"}
      </span>
    </div>
  );
}

export default ToggleParagraph;
