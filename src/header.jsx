import "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import mantra from "./components/Mantra.svg";
import video from "./components/EWAKE-home.mp4";

function Header() {
  return (
    <>
      <div className="container text-center py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8 text-header">
            <p className="text-start">
              Siamo una{" "}
              <strong>
                Fabbrica di Creatività <br />
                Digitale
              </strong>
              <em className="italic-font-family"> indipendente</em> e{" "}
              <span className="text-made-in-Italy">
                made in <br />
                Italy
              </span>
              , guidata e vissuta da <br />
              imprenditori e professionisti del <br />
              digitale.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-12 align-mantra">
            <div className="image-container">
              <img src={mantra} className="mantra" alt="..." />
            </div>
            <video
              className="overlay-video img-fluid"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
