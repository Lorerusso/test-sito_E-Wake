import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./components/logo-e-wake.svg";
import Mantra from "./components/Mantra.svg";
import Hamburger from "./components/hamburger-icon.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <nav className="navbar bg-nav fixed-top py-4">
        <div className="container-fluid w-75">
          <Link className="navbar-brand" to="/">
            <img src={Logo} className="navbar-brand-logo" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="text-white d-flex justify-content-center align-items-center">
              <img src={Hamburger} className="img-fluid me-3" alt="" />
              Menù
            </span>
          </button>
          <div
            className={`offcanvas-menu ${isOpen ? "open" : ""} ${
              isClosing ? "closing" : ""
            }`}
          >
            <div className="container navbar-menu">
              <div className="row gap-menu justify-content-between">
                <div className="col-6 text-start justify-content-center">
                  <ul className="text-nav">
                    <li className="font-family">
                      <hr className="text-white" />
                      <a href="">Progetti</a>
                      <hr className="text-white" />
                    </li>
                    <li className="text-nav font-family">
                      <a href="">Servizi</a>
                      <hr className="text-white" />
                    </li>
                    <li className="text-nav font-family">
                      <Link to="/chi-siamo">Chi Siamo</Link>
                      <hr className="text-white" />
                    </li>
                    <li className="text-nav font-family">
                      <a href="">Entra nel team</a>
                      <hr className="text-white" />
                    </li>
                    <li className="text-nav font-family">
                      <a href="">Contatti</a>
                      <hr className="text-white" />
                    </li>
                  </ul>
                </div>
                <div className="col-6 text-white">
                  <div>
                    <p className="font-family text-vediamoci">Vediamoci</p>
                    <p className="font-family text-address">
                      Viale del lavoro, 33 <br /> 37135 - Verona
                    </p>
                  </div>
                  <div className="my-5">
                    <p className="font-family text-vediamoci">Contattaci</p>
                    <p className="font-family text-address">
                      045 82 13 434 <br /> info@ewake.agency
                    </p>
                  </div>
                  <button className="button-inizia-un-progetto">
                    Inizia un progetto
                  </button>
                  <img
                    src={Mantra}
                    className="img-fluid img-nav-mantra w-75"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
