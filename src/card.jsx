import React, { useRef, useState } from "react";
import Boschetti from "./components/image-boschetti.jpg";
import Infermentum from "./components/Infermentum.png";
import Askoll from "./components/Askoll.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Card() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const cardData = [
    {
      image: Boschetti,
      title: "Boschetti",
      description: "BRAND IMAGE / LABEL DESIGN / WEBSITE",
    },
    {
      image: Askoll,
      title: "Askoll",
      description: "GRAPHIC DESIGN / BRANDING",
    },
    {
      image: Infermentum,
      title: "Infermentum",
      description: "UI/UX DESIGN / MOBILE APP",
    },
  ];

  return (
    <>
      <div className="container-fluid text-left align-container-card">
        <div className="row align-items-start">
          <div className="col text-white letter-spacing">
            PROGETTI SELEZIONATI
          </div>
        </div>
        <div
          className="scroll-container"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div className="d-flex array-card">
            {cardData.map((card, index) => (
              <div className="card text-bg-dark card-size mt-4" key={index}>
                <img
                  src={card.image}
                  className="card-img"
                  id="card-border"
                  alt={card.title}
                />
                <div className="card-img-overlay d-flex flex-column">
                  <hr className="line-green mt-auto" />
                  <h5 className="card-text font-family">{card.title}</h5>
                  <p className="card-text font-weight-bold">
                    <small>{card.description}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white font-family text-vedi-tutti my-3">
          <a href="">Vedi tutti i progetti</a>
        </p>
      </div>
      <hr className="line" />
    </>
  );
}

export default Card;
